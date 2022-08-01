/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Returns an iterator which removes consecutive duplicated values.
*
* ## Notes
*
* -   `NaN` values are considered distinct.
* -   Uniqueness is determined according to strict equality. Accordingly, objects are **not** checked for deep equality.
* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param limit - number of allowed consecutive duplicates (default: 1)
* @throws second argument must be a positive integer
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var arr = array2iterator( [ 1, 1, 2, 3, 3 ] );
* var iter = iterDedupe( arr );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/
declare function iterDedupe( iterator: Iterator, limit?: number ): Iterator;


// EXPORTS //

export = iterDedupe;