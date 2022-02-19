// Copyright 2018-2022 argmin developers
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! Steepest Descent method
//!
//! [SteepestDescent](struct.SteepestDescent.html)
//!
//! # References:
//!
//! \[0\] Jorge Nocedal and Stephen J. Wright (2006). Numerical Optimization.
//! Springer. ISBN 0-387-30303-0.

use crate::core::{
    ArgminFloat, ArgminIterData, ArgminLineSearch, ArgminOp, ArgminResult, Error, Executor,
    IterState, OpWrapper, SerializeAlias, Solver, State,
};
use argmin_math::ArgminMul;
#[cfg(feature = "serde1")]
use serde::{Deserialize, Serialize};

/// Steepest descent iteratively takes steps in the direction of the strongest negative gradient.
/// In each iteration, a line search is employed to obtain an appropriate step length.
///
/// # References:
///
/// \[0\] Jorge Nocedal and Stephen J. Wright (2006). Numerical Optimization.
/// Springer. ISBN 0-387-30303-0.
#[derive(Clone)]
#[cfg_attr(feature = "serde1", derive(Serialize, Deserialize))]
pub struct SteepestDescent<L> {
    /// line search
    linesearch: L,
}

impl<L> SteepestDescent<L> {
    /// Constructor
    pub fn new(linesearch: L) -> Self {
        SteepestDescent { linesearch }
    }
}

impl<O, L, F> Solver<IterState<O>> for SteepestDescent<L>
where
    O: ArgminOp<Output = F, Float = F>,
    O::Param: SerializeAlias + ArgminMul<O::Float, O::Param>,
    L: Clone + ArgminLineSearch<O::Param, O::Float> + Solver<IterState<O>>,
    F: ArgminFloat,
{
    const NAME: &'static str = "Steepest Descent";

    fn next_iter(
        &mut self,
        op: &mut OpWrapper<O>,
        state: &mut IterState<O>,
    ) -> Result<ArgminIterData<IterState<O>>, Error> {
        let param_new = state.take_param().unwrap();
        let new_cost = op.apply(&param_new)?;
        let new_grad = op.gradient(&param_new)?;

        self.linesearch
            .set_search_direction(new_grad.mul(&(O::Float::from_f64(-1.0).unwrap())));

        // Run solver
        let ArgminResult {
            operator: line_op,
            state: mut linesearch_state,
        } = Executor::new(op.take_op().unwrap(), self.linesearch.clone(), param_new)
            .configure(|config| config.grad(new_grad).cost(new_cost))
            .ctrlc(false)
            .run()?;

        // Get back operator and function evaluation counts
        op.consume_op(line_op);

        Ok(ArgminIterData::new()
            .param(linesearch_state.take_param().unwrap())
            .cost(linesearch_state.get_cost()))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::solver::linesearch::MoreThuenteLineSearch;
    use crate::test_trait_impl;

    test_trait_impl!(
        steepest_descent,
        SteepestDescent<MoreThuenteLineSearch<Vec<f64>, f64>>
    );
}
