// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[j],r=m(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[j]=e:delete t[j],n}:function(t){return v.call(t)},w=Boolean.prototype.toString;var g=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function S(t){return p(t)||h(t)}function O(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var E="object"==typeof self?self:null,I="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof T?T:null;var P=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(E)return E;if(I)return I;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function F(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(F));var k="function"==typeof y||"object"==typeof x||"function"==typeof A?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===k(t)}function M(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var Y=s();function H(t){return"object"==typeof t&&(t instanceof R||(Y?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function X(t){return M(t)||H(t)}a(X,"isPrimitive",M),a(X,"isObject",H);var q=Number.POSITIVE_INFINITY,z=R.NEGATIVE_INFINITY,D=Math.floor;function J(t){return t<q&&t>z&&D(r=t)===r;var r}function K(t){return M(t)&&J(t)}function Q(t){return H(t)&&J(t.valueOf())}function W(t){return K(t)||Q(t)}function Z(t){return K(t)&&t>0}function $(t){return Q(t)&&t.valueOf()>0}function tt(t){return Z(t)||$(t)}function rt(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}a(W,"isPrimitive",K),a(W,"isObject",Q),a(tt,"isPrimitive",Z),a(tt,"isObject",$);var et="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function nt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function ot(t,r){var e,n,o,u,i;if(!rt(t))throw new TypeError(nt("0CI4H",t));if(arguments.length>1){if(!Z(r))throw new TypeError(nt("0CI4I",r));i=r}else i=1;return o=NaN,e=0,a(n={},"next",f),a(n,"return",c),et&&L(t[et])&&a(n,et,l),n;function f(){var r;if(u)return{done:!0};if((r=t.next()).done)return u=!0,r;if(r.value===o){if((e+=1)>i){for(;r.value===o;)if((r=t.next()).done)return u=!0,r;o=r.value,e=1}}else o=r.value,e=1;return{value:o,done:!1}}function c(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return ot(t[et](),i)}}export{ot as default};
//# sourceMappingURL=mod.js.map
