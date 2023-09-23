// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,x=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,o,a,l,f,s,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,s=0;s<e.length;s++)if(u(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,x(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function N(e){var r,t,n;if(!V(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var P,F=Object.prototype,C=F.toString,$=F.__defineGetter__,B=F.__defineSetter__,R=F.__lookupGetter__,L=F.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var G=P;function Z(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=/./;function U(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y,z=Object.prototype.toString,D=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"";Y=X()?function(e){var r,t,n,i,o;if(null==e)return z.call(e);t=e[H],o=H,r=null!=(i=e)&&D.call(i,o);try{e[H]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[H]=t:delete e[H],n}:function(e){return z.call(e)};var J=Y,K=Boolean,Q=Boolean.prototype.toString,ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function te(e){return U(e)||re(e)}function ne(){return new Function("return this;")()}Z(te,"isPrimitive",U),Z(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!U(e))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ce.document&&ce.document.childNodes,le=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var se,pe=/^\s*function\s*([^(]*)/i;Z(fe,"REGEXP",pe),se=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};var ge=se;function de(e){return null!==e&&"object"==typeof e}var ye=function(e){if("function"!=typeof e)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de);function be(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(de,"isObjectLikeArray",ye);var he="function"==typeof M||"object"==typeof le||"function"==typeof ue?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?be(e).toLowerCase():r};function ve(e){return"function"===he(e)}function we(e){return"number"==typeof e}var me=Number,je=me.prototype.toString,_e=X();function Ee(e){return"object"==typeof e&&(e instanceof me||(_e?function(e){try{return je.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function xe(e){return we(e)||Ee(e)}Z(xe,"isPrimitive",we),Z(xe,"isObject",Ee);var Se=Number.POSITIVE_INFINITY,Te=me.NEGATIVE_INFINITY,Oe=Math.floor;function Ie(e){return e<Se&&e>Te&&Oe(r=e)===r;var r}function ke(e){return we(e)&&Ie(e)}function Ae(e){return Ee(e)&&Ie(e.valueOf())}function Ve(e){return ke(e)||Ae(e)}function Ne(e){return ke(e)&&e>0}function Pe(e){return Ae(e)&&e.valueOf()>0}function Fe(e){return Ne(e)||Pe(e)}function Ce(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&ve(e.next)}Z(Ve,"isPrimitive",ke),Z(Ve,"isObject",Ae),Z(Fe,"isPrimitive",Ne),Z(Fe,"isObject",Pe);var $e,Be,Re=Object.prototype.hasOwnProperty,Le="function"==typeof q&&"symbol"==typeof q("foo")&&(Be="iterator",null!=($e=q)&&Re.call($e,Be))&&"symbol"==typeof q.iterator?Symbol.iterator:null;function Ge(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function e(r,t){var n,i,o,a,c;if(!Ce(r))throw new TypeError(Ge("0Ol44,Ln",r));if(arguments.length>1){if(!Ne(t))throw new TypeError(Ge("0Ol45,IB",t));c=t}else c=1;return o=NaN,n=0,Z(i={},"next",u),Z(i,"return",l),Le&&ve(r[Le])&&Z(i,Le,f),i;function u(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;if(e.value===o){if((n+=1)>c){for(;e.value===o;)if((e=r.next()).done)return a=!0,e;o=e.value,n=1}}else o=e.value,n=1;return{value:o,done:!1}}function l(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return e(r[Le](),c)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterDedupe=r();
//# sourceMappingURL=browser.js.map
