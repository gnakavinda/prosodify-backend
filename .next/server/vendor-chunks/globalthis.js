"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/globalthis";
exports.ids = ["vendor-chunks/globalthis"];
exports.modules = {

/***/ "(rsc)/./node_modules/globalthis/implementation.js":
/*!***************************************************!*\
  !*** ./node_modules/globalthis/implementation.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nmodule.exports = global;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2xvYmFsdGhpcy9pbXBsZW1lbnRhdGlvbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvc29kaWZ5LWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvZ2xvYmFsdGhpcy9pbXBsZW1lbnRhdGlvbi5qcz81NThiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/globalthis/implementation.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/globalthis/index.js":
/*!******************************************!*\
  !*** ./node_modules/globalthis/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar defineProperties = __webpack_require__(/*! define-properties */ \"(rsc)/./node_modules/define-properties/index.js\");\nvar implementation = __webpack_require__(/*! ./implementation */ \"(rsc)/./node_modules/globalthis/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(rsc)/./node_modules/globalthis/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"(rsc)/./node_modules/globalthis/shim.js\");\nvar polyfill = getPolyfill();\nvar getGlobal = function() {\n    return polyfill;\n};\ndefineProperties(getGlobal, {\n    getPolyfill: getPolyfill,\n    implementation: implementation,\n    shim: shim\n});\nmodule.exports = getGlobal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2xvYmFsdGhpcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLG1CQUFtQkMsbUJBQU9BLENBQUM7QUFFL0IsSUFBSUMsaUJBQWlCRCxtQkFBT0EsQ0FBQztBQUM3QixJQUFJRSxjQUFjRixtQkFBT0EsQ0FBQztBQUMxQixJQUFJRyxPQUFPSCxtQkFBT0EsQ0FBQztBQUVuQixJQUFJSSxXQUFXRjtBQUVmLElBQUlHLFlBQVk7SUFBYyxPQUFPRDtBQUFVO0FBRS9DTCxpQkFBaUJNLFdBQVc7SUFDM0JILGFBQWFBO0lBQ2JELGdCQUFnQkE7SUFDaEJFLE1BQU1BO0FBQ1A7QUFFQUcsT0FBT0MsT0FBTyxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3NvZGlmeS1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL2dsb2JhbHRoaXMvaW5kZXguanM/Zjg5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBvbHlmaWxsOyB9O1xuXG5kZWZpbmVQcm9wZXJ0aWVzKGdldEdsb2JhbCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0R2xvYmFsO1xuIl0sIm5hbWVzIjpbImRlZmluZVByb3BlcnRpZXMiLCJyZXF1aXJlIiwiaW1wbGVtZW50YXRpb24iLCJnZXRQb2x5ZmlsbCIsInNoaW0iLCJwb2x5ZmlsbCIsImdldEdsb2JhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/globalthis/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/globalthis/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/globalthis/polyfill.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar implementation = __webpack_require__(/*! ./implementation */ \"(rsc)/./node_modules/globalthis/implementation.js\");\nmodule.exports = function getPolyfill() {\n    if (typeof global !== \"object\" || !global || global.Math !== Math || global.Array !== Array) {\n        return implementation;\n    }\n    return global;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2xvYmFsdGhpcy9wb2x5ZmlsbC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGlCQUFpQkMsbUJBQU9BLENBQUM7QUFFN0JDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN6QixJQUFJLE9BQU9DLFdBQVcsWUFBWSxDQUFDQSxVQUFVQSxPQUFPQyxJQUFJLEtBQUtBLFFBQVFELE9BQU9FLEtBQUssS0FBS0EsT0FBTztRQUM1RixPQUFPUDtJQUNSO0lBQ0EsT0FBT0s7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3NvZGlmeS1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL2dsb2JhbHRoaXMvcG9seWZpbGwuanM/NDE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICdvYmplY3QnIHx8ICFnbG9iYWwgfHwgZ2xvYmFsLk1hdGggIT09IE1hdGggfHwgZ2xvYmFsLkFycmF5ICE9PSBBcnJheSkge1xuXHRcdHJldHVybiBpbXBsZW1lbnRhdGlvbjtcblx0fVxuXHRyZXR1cm4gZ2xvYmFsO1xufTtcbiJdLCJuYW1lcyI6WyJpbXBsZW1lbnRhdGlvbiIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0UG9seWZpbGwiLCJnbG9iYWwiLCJNYXRoIiwiQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/globalthis/polyfill.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/globalthis/shim.js":
/*!*****************************************!*\
  !*** ./node_modules/globalthis/shim.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar define = __webpack_require__(/*! define-properties */ \"(rsc)/./node_modules/define-properties/index.js\");\nvar gOPD = __webpack_require__(/*! gopd */ \"(rsc)/./node_modules/gopd/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(rsc)/./node_modules/globalthis/polyfill.js\");\nmodule.exports = function shimGlobal() {\n    var polyfill = getPolyfill();\n    if (define.supportsDescriptors) {\n        var descriptor = gOPD(polyfill, \"globalThis\");\n        if (!descriptor || descriptor.configurable && (descriptor.enumerable || !descriptor.writable || globalThis !== polyfill)) {\n            Object.defineProperty(polyfill, \"globalThis\", {\n                configurable: true,\n                enumerable: false,\n                value: polyfill,\n                writable: true\n            });\n        }\n    } else if (typeof globalThis !== \"object\" || globalThis !== polyfill) {\n        polyfill.globalThis = polyfill;\n    }\n    return polyfill;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2xvYmFsdGhpcy9zaGltLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsU0FBU0MsbUJBQU9BLENBQUM7QUFDckIsSUFBSUMsT0FBT0QsbUJBQU9BLENBQUM7QUFDbkIsSUFBSUUsY0FBY0YsbUJBQU9BLENBQUM7QUFFMUJHLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN6QixJQUFJQyxXQUFXSjtJQUNmLElBQUlILE9BQU9RLG1CQUFtQixFQUFFO1FBQy9CLElBQUlDLGFBQWFQLEtBQUtLLFVBQVU7UUFDaEMsSUFDQyxDQUFDRSxjQUVBQSxXQUFXQyxZQUFZLElBQ25CRCxDQUFBQSxXQUFXRSxVQUFVLElBQUksQ0FBQ0YsV0FBV0csUUFBUSxJQUFJQyxlQUFlTixRQUFPLEdBRTNFO1lBQ0RPLE9BQU9DLGNBQWMsQ0FBQ1IsVUFBVSxjQUFjO2dCQUM3Q0csY0FBYztnQkFDZEMsWUFBWTtnQkFDWkssT0FBT1Q7Z0JBQ1BLLFVBQVU7WUFDWDtRQUNEO0lBQ0QsT0FBTyxJQUFJLE9BQU9DLGVBQWUsWUFBWUEsZUFBZU4sVUFBVTtRQUNyRUEsU0FBU00sVUFBVSxHQUFHTjtJQUN2QjtJQUNBLE9BQU9BO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9zb2RpZnktYmFja2VuZC8uL25vZGVfbW9kdWxlcy9nbG9iYWx0aGlzL3NoaW0uanM/MmEwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUdsb2JhbCgpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0aWYgKGRlZmluZS5zdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHBvbHlmaWxsLCAnZ2xvYmFsVGhpcycpO1xuXHRcdGlmIChcblx0XHRcdCFkZXNjcmlwdG9yXG5cdFx0XHR8fCAoXG5cdFx0XHRcdGRlc2NyaXB0b3IuY29uZmlndXJhYmxlXG5cdFx0XHRcdCYmIChkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgIWRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZ2xvYmFsVGhpcyAhPT0gcG9seWZpbGwpXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocG9seWZpbGwsICdnbG9iYWxUaGlzJywge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0XHR2YWx1ZTogcG9seWZpbGwsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICdvYmplY3QnIHx8IGdsb2JhbFRoaXMgIT09IHBvbHlmaWxsKSB7XG5cdFx0cG9seWZpbGwuZ2xvYmFsVGhpcyA9IHBvbHlmaWxsO1xuXHR9XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwicmVxdWlyZSIsImdPUEQiLCJnZXRQb2x5ZmlsbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzaGltR2xvYmFsIiwicG9seWZpbGwiLCJzdXBwb3J0c0Rlc2NyaXB0b3JzIiwiZGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImdsb2JhbFRoaXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/globalthis/shim.js\n");

/***/ })

};
;