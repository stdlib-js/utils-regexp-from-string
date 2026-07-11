"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=a(function(x,i){
var t=require('@stdlib/assert-is-string/dist').isPrimitive,o=require('@stdlib/regexp-regexp/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function p(e){if(!t(e))throw new TypeError(g('1XLB7',e));return e=o().exec(e),e?new RegExp(e[1],e[2]):null}i.exports=p
});var s=n();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
