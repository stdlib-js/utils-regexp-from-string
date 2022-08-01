// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-regexp@v0.0.8-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function t(t){if(!e(t))throw new TypeError(s("0lWBr",t));return(t=r().exec(t))?new RegExp(t[1],t[2]):null}export{t as default};
//# sourceMappingURL=index.mjs.map
