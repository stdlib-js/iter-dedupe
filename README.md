<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterDedupe

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which removes consecutive duplicated values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-dedupe
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var iterDedupe = require( '@stdlib/iter-dedupe' );
```

#### iterDedupe( iterator\[, limit] )

Returns an [iterator][mdn-iterator-protocol] which removes consecutive duplicated values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterDedupe( array2iterator( [ 1, 1, 2, 3, 3, 3, 4, 4 ] ) );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The returned [iterator][mdn-iterator-protocol] removes **consecutive** duplicated values and does **not** return globally unique values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterDedupe( array2iterator( [ 1, 1, 2, 1, 1, 2 ] ) );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

var bool = it.next().done;
// returns true
```

To specify the number of allowed consecutive duplicated values, provide a second argument.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var it = iterDedupe( array2iterator( [ 1, 1, 2, 3, 3, 3, 3, 4, 4, 4 ] ), 2 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   `NaN` values are considered **distinct**.

    ```javascript
    var array2iterator = require( '@stdlib/array-to-iterator' );

    var it = iterDedupe( array2iterator( [ NaN, NaN, NaN, NaN ] ) );
    // returns <Object>

    var v = it.next().value;
    // returns NaN

    v = it.next().value;
    // returns NaN

    v = it.next().value;
    // returns NaN

    v = it.next().value;
    // returns NaN

    var bool = it.next().done;
    // returns true
    ```

-   Uniqueness is determined according to strict equality. Accordingly, objects are **not** checked for deep equality.

    ```javascript
    var array2iterator = require( '@stdlib/array-to-iterator' );

    var it = iterDedupe( array2iterator( [ {}, {}, {}, {} ] ) );
    // returns <Object>

    var v = it.next().value;
    // returns {}

    v = it.next().value;
    // returns {}

    v = it.next().value;
    // returns {}

    v = it.next().value;
    // returns {}

    var bool = it.next().done;
    // returns true
    ```

-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randi = require( '@stdlib/random-iter-discrete-uniform' );
var iterDedupe = require( '@stdlib/iter-dedupe' );

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
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter/dedupe-by`][@stdlib/iter/dedupe-by]</span><span class="delimiter">: </span><span class="description">create an iterator which removes consecutive values that resolve to the same value according to a provided function.</span>
-   <span class="package-name">[`@stdlib/iter/unique`][@stdlib/iter/unique]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-dedupe.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-dedupe

[test-image]: https://github.com/stdlib-js/iter-dedupe/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-dedupe/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-dedupe/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-dedupe?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-dedupe.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-dedupe/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-dedupe/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-dedupe/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-dedupe/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-dedupe/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-dedupe/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/dedupe-by]: https://github.com/stdlib-js/iter-dedupe-by

[@stdlib/iter/unique]: https://github.com/stdlib-js/iter-unique

<!-- </related-links> -->

</section>

<!-- /.links -->
