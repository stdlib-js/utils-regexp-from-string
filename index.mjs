// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-regexp@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function t(t){if(!e(t))throw new TypeError(r("invalid argument. Must provide a regular expression string. Value: `%s`.",t));return(t=s().exec(t))?new RegExp(t[1],t[2]):null}export{t as default};
//# sourceMappingURL=index.mjs.map
