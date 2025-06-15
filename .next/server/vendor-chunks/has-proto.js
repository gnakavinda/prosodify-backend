"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(rsc)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    __proto__: null,\n    foo: {}\n};\n// @ts-expect-error: TS errors on an inherited property for some reason\nvar result = {\n    __proto__: test\n}.foo === test.foo && !(test instanceof Object);\n/** @type {import('.')} */ module.exports = function hasProto() {\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsT0FBTztJQUNWQyxXQUFXO0lBQ1hDLEtBQUssQ0FBQztBQUNQO0FBRUEsdUVBQXVFO0FBQ3ZFLElBQUlDLFNBQVM7SUFBRUYsV0FBV0Q7QUFBSyxFQUFFRSxHQUFHLEtBQUtGLEtBQUtFLEdBQUcsSUFDN0MsQ0FBRUYsQ0FBQUEsZ0JBQWdCSSxNQUFLO0FBRTNCLHdCQUF3QixHQUN4QkMsT0FBT0MsT0FBTyxHQUFHLFNBQVNDO0lBQ3pCLE9BQU9KO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9zb2RpZnktYmFja2VuZC8uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanM/NmYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0ZXN0ID0ge1xuXHRfX3Byb3RvX186IG51bGwsXG5cdGZvbzoge31cbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3I6IFRTIGVycm9ycyBvbiBhbiBpbmhlcml0ZWQgcHJvcGVydHkgZm9yIHNvbWUgcmVhc29uXG52YXIgcmVzdWx0ID0geyBfX3Byb3RvX186IHRlc3QgfS5mb28gPT09IHRlc3QuZm9vXG5cdCYmICEodGVzdCBpbnN0YW5jZW9mIE9iamVjdCk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1Byb3RvKCkge1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJuYW1lcyI6WyJ0ZXN0IiwiX19wcm90b19fIiwiZm9vIiwicmVzdWx0IiwiT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImhhc1Byb3RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/has-proto/index.js\n");

/***/ })

};
;