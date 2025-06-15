"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/define-lazy-prop";
exports.ids = ["vendor-chunks/define-lazy-prop"];
exports.modules = {

/***/ "(rsc)/./node_modules/define-lazy-prop/index.js":
/*!************************************************!*\
  !*** ./node_modules/define-lazy-prop/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("\nmodule.exports = (object, propertyName, fn)=>{\n    const define = (value)=>Object.defineProperty(object, propertyName, {\n            value,\n            enumerable: true,\n            writable: true\n        });\n    Object.defineProperty(object, propertyName, {\n        configurable: true,\n        enumerable: true,\n        get () {\n            const result = fn();\n            define(result);\n            return result;\n        },\n        set (value) {\n            define(value);\n        }\n    });\n    return object;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVmaW5lLWxhenktcHJvcC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBQSxPQUFPQyxPQUFPLEdBQUcsQ0FBQ0MsUUFBUUMsY0FBY0M7SUFDdkMsTUFBTUMsU0FBU0MsQ0FBQUEsUUFBU0MsT0FBT0MsY0FBYyxDQUFDTixRQUFRQyxjQUFjO1lBQUNHO1lBQU9HLFlBQVk7WUFBTUMsVUFBVTtRQUFJO0lBRTVHSCxPQUFPQyxjQUFjLENBQUNOLFFBQVFDLGNBQWM7UUFDM0NRLGNBQWM7UUFDZEYsWUFBWTtRQUNaRztZQUNDLE1BQU1DLFNBQVNUO1lBQ2ZDLE9BQU9RO1lBQ1AsT0FBT0E7UUFDUjtRQUNBQyxLQUFJUixLQUFLO1lBQ1JELE9BQU9DO1FBQ1I7SUFDRDtJQUVBLE9BQU9KO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9zb2RpZnktYmFja2VuZC8uL25vZGVfbW9kdWxlcy9kZWZpbmUtbGF6eS1wcm9wL2luZGV4LmpzPzU0ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUsIGZuKSA9PiB7XG5cdGNvbnN0IGRlZmluZSA9IHZhbHVlID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5TmFtZSwge3ZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZX0pO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5TmFtZSwge1xuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZuKCk7XG5cdFx0XHRkZWZpbmUocmVzdWx0KTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdGRlZmluZSh2YWx1ZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gb2JqZWN0O1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHlOYW1lIiwiZm4iLCJkZWZpbmUiLCJ2YWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZ2V0IiwicmVzdWx0Iiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/define-lazy-prop/index.js\n");

/***/ })

};
;