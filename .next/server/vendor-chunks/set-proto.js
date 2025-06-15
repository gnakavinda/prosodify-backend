"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/set-proto";
exports.ids = ["vendor-chunks/set-proto"];
exports.modules = {

/***/ "(rsc)/./node_modules/set-proto/Object.setPrototypeOf.js":
/*!*********************************************************!*\
  !*** ./node_modules/set-proto/Object.setPrototypeOf.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $Object = __webpack_require__(/*! es-object-atoms */ \"(rsc)/./node_modules/es-object-atoms/index.js\");\n/** @type {import('./Object.setPrototypeOf')} */ module.exports = $Object.setPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2V0LXByb3RvL09iamVjdC5zZXRQcm90b3R5cGVPZi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFVBQVVDLG1CQUFPQSxDQUFDO0FBRXRCLDhDQUE4QyxHQUM5Q0MsT0FBT0MsT0FBTyxHQUFHSCxRQUFRSSxjQUFjLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9zb2RpZnktYmFja2VuZC8uL25vZGVfbW9kdWxlcy9zZXQtcHJvdG8vT2JqZWN0LnNldFByb3RvdHlwZU9mLmpzPzUxZmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJ2VzLW9iamVjdC1hdG9tcycpO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9PYmplY3Quc2V0UHJvdG90eXBlT2YnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gJE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBudWxsO1xuIl0sIm5hbWVzIjpbIiRPYmplY3QiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldFByb3RvdHlwZU9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/set-proto/Object.setPrototypeOf.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/set-proto/Reflect.setPrototypeOf.js":
/*!**********************************************************!*\
  !*** ./node_modules/set-proto/Reflect.setPrototypeOf.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n/** @type {import('./Reflect.setPrototypeOf')} */ module.exports = typeof Reflect !== \"undefined\" && Reflect.setPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2V0LXByb3RvL1JlZmxlY3Quc2V0UHJvdG90eXBlT2YuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSwrQ0FBK0MsR0FDL0NBLE9BQU9DLE9BQU8sR0FBRyxPQUFRQyxZQUFZLGVBQWVBLFFBQVFDLGNBQWMsSUFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3NvZGlmeS1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL3NldC1wcm90by9SZWZsZWN0LnNldFByb3RvdHlwZU9mLmpzP2NhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9SZWZsZWN0LnNldFByb3RvdHlwZU9mJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9ICh0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdC5zZXRQcm90b3R5cGVPZikgfHwgbnVsbDtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiUmVmbGVjdCIsInNldFByb3RvdHlwZU9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/set-proto/Reflect.setPrototypeOf.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/set-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/set-proto/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar reflectSetProto = __webpack_require__(/*! ./Reflect.setPrototypeOf */ \"(rsc)/./node_modules/set-proto/Reflect.setPrototypeOf.js\");\nvar originalSetProto = __webpack_require__(/*! ./Object.setPrototypeOf */ \"(rsc)/./node_modules/set-proto/Object.setPrototypeOf.js\");\nvar setDunderProto = __webpack_require__(/*! dunder-proto/set */ \"(rsc)/./node_modules/dunder-proto/set.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(rsc)/./node_modules/es-errors/type.js\");\n/** @type {import('.')} */ module.exports = reflectSetProto ? function setProto(O, proto) {\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    if (reflectSetProto(O, proto)) {\n        return O;\n    }\n    throw new $TypeError(\"Reflect.setPrototypeOf: failed to set [[Prototype]]\");\n} : originalSetProto || (setDunderProto ? function setProto(O, proto) {\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    setDunderProto(O, proto);\n    return O;\n} : null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2V0LXByb3RvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsa0JBQWtCQyxtQkFBT0EsQ0FBQztBQUM5QixJQUFJQyxtQkFBbUJELG1CQUFPQSxDQUFDO0FBRS9CLElBQUlFLGlCQUFpQkYsbUJBQU9BLENBQUM7QUFFN0IsSUFBSUcsYUFBYUgsbUJBQU9BLENBQUM7QUFFekIsd0JBQXdCLEdBQ3hCSSxPQUFPQyxPQUFPLEdBQUdOLGtCQUNkLFNBQVNPLFNBQVNDLENBQUMsRUFBRUMsS0FBSztJQUMzQixxRUFBcUU7SUFDckUsSUFBSVQsZ0JBQWdCUSxHQUFHQyxRQUFRO1FBQzlCLE9BQU9EO0lBQ1I7SUFDQSxNQUFNLElBQUlKLFdBQVc7QUFDdEIsSUFDRUYsb0JBQ0RDLENBQUFBLGlCQUFpQixTQUFTSSxTQUFTQyxDQUFDLEVBQUVDLEtBQUs7SUFDMUMscUVBQXFFO0lBQ3JFTixlQUFlSyxHQUFHQztJQUNsQixPQUFPRDtBQUNSLElBQUksSUFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3NvZGlmeS1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL3NldC1wcm90by9pbmRleC5qcz83NTE1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZmxlY3RTZXRQcm90byA9IHJlcXVpcmUoJy4vUmVmbGVjdC5zZXRQcm90b3R5cGVPZicpO1xudmFyIG9yaWdpbmFsU2V0UHJvdG8gPSByZXF1aXJlKCcuL09iamVjdC5zZXRQcm90b3R5cGVPZicpO1xuXG52YXIgc2V0RHVuZGVyUHJvdG8gPSByZXF1aXJlKCdkdW5kZXItcHJvdG8vc2V0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzL3R5cGUnKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gcmVmbGVjdFNldFByb3RvXG5cdD8gZnVuY3Rpb24gc2V0UHJvdG8oTywgcHJvdG8pIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRpZiAocmVmbGVjdFNldFByb3RvKE8sIHByb3RvKSkge1xuXHRcdFx0cmV0dXJuIE87XG5cdFx0fVxuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSZWZsZWN0LnNldFByb3RvdHlwZU9mOiBmYWlsZWQgdG8gc2V0IFtbUHJvdG90eXBlXV0nKTtcblx0fVxuXHQ6IG9yaWdpbmFsU2V0UHJvdG8gfHwgKFxuXHRcdHNldER1bmRlclByb3RvID8gZnVuY3Rpb24gc2V0UHJvdG8oTywgcHJvdG8pIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMgY2FuJ3QgbmFycm93IGluc2lkZSBhIGNsb3N1cmUsIGZvciBzb21lIHJlYXNvblxuXHRcdFx0c2V0RHVuZGVyUHJvdG8oTywgcHJvdG8pO1xuXHRcdFx0cmV0dXJuIE87XG5cdFx0fSA6IG51bGxcblx0KTtcbiJdLCJuYW1lcyI6WyJyZWZsZWN0U2V0UHJvdG8iLCJyZXF1aXJlIiwib3JpZ2luYWxTZXRQcm90byIsInNldER1bmRlclByb3RvIiwiJFR5cGVFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXRQcm90byIsIk8iLCJwcm90byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/set-proto/index.js\n");

/***/ })

};
;