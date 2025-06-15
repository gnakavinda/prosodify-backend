"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-wsl";
exports.ids = ["vendor-chunks/is-wsl"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-wsl/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-wsl/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst isDocker = __webpack_require__(/*! is-docker */ \"(rsc)/./node_modules/is-docker/index.js\");\nconst isWsl = ()=>{\n    if (process.platform !== \"linux\") {\n        return false;\n    }\n    if (os.release().toLowerCase().includes(\"microsoft\")) {\n        if (isDocker()) {\n            return false;\n        }\n        return true;\n    }\n    try {\n        return fs.readFileSync(\"/proc/version\", \"utf8\").toLowerCase().includes(\"microsoft\") ? !isDocker() : false;\n    } catch (_) {\n        return false;\n    }\n};\nif (process.env.__IS_WSL_TEST__) {\n    module.exports = isWsl;\n} else {\n    module.exports = isWsl();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtd3NsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsS0FBS0MsbUJBQU9BLENBQUM7QUFDbkIsTUFBTUMsS0FBS0QsbUJBQU9BLENBQUM7QUFDbkIsTUFBTUUsV0FBV0YsbUJBQU9BLENBQUM7QUFFekIsTUFBTUcsUUFBUTtJQUNiLElBQUlDLFFBQVFDLFFBQVEsS0FBSyxTQUFTO1FBQ2pDLE9BQU87SUFDUjtJQUVBLElBQUlOLEdBQUdPLE9BQU8sR0FBR0MsV0FBVyxHQUFHQyxRQUFRLENBQUMsY0FBYztRQUNyRCxJQUFJTixZQUFZO1lBQ2YsT0FBTztRQUNSO1FBRUEsT0FBTztJQUNSO0lBRUEsSUFBSTtRQUNILE9BQU9ELEdBQUdRLFlBQVksQ0FBQyxpQkFBaUIsUUFBUUYsV0FBVyxHQUFHQyxRQUFRLENBQUMsZUFDdEUsQ0FBQ04sYUFBYTtJQUNoQixFQUFFLE9BQU9RLEdBQUc7UUFDWCxPQUFPO0lBQ1I7QUFDRDtBQUVBLElBQUlOLFFBQVFPLEdBQUcsQ0FBQ0MsZUFBZSxFQUFFO0lBQ2hDQyxPQUFPQyxPQUFPLEdBQUdYO0FBQ2xCLE9BQU87SUFDTlUsT0FBT0MsT0FBTyxHQUFHWDtBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3NvZGlmeS1iYWNrZW5kLy4vbm9kZV9tb2R1bGVzL2lzLXdzbC9pbmRleC5qcz9iNWI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IGlzRG9ja2VyID0gcmVxdWlyZSgnaXMtZG9ja2VyJyk7XG5cbmNvbnN0IGlzV3NsID0gKCkgPT4ge1xuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2xpbnV4Jykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmIChvcy5yZWxlYXNlKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbWljcm9zb2Z0JykpIHtcblx0XHRpZiAoaXNEb2NrZXIoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gZnMucmVhZEZpbGVTeW5jKCcvcHJvYy92ZXJzaW9uJywgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdtaWNyb3NvZnQnKSA/XG5cdFx0XHQhaXNEb2NrZXIoKSA6IGZhbHNlO1xuXHR9IGNhdGNoIChfKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuX19JU19XU0xfVEVTVF9fKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gaXNXc2w7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGlzV3NsKCk7XG59XG4iXSwibmFtZXMiOlsib3MiLCJyZXF1aXJlIiwiZnMiLCJpc0RvY2tlciIsImlzV3NsIiwicHJvY2VzcyIsInBsYXRmb3JtIiwicmVsZWFzZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJyZWFkRmlsZVN5bmMiLCJfIiwiZW52IiwiX19JU19XU0xfVEVTVF9fIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-wsl/index.js\n");

/***/ })

};
;