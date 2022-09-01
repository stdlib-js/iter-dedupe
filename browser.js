// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterDedupe=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[j],e=m(t,j);try{t[j]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[j]=r:delete t[j],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function S(t){return p(t)||h(t)}function O(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var E="object"==typeof self?self:null,I="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof T?T:null;var P=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(E)return E;if(I)return I;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function F(t){return null!==t&&"object"==typeof t}function G(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(F));var k="function"==typeof y||"object"==typeof x||"function"==typeof A?function(t){return G(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?G(t).toLowerCase():e};function L(t){return"function"===k(t)}function M(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var Y=s();function D(t){return"object"==typeof t&&(t instanceof R||(Y?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function H(t){return M(t)||D(t)}a(H,"isPrimitive",M),a(H,"isObject",D);var X=Number.POSITIVE_INFINITY,q=R.NEGATIVE_INFINITY,z=Math.floor;function J(t){return t<X&&t>q&&z(e=t)===e;var e}function K(t){return M(t)&&J(t)}function Q(t){return D(t)&&J(t.valueOf())}function W(t){return K(t)||Q(t)}function Z(t){return K(t)&&t>0}function $(t){return Q(t)&&t.valueOf()>0}function tt(t){return Z(t)||$(t)}function et(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&L(t.next)}a(W,"isPrimitive",K),a(W,"isObject",Q),a(tt,"isPrimitive",Z),a(tt,"isObject",$);var rt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function nt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function t(e,r){var n,o,u,i,f;if(!et(e))throw new TypeError(nt("0CI4H",e));if(arguments.length>1){if(!Z(r))throw new TypeError(nt("0CI4I",r));f=r}else f=1;return u=NaN,n=0,a(o={},"next",c),a(o,"return",l),rt&&L(e[rt])&&a(o,rt,y),o;function c(){var t;if(i)return{done:!0};if((t=e.next()).done)return i=!0,t;if(t.value===u){if((n+=1)>f){for(;t.value===u;)if((t=e.next()).done)return i=!0,t;u=t.value,n=1}}else u=t.value,n=1;return{value:u,done:!1}}function l(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function y(){return t(e[rt](),f)}}}));
//# sourceMappingURL=browser.js.map
