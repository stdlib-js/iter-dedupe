"use strict";var q=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var d=q(function(F,c){
var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=require('@stdlib/assert-is-function/dist'),h=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,w=require('@stdlib/assert-is-iterator-like/dist'),v=require('@stdlib/symbol-iterator/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r,t){var u,i,n,a,o;if(!w(r))throw new TypeError(l('0Ol44',r));if(arguments.length>1){if(!h(t))throw new TypeError(l('0Ol45',t));o=t}else o=1;return n=NaN,u=0,i={},s(i,"next",m),s(i,"return",g),v&&x(r[v])&&s(i,v,p),i;function m(){var e;if(a)return{done:!0};if(e=r.next(),e.done)return a=!0,e;if(e.value===n){if(u+=1,u>o){for(;e.value===n;)if(e=r.next(),e.done)return a=!0,e;n=e.value,u=1}}else n=e.value,u=1;return{value:n,done:!1}}function g(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){return f(r[v](),o)}}c.exports=f
});var y=d();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
