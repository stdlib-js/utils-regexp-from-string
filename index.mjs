// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-regexp@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var t=e.isPrimitive,i=r,n=s;var d=function(e){if(!t(e))throw new TypeError(n("invalid argument. Must provide a regular expression string. Value: `%s`.",e));return(e=i().exec(e))?new RegExp(e[1],e[2]):null};export{d as default};
//# sourceMappingURL=index.mjs.map
