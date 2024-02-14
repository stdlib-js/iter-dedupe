/**
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

'use strict';

var randi = require( '@stdlib/random-iter-discrete-uniform' );
var iterDedupe = require( './../lib' );

// Create a seeded iterator for generating pseudorandom integers on the interval [1,3]:
var rand = randi( 1, 3, {
	'seed': 1234,
	'iter': 100
});

// Create an iterator which limits "runs" to at most 3 values:
var it = iterDedupe( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value );
}
