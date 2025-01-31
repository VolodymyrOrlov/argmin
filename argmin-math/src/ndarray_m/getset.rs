// Copyright 2018-2022 argmin developers
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use crate::{ArgminGet, ArgminSet};
use ndarray::Array1;

macro_rules! make_getset {
    ($t:ty) => {
        impl ArgminGet<usize, $t> for Array1<$t> {
            #[inline]
            fn get(&self, pos: usize) -> &$t {
                &self[pos]
            }
        }

        impl ArgminSet<usize, $t> for Array1<$t> {
            #[inline]
            fn set(&mut self, pos: usize, x: $t) {
                self[pos] = x;
            }
        }
    };
}

make_getset!(i32);
make_getset!(i64);
make_getset!(f32);
make_getset!(f64);

#[cfg(test)]
mod tests {
    use super::*;
    use ndarray::Array1;
    use paste::item;

    macro_rules! make_test {
        ($t:ty) => {
            item! {
                #[test]
                fn [<test_get_set_ $t>]() {

                    let mut v: Array1<$t> = Array1::zeros(3);
                    ArgminSet::<usize, $t>::set(&mut v, 0, 1 as $t);
                    ArgminSet::<usize, $t>::set(&mut v, 1, 2 as $t);
                    ArgminSet::<usize, $t>::set(&mut v, 2, 3 as $t);
                    assert_eq!(*ArgminGet::<usize, $t>::get(&v, 0) as i64, 1 as i64);
                    assert_eq!(*ArgminGet::<usize, $t>::get(&v, 1) as i64, 2 as i64);
                    assert_eq!(*ArgminGet::<usize, $t>::get(&v, 2) as i64, 3 as i64);

                }
            }
        };
    }

    make_test!(f32);
    make_test!(f64);
}
