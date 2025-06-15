"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-docker";
exports.ids = ["vendor-chunks/is-docker"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-docker/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-docker/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nlet isDocker;\nfunction hasDockerEnv() {\n    try {\n        fs.statSync(\"/.dockerenv\");\n        return true;\n    } catch (_) {\n        return false;\n    }\n}\nfunction hasDockerCGroup() {\n    try {\n        return fs.readFileSync(\"/proc/self/cgroup\", \"utf8\").includes(\"docker\");\n    } catch (_) {\n        return false;\n    }\n}\nmodule.exports = ()=>{\n    if (isDocker === undefined) {\n        isDocker = hasDockerEnv() || hasDockerCGroup();\n    }\n    return isDocker;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtZG9ja2VyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsS0FBS0MsbUJBQU9BLENBQUM7QUFFbkIsSUFBSUM7QUFFSixTQUFTQztJQUNSLElBQUk7UUFDSEgsR0FBR0ksUUFBUSxDQUFDO1FBQ1osT0FBTztJQUNSLEVBQUUsT0FBT0MsR0FBRztRQUNYLE9BQU87SUFDUjtBQUNEO0FBRUEsU0FBU0M7SUFDUixJQUFJO1FBQ0gsT0FBT04sR0FBR08sWUFBWSxDQUFDLHFCQUFxQixRQUFRQyxRQUFRLENBQUM7SUFDOUQsRUFBRSxPQUFPSCxHQUFHO1FBQ1gsT0FBTztJQUNSO0FBQ0Q7QUFFQUksT0FBT0MsT0FBTyxHQUFHO0lBQ2hCLElBQUlSLGFBQWFTLFdBQVc7UUFDM0JULFdBQVdDLGtCQUFrQkc7SUFDOUI7SUFFQSxPQUFPSjtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvc29kaWZ5LWJhY2tlbmQvLi9ub2RlX21vZHVsZXMvaXMtZG9ja2VyL2luZGV4LmpzPzE5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5sZXQgaXNEb2NrZXI7XG5cbmZ1bmN0aW9uIGhhc0RvY2tlckVudigpIHtcblx0dHJ5IHtcblx0XHRmcy5zdGF0U3luYygnLy5kb2NrZXJlbnYnKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYXNEb2NrZXJDR3JvdXAoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYygnL3Byb2Mvc2VsZi9jZ3JvdXAnLCAndXRmOCcpLmluY2x1ZGVzKCdkb2NrZXInKTtcblx0fSBjYXRjaCAoXykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcblx0aWYgKGlzRG9ja2VyID09PSB1bmRlZmluZWQpIHtcblx0XHRpc0RvY2tlciA9IGhhc0RvY2tlckVudigpIHx8IGhhc0RvY2tlckNHcm91cCgpO1xuXHR9XG5cblx0cmV0dXJuIGlzRG9ja2VyO1xufTtcbiJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJpc0RvY2tlciIsImhhc0RvY2tlckVudiIsInN0YXRTeW5jIiwiXyIsImhhc0RvY2tlckNHcm91cCIsInJlYWRGaWxlU3luYyIsImluY2x1ZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-docker/index.js\n");

/***/ })

};
;