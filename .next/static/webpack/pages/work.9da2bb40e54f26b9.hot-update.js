"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/work",{

/***/ "./src/pages/work.tsx":
/*!****************************!*\
  !*** ./src/pages/work.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n  gap: 1rem;\\n  padding: 1rem;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: auto;\\n  display: block;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: white;\\n  padding: 2rem;\\n  z-index: 100;\\n  border-radius: 10px;\\n  display: \",\n        \";\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 99;\\n  display: \",\n        \";\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nfunction Work() {\n    _s();\n    const works = [\n        {\n            id: 1,\n            src: \"/path/to/image1.jpg\",\n            title: \"작업물 1\",\n            description: \"이미지 1 설명\"\n        },\n        {\n            id: 2,\n            src: \"/path/to/image2.jpg\",\n            title: \"작업물 2\",\n            description: \"이미지 2 설명\"\n        }\n    ];\n    const [selectedWork, setSelectedWork] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleWorkClick = (work)=>{\n        setSelectedWork(work);\n    };\n    const handleCloseModal = ()=>{\n        setSelectedWork(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Grid, {\n                children: works.map((work)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(WorkItem, {\n                        onClick: ()=>handleWorkClick(work),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {\n                            src: work.src,\n                            alt: work.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    }, work.id, false, {\n                        fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            selectedWork && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Overlay, {\n                        show: !!selectedWork,\n                        onClick: handleCloseModal\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Modal, {\n                        show: !!selectedWork,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: selectedWork.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: selectedWork.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {\n                                src: selectedWork.src,\n                                alt: selectedWork.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: handleCloseModal,\n                                children: \"닫기\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zzxx3\\\\Desktop\\\\develop\\\\jijijig\\\\src\\\\pages\\\\work.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n}\n_s(Work, \"HdKxzDPTwoevgSFBghZjYT8xJk4=\");\n_c = Work;\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c1 = Grid;\nconst WorkItem = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c2 = WorkItem;\nconst Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject2());\n_c3 = Image;\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3(), (param)=>{\n    let { show } = param;\n    return show ? \"block\" : \"none\";\n});\n_c4 = Modal;\nconst Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4(), (param)=>{\n    let { show } = param;\n    return show ? \"block\" : \"none\";\n});\n_c5 = Overlay;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Work\");\n$RefreshReg$(_c1, \"Grid\");\n$RefreshReg$(_c2, \"WorkItem\");\n$RefreshReg$(_c3, \"Image\");\n$RefreshReg$(_c4, \"Modal\");\n$RefreshReg$(_c5, \"Overlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd29yay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7QUFXeEIsU0FBU0c7O0lBQ3RCLE1BQU1DLFFBQVE7UUFDWjtZQUNFQyxJQUFJO1lBQ0pDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7S0FDRDtJQUVELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFjO0lBRTlELE1BQU1VLGtCQUFrQixDQUFDQztRQUN2QkYsZ0JBQWdCRTtJQUNsQjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QkgsZ0JBQWdCO0lBQ2xCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDSTswQkFDRVYsTUFBTVcsR0FBRyxDQUFDLENBQUNILHFCQUNWLDhEQUFDSTt3QkFBdUJDLFNBQVMsSUFBTU4sZ0JBQWdCQztrQ0FDckQsNEVBQUNNOzRCQUFNWixLQUFLTSxLQUFLTixHQUFHOzRCQUFFYSxLQUFLUCxLQUFLTCxLQUFLOzs7Ozs7dUJBRHhCSyxLQUFLUCxFQUFFOzs7Ozs7Ozs7O1lBS3pCSSw4QkFDQzs7a0NBQ0UsOERBQUNXO3dCQUFRQyxNQUFNLENBQUMsQ0FBQ1o7d0JBQWNRLFNBQVNKOzs7Ozs7a0NBQ3hDLDhEQUFDUzt3QkFBTUQsTUFBTSxDQUFDLENBQUNaOzswQ0FDYiw4REFBQ2M7MENBQUlkLGFBQWFGLEtBQUs7Ozs7OzswQ0FDdkIsOERBQUNpQjswQ0FBR2YsYUFBYUQsV0FBVzs7Ozs7OzBDQUM1Qiw4REFBQ1U7Z0NBQU1aLEtBQUtHLGFBQWFILEdBQUc7Z0NBQUVhLEtBQUtWLGFBQWFGLEtBQUs7Ozs7OzswQ0FDckQsOERBQUNrQjtnQ0FBT1IsU0FBU0o7MENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FBTS9DO0dBaER3QlY7S0FBQUE7QUFrRHhCLE1BQU1XLE9BQU9aLDZEQUFVO01BQWpCWTtBQU9OLE1BQU1FLFdBQVdkLDZEQUFVO01BQXJCYztBQUlOLE1BQU1FLFFBQVFoQiw2REFBVTtNQUFsQmdCO0FBS04sTUFBTUksUUFBUXBCLDZEQUFVLHFCQVNYO1FBQUMsRUFBRW1CLElBQUksRUFBRTtXQUFNQSxPQUFPLFVBQVU7O01BVHZDQztBQVlOLE1BQU1GLFVBQVVsQiw2REFBVSxxQkFRYjtRQUFDLEVBQUVtQixJQUFJLEVBQUU7V0FBTUEsT0FBTyxVQUFVOztNQVJ2Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dvcmsudHN4P2EyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmludGVyZmFjZSBXb3JrIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHNyYzogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29yaygpIHtcclxuICBjb25zdCB3b3JrcyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHNyYzogXCIvcGF0aC90by9pbWFnZTEuanBnXCIsXHJcbiAgICAgIHRpdGxlOiBcIuyekeyXheusvCAxXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIuydtOuvuOyngCAxIOyEpOuqhVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHNyYzogXCIvcGF0aC90by9pbWFnZTIuanBnXCIsXHJcbiAgICAgIHRpdGxlOiBcIuyekeyXheusvCAyXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIuydtOuvuOyngCAyIOyEpOuqhVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRXb3JrLCBzZXRTZWxlY3RlZFdvcmtdID0gdXNlU3RhdGU8V29yayB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVXb3JrQ2xpY2sgPSAod29yazogV29yaykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRXb3JrKHdvcmspO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFdvcmsobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIHt3b3Jrcy5tYXAoKHdvcmspID0+IChcclxuICAgICAgICAgIDxXb3JrSXRlbSBrZXk9e3dvcmsuaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVdvcmtDbGljayh3b3JrKX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3dvcmsuc3JjfSBhbHQ9e3dvcmsudGl0bGV9IC8+XHJcbiAgICAgICAgICA8L1dvcmtJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIHtzZWxlY3RlZFdvcmsgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8T3ZlcmxheSBzaG93PXshIXNlbGVjdGVkV29ya30gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gLz5cclxuICAgICAgICAgIDxNb2RhbCBzaG93PXshIXNlbGVjdGVkV29ya30+XHJcbiAgICAgICAgICAgIDxoMj57c2VsZWN0ZWRXb3JrLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPntzZWxlY3RlZFdvcmsuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzZWxlY3RlZFdvcmsuc3JjfSBhbHQ9e3NlbGVjdGVkV29yay50aXRsZX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfT7ri6vquLA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFdvcmtJdGVtID0gc3R5bGVkLmRpdmBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5jb25zdCBNb2RhbCA9IHN0eWxlZC5kaXY8TW9kYWxQcm9wcz5gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6ICR7KHsgc2hvdyB9KSA9PiAoc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKX07XHJcbmA7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB6LWluZGV4OiA5OTtcclxuICBkaXNwbGF5OiAkeyh7IHNob3cgfSkgPT4gKHNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG5gO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIldvcmsiLCJ3b3JrcyIsImlkIiwic3JjIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNlbGVjdGVkV29yayIsInNldFNlbGVjdGVkV29yayIsImhhbmRsZVdvcmtDbGljayIsIndvcmsiLCJoYW5kbGVDbG9zZU1vZGFsIiwiR3JpZCIsIm1hcCIsIldvcmtJdGVtIiwib25DbGljayIsIkltYWdlIiwiYWx0IiwiT3ZlcmxheSIsInNob3ciLCJNb2RhbCIsImgyIiwicCIsImJ1dHRvbiIsImRpdiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/work.tsx\n"));

/***/ })

});