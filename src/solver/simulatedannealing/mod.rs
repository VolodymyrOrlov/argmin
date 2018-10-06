// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! # Simulated Annealing
//!
//! TODO: Proper documentation.
//! TODO: What should happen in next_iter if algorithm has already terminated?
//!
//! Detailed information is available on
//! [Wikipedia](https://en.wikipedia.org/wiki/Simulated_annealing).
// //!
// //! # Example
// //!
// //! ```rust
// //! todo
// //! ```

use prelude::*;
use rand;
use rand::Rng;
use std;
use std::default::Default;

/// Definition of built-in temperature functions for Simulated Annealing.
///
/// Given the initial temperature `t_init` and the iteration number `i`, the current temperature
/// `t_i` is given as follows:
///
/// `SATempFunc::TemperatureFast`: `t_i = t_init / i`
/// `SATempFunc::Boltzmann`: `t_i = t_init / ln(i)`
/// `SATempFunc::Exponential`: `t_i = t_init * 0.95^i`
/// `SATempFunc::Custom`: User provided temperature update function which has to implement the
/// function signature `&Fn(init_temp: f64, iteration_number: u64) -> f64`. See
/// `SimulatedAnnealing::custom_temp_func()` for details on how to provide a custom temperature
/// update function.
pub enum SATempFunc {
    /// `t_i = t_init / i`
    TemperatureFast,
    /// `t_i = t_init / ln(i)`
    Boltzmann,
    /// `t_i = t_init * x^i`
    Exponential(f64),
    /// User-provided temperature function. The first parameter must be the current temperature and
    /// the second parameter must be the iteration number.
    Custom(Box<Fn(f64, u64) -> f64>),
}

/// Simulated Annealing struct
#[derive(ArgminSolver)]
#[log("initial temperature" => "self.init_temp")]
#[log("maximum number of iterations" => "self.base.max_iters()")]
#[log("stall_iter_accepted_limit" => "self.stall_iter_accepted_limit")]
#[log("stall_iter_best_limit" => "self.stall_iter_best_limit")]
#[log("reanneal_fixed" => "self.reanneal_fixed")]
#[log("reanneal_accepted" => "self.reanneal_accepted")]
#[log("reanneal_best" => "self.reanneal_best")]
pub struct SimulatedAnnealing<T, H>
where
    T: Clone + Default,
    H: Clone + Default,
{
    /// Initial temperature
    init_temp: f64,
    /// which temperature function?
    temp_func: SATempFunc,
    /// Number of iterations used for the caluclation of temperature. This is needed for
    /// reannealing!
    temp_iter: u64,
    /// Iterations since the last accepted solution
    stall_iter_accepted: u64,
    /// Stop if stall_iter_accepted exceedes this number
    stall_iter_accepted_limit: u64,
    /// Iterations since the last best solution was found
    stall_iter_best: u64,
    /// Stop if stall_iter_best exceedes this number
    stall_iter_best_limit: u64,
    /// Reanneal after this number of iterations is reached
    reanneal_fixed: u64,
    /// Similar to `iter`, but will be reset to 0 when reannealing is performed
    reanneal_iter_fixed: u64,
    /// Reanneal after no accepted solution has been found for `reanneal_accepted` iterations
    reanneal_accepted: u64,
    /// Similar to `stall_iter_accepted`, but will be reset to 0 when reannealing  is performed
    reanneal_iter_accepted: u64,
    /// Reanneal after no new best solution has been found for `reanneal_best` iterations
    reanneal_best: u64,
    /// Similar to `stall_iter_best`, but will be reset to 0 when reannealing is performed
    reanneal_iter_best: u64,
    /// current temperature
    cur_temp: f64,
    /// previous cost
    prev_cost: f64,
    /// random number generator
    rng: rand::ThreadRng,
    /// base
    base: ArgminBase<T, f64, H>,
}

