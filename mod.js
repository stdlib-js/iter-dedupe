// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(e){return e!=e}function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,o,a,u,l,f,s,p,g,d,y;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var A,V=Object.prototype,F=V.toString,P=V.__defineGetter__,N=V.__defineSetter__,C=V.__lookupGetter__,$=V.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var R=A;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function L(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&W.call(e,r)}var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=M()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[z],r=X(e,z);try{e[z]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[z]=t:delete e[z],n}:function(e){return U.call(e)},D=Boolean,H=Boolean.prototype.toString;var J=M();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function Q(e){return L(e)||K(e)}B(Q,"isPrimitive",L),B(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ne="object"==typeof te?te:null,ie="object"==typeof globalThis?globalThis:null;var oe=function(e){if(arguments.length){if(!L(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(ee)return ee;if(re)return re;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ce=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var le=/^\s*function\s*([^(]*)/i;B(ue,"REGEXP",le);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function se(e){return null!==e&&"object"==typeof e}function pe(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var ge="function"==typeof G||"object"==typeof ce||"function"==typeof ae?function(e){return pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?pe(e).toLowerCase():r};function de(e){return"function"===ge(e)}function ye(e){return"number"==typeof e}var be=Number,he=be.prototype.toString;var ve=M();function we(e){return"object"==typeof e&&(e instanceof be||(ve?function(e){try{return he.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function me(e){return ye(e)||we(e)}B(me,"isPrimitive",ye),B(me,"isObject",we);var je=Number.POSITIVE_INFINITY,_e=be.NEGATIVE_INFINITY,Ee=Math.floor;function Se(e){return e<je&&e>_e&&Ee(r=e)===r;var r}function xe(e){return ye(e)&&Se(e)}function Te(e){return we(e)&&Se(e.valueOf())}function ke(e){return xe(e)||Te(e)}function Ie(e){return xe(e)&&e>0}function Oe(e){return Te(e)&&e.valueOf()>0}function Ae(e){return Ie(e)||Oe(e)}B(ke,"isPrimitive",xe),B(ke,"isObject",Te),B(Ae,"isPrimitive",Ie),B(Ae,"isObject",Oe);var Ve="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null;function Fe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function Pe(e,r){var t,n,i,o,a,c,u;if(u=typeof(c=e),null===c||"object"!==u&&"function"!==u||!de(c.next))throw new TypeError(Fe("0Ol44",e));if(arguments.length>1){if(!Ie(r))throw new TypeError(Fe("0Ol45",r));a=r}else a=1;return i=NaN,t=0,B(n={},"next",(function(){var r;if(o)return{done:!0};if((r=e.next()).done)return o=!0,r;if(r.value===i){if((t+=1)>a){for(;r.value===i;)if((r=e.next()).done)return o=!0,r;i=r.value,t=1}}else i=r.value,t=1;return{value:i,done:!1}})),B(n,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Ve&&de(e[Ve])&&B(n,Ve,(function(){return Pe(e[Ve](),a)})),n}export{Pe as default};
//# sourceMappingURL=mod.js.map
