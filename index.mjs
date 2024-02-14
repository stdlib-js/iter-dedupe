// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(d,l){var m,a,u,v,f;if(!n(d))throw new TypeError(s("invalid argument. First argument must an iterator protocol-compliant object. Value: `%s`.",d));if(arguments.length>1){if(!r(l))throw new TypeError(s("invalid argument. Second argument must be a positive integer. Value: `%s`.",l));f=l}else f=1;return u=NaN,m=0,e(a={},"next",p),e(a,"return",j),i&&t(d[i])&&e(a,i,h),a;function p(){var e;if(v)return{done:!0};if((e=d.next()).done)return v=!0,e;if(e.value===u){if((m+=1)>f){for(;e.value===u;)if((e=d.next()).done)return v=!0,e;u=e.value,m=1}}else u=e.value,m=1;return{value:u,done:!1}}function j(e){return v=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return o(d[i](),f)}}export{o as default};
//# sourceMappingURL=index.mjs.map