impl<T, H> SimulatedAnnealing<T, H>
where
    T: Clone + Default,
    H: Clone + Default,
{
    /// Constructor
    ///
    /// Parameters:
    ///
    /// `cost_function`: cost function
    /// `init_param`: Initial parameter vector
    /// `init_temp`: Initial temperature
    pub fn new(
        cost_function: Box<ArgminOperator<Parameters = T, OperatorOutput = f64, Hessian = H>>,
        init_param: T,
        init_temp: f64,
    ) -> Result<Self, Error> {
        let prev_cost = cost_function.apply(&init_param)?;
        if init_temp <= 0_f64 {
            Err(ArgminError::InvalidParameter {
                parameter: "initial temperature".to_string(),
            }
            .into())
        } else {
            Ok(SimulatedAnnealing {
                init_temp: init_temp,
                temp_func: SATempFunc::TemperatureFast,
                temp_iter: 0u64,
                stall_iter_accepted: 0u64,
                stall_iter_accepted_limit: std::u64::MAX,
                stall_iter_best: 0u64,
                stall_iter_best_limit: std::u64::MAX,
                reanneal_fixed: std::u64::MAX,
                reanneal_iter_fixed: 0,
                reanneal_accepted: std::u64::MAX,
                reanneal_iter_accepted: 0,
                reanneal_best: std::u64::MAX,
                reanneal_iter_best: 0,
                cur_temp: init_temp,
                prev_cost: prev_cost,
                rng: rand::thread_rng(),
                base: ArgminBase::new(cost_function, init_param),
            })
        }
    }

    /// Set temperature function to one of the options in `SATempFunc`.
    pub fn temp_func(&mut self, temperature_func: SATempFunc) -> &mut Self {
        self.temp_func = temperature_func;
        self
    }

    /// The optimization stops after there has been no accepted solution after `iter` iterations
    pub fn stall_accepted(&mut self, iter: u64) -> &mut Self {
        self.stall_iter_accepted_limit = iter;
        self
    }

    /// The optimization stops after there has been no new best solution after `iter` iterations
    pub fn stall_best(&mut self, iter: u64) -> &mut Self {
        self.stall_iter_best_limit = iter;
        self
    }

    /// Start reannealing after `iter` iterations
    pub fn reannealing_fixed(&mut self, iter: u64) -> &mut Self {
        self.reanneal_fixed = iter;
        self
    }

    /// Start reannealing after no accepted solution has been found for `iter` iterations
    pub fn reannealing_accepted(&mut self, iter: u64) -> &mut Self {
        self.reanneal_accepted = iter;
        self
    }

    /// Start reannealing after no new best solution has been found for `iter` iterations
    pub fn reannealing_best(&mut self, iter: u64) -> &mut Self {
        self.reanneal_best = iter;
        self
    }

    /// Acceptance function
    ///
    /// Any solution where `next_cost < prev_cost` will be accepted. Whenever a new solution is
    /// worse than the previous one, the acceptance probability is calculated as:
    ///
    /// `1 / (1 + exp((next_cost - prev_cost) / current_temperature))`,
    ///
    /// which will always be between 0 and 0.5.
    fn accept(&mut self, next_param: &T, next_cost: f64) -> (bool, bool) {
        let prob: f64 = self.rng.gen();
        let mut new_best = false;
        let accepted = if (next_cost < self.prev_cost)
            || (1.0 / (1.0 + ((next_cost - self.prev_cost) / self.cur_temp).exp()) > prob)
        {
            // If yes, update the parameter vector for the next iteration.
            self.prev_cost = next_cost;
            self.base.set_cur_param(next_param.clone());

            // In case the new solution is better than the current best, update best as well.
            if next_cost < self.base.best_cost() {
                new_best = true;
                self.base.set_best_cost(next_cost);
                self.base.set_best_param(next_param.clone());
            }
            true
        } else {
            false
        };
        (accepted, new_best)
    }

    /// Update the temperature based on the current iteration number.
    ///
    /// Updates are performed based on specific update functions. See `SATempFunc` for details.
    fn update_temperature(&mut self) {
        self.cur_temp = match self.temp_func {
            SATempFunc::TemperatureFast => self.init_temp / ((self.temp_iter + 1) as f64),
            SATempFunc::Boltzmann => self.init_temp / ((self.temp_iter + 1) as f64).ln(),
            SATempFunc::Exponential(x) => self.init_temp * x.powf((self.temp_iter + 1) as f64),
            SATempFunc::Custom(ref func) => func(self.init_temp, self.temp_iter),
        };
    }

    /// Perform annealing
    fn anneal(&mut self) -> Result<T, Error> {
        let tmp = self.base.cur_param();
        let cur_temp = self.cur_temp.clone();
        self.modify(&tmp, cur_temp)
    }

    fn reanneal(&mut self) -> (bool, bool, bool) {
        let out = (
            self.reanneal_iter_fixed >= self.reanneal_fixed,
            self.reanneal_iter_accepted >= self.reanneal_accepted,
            self.reanneal_iter_best >= self.reanneal_best,
        );
        if out.0 || out.1 || out.2 {
            self.reanneal_iter_fixed = 0;
            self.reanneal_iter_accepted = 0;
            self.reanneal_iter_best = 0;
            self.cur_temp = self.init_temp;
            self.temp_iter = 0;
        }
        out
    }

    /// Update the stall iter variables
    fn update_stall_and_reanneal_iter(&mut self, accepted: bool, new_best: bool) {
        self.stall_iter_accepted = match accepted {
            false => self.stall_iter_accepted + 1,
            true => 0,
        };

        self.reanneal_iter_accepted = match accepted {
            false => self.reanneal_iter_accepted + 1,
            true => 0,
        };

        self.stall_iter_best = match new_best {
            false => self.stall_iter_best + 1,
            true => 0,
        };

        self.reanneal_iter_best = match new_best {
            false => self.reanneal_iter_best + 1,
            true => 0,
        };
    }
}

impl<T, H> ArgminNextIter for SimulatedAnnealing<T, H>
where
    T: Clone + Default,
    H: Clone + Default,
{
    type Parameters = T;
    type OperatorOutput = f64;
    type Hessian = H;

    /// Perform one iteration of SA algorithm
    fn next_iter(&mut self) -> Result<ArgminIterationData<Self::Parameters>, Error> {
        // Careful: The order in here is *very* important, even if it may not seem so. Everything
        // is linked to the iteration number, and getting things mixed up will lead to strange
        // behaviour. None of these strange behaviour is dangerous, but still.

        // Make a move
        let new_param = self.anneal()?;

        // Evaluate cost function with new parameter vector
        let new_cost = self.apply(&new_param)?;

        // Decide whether new parameter vector should be accepted.
        // If no, move on with old parameter vector.
        let (accepted, new_best) = self.accept(&new_param, new_cost);

        // Update stall iter variables
        self.update_stall_and_reanneal_iter(accepted, new_best);

        let (r_fixed, r_accepted, r_best) = self.reanneal();

        // Update temperature for next iteration.
        self.temp_iter += 1;
        // Todo: this variable may not be necessary (temp_iter does the same?)
        self.reanneal_iter_fixed += 1;

        self.update_temperature();

        let mut out = ArgminIterationData::new(new_param, new_cost);
        out.add_kv(make_kv!(
                "t" => self.cur_temp;
                "new_be" => new_best;
                "acc" => accepted;
                "st_i_be" => self.stall_iter_best;
                "st_i_ac" => self.stall_iter_accepted;
                "ra_i_fi" => self.reanneal_iter_fixed;
                "ra_i_be" => self.reanneal_iter_best;
                "ra_i_ac" => self.reanneal_iter_accepted;
                "ra_fi" => r_fixed;
                "ra_be" => r_best;
                "ra_ac" => r_accepted;
            ));
        Ok(out)
    }
}