"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/app/Sidebar.tsx":
/*!*****************************!*\
  !*** ./src/app/Sidebar.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Sidebar = ()=>{\n    _s();\n    // State to manage the open/close state of the sidebar\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                // Conditional class based on isOpen \n                // state to control width and visibility\n                className: \"bg-white text-black \\n                    fixed h-screen transition-all \\n                    duration-300 z-10 \\n                    \".concat(isOpen ? \"w-64\" : \"w-0 overflow-hidden\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-8 flex-col justify-left items-left p-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/images/Yaskawa_logo.svg.png\",\n                                width: 170,\n                                height: 0,\n                                alt: \"img\",\n                                className: \"mt-4\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-6 p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/home\",\n                                className: \"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-6 p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/dashboard\",\n                                className: \"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-6 p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/customers\",\n                                className: \"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]\",\n                                children: \"Customers\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-6 p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/employees\",\n                                className: \"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]\",\n                                children: \"Employees\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-6 p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/settings\",\n                                className: \"text-black text-lg font-bold   hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]\",\n                                children: \"Settings\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-screen bg-white justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex p-4 \\n                        \".concat(isOpen ? \"ml-64\" : \"ml-0\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-black\",\n                                onClick: ()=>setIsOpen(!isOpen),\n                                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"h-6 w-6\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    color: \"black\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: 2,\n                                        d: \"M6 18L18 6M6 6l12 12\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"25\",\n                                    height: \"25\",\n                                    fill: \"currentColor\",\n                                    className: \"bi bi-justify-left\",\n                                    viewBox: \"0 0 16 16\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        d: \"M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex p-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            width: \"30\",\n                            height: \"30\",\n                            color: \"black\",\n                            fill: \"currentColor\",\n                            className: \"bi bi-person-circle cursor-pointer\",\n                            viewBox: \"0 0 16 16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fillRule: \"evenodd\",\n                                    d: \"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\app_tech_feed\\\\webapp\\\\src\\\\app\\\\Sidebar.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN3QztBQUNUO0FBRS9CLE1BQU1HLFVBQVU7O0lBQ2Qsc0RBQXNEO0lBQ3RELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUNDLHFDQUFxQztnQkFDckMsd0NBQXdDO2dCQUN4Q0MsV0FBVyx5SUFJUixPQURXSCxTQUFTLFNBQVM7MEJBR2hDLDRFQUFDRTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDTCxrREFBS0E7Z0NBQUNNLEtBQUk7Z0NBQStCQyxPQUFPO2dDQUFLQyxRQUFRO2dDQUFHQyxLQUFJO2dDQUFNSixXQUFVOzs7Ozs7Ozs7OztzQ0FFdkYsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSztnQ0FBRUMsTUFBSztnQ0FDTk4sV0FBVTswQ0FDMEQ7Ozs7Ozs7Ozs7O3NDQUl4RSw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNLO2dDQUFFQyxNQUFLO2dDQUNOTixXQUFVOzBDQUMwRDs7Ozs7Ozs7Ozs7c0NBSXhFLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQUVDLE1BQUs7Z0NBQ05OLFdBQVU7MENBQzBEOzs7Ozs7Ozs7OztzQ0FJeEUsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSztnQ0FBRUMsTUFBSztnQ0FDTk4sV0FBVTswQ0FDMEQ7Ozs7Ozs7Ozs7O3NDQUl4RSw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNLO2dDQUFFQyxNQUFLO2dDQUNOTixXQUFVOzBDQUMwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRNUUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVcsc0NBQzhCLE9BQTFCSCxTQUFTLFVBQVU7a0NBRXJDLDRFQUFDRTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ087Z0NBQ0NQLFdBQVU7Z0NBQ1ZRLFNBQVMsSUFBTVYsVUFBVSxDQUFDRDswQ0FFekJBLHVCQUNDLDhEQUFDWTtvQ0FDQ1QsV0FBVTtvQ0FDVlUsTUFBSztvQ0FDTEMsU0FBUTtvQ0FDUkMsT0FBTTtvQ0FDTkMsUUFBTzs4Q0FDUCw0RUFBQ0M7d0NBQ0NDLGVBQWM7d0NBQ2RDLGdCQUFlO3dDQUNmQyxhQUFhO3dDQUNiQyxHQUFFOzs7Ozs7Ozs7OzhEQUdKLDhEQUFDVDtvQ0FBSVUsT0FBTTtvQ0FBNkJqQixPQUFNO29DQUFLQyxRQUFPO29DQUFLTyxNQUFLO29DQUFlVixXQUFVO29DQUFxQlcsU0FBUTs4Q0FDMUgsNEVBQUNHO3dDQUFLTSxVQUFTO3dDQUFVRixHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNbkMsOERBQUNuQjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ1M7NEJBQUlVLE9BQU07NEJBQTZCakIsT0FBTTs0QkFBS0MsUUFBTzs0QkFBS1MsT0FBTTs0QkFBUUYsTUFBSzs0QkFBZVYsV0FBVTs0QkFBcUNXLFNBQVE7OzhDQUN4Siw4REFBQ0c7b0NBQUtJLEdBQUU7Ozs7Ozs4Q0FDUiw4REFBQ0o7b0NBQUtNLFVBQVM7b0NBQVVGLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZDO0dBbEdNdEI7S0FBQUE7QUFvR04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9TaWRlYmFyLnRzeD9iMjMzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIC8vIFN0YXRlIHRvIG1hbmFnZSB0aGUgb3Blbi9jbG9zZSBzdGF0ZSBvZiB0aGUgc2lkZWJhclxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgey8qIFNpZGViYXIgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAvLyBDb25kaXRpb25hbCBjbGFzcyBiYXNlZCBvbiBpc09wZW4gXHJcbiAgICAgICAgLy8gc3RhdGUgdG8gY29udHJvbCB3aWR0aCBhbmQgdmlzaWJpbGl0eVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGJnLXdoaXRlIHRleHQtYmxhY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQgaC1zY3JlZW4gdHJhbnNpdGlvbi1hbGwgXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24tMzAwIHotMTAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHtpc09wZW4gPyAndy02NCcgOiAndy0wIG92ZXJmbG93LWhpZGRlbidcclxuICAgICAgICAgIH1gfT5cclxuICAgICAgICB7LyogU2lkZWJhciBjb250ZW50IGRpdmlkZS15IGRpdmlkZS1zbGF0ZS0yMDAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTggZmxleC1jb2wganVzdGlmeS1sZWZ0IGl0ZW1zLWxlZnQgcC00IFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL1lhc2thd2FfbG9nby5zdmcucG5nXCIgd2lkdGg9ezE3MH0gaGVpZ2h0PXswfSBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9J210LTQnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNiBwLTJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9ob21lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtbGcgZm9udC1ib2xkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC1bIzAwNTZiOV0gaG92ZXI6Ym9yZGVyLWwtNCBib3JkZXItWyMwMDU2YjldXCI+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNiBwLTJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC1sZyBmb250LWJvbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LVsjMDA1NmI5XSBob3Zlcjpib3JkZXItbC00IGJvcmRlci1bIzAwNTZiOV1cIj5cclxuICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTYgcC0yXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvY3VzdG9tZXJzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtbGcgZm9udC1ib2xkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC1bIzAwNTZiOV0gaG92ZXI6Ym9yZGVyLWwtNCBib3JkZXItWyMwMDU2YjldXCI+XHJcbiAgICAgICAgICAgICAgQ3VzdG9tZXJzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02IHAtMlwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2VtcGxveWVlc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LWxnIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtWyMwMDU2YjldIGhvdmVyOmJvcmRlci1sLTQgYm9yZGVyLVsjMDA1NmI5XVwiPlxyXG4gICAgICAgICAgICAgIEVtcGxveWVlc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNiBwLTJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LWxnIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtWyMwMDU2YjldIGhvdmVyOmJvcmRlci1sLTQgYm9yZGVyLVsjMDA1NmI5XVwiPlxyXG4gICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIEFkZCBtb3JlIHNpZGViYXIgaXRlbXMgaGVyZSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBNYWluIGNvbnRlbnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctc2NyZWVuIGJnLXdoaXRlIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBwLTQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXNPcGVuID8gJ21sLTY0JyA6ICdtbC0wJ31gfT5cclxuICAgICAgICB7LyogQnV0dG9uIHRvIHRvZ2dsZSBzaWRlYmFyICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cclxuICAgICAgICAgICAgey8qIFRvZ2dsZSBpY29uIGJhc2VkIG9uIGlzT3BlbiBzdGF0ZSAqL31cclxuICAgICAgICAgICAge2lzT3BlbiA/IChcclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9J2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwiYmkgYmktanVzdGlmeS1sZWZ0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDEyLjVhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgMCAxaC03YS41LjUgMCAwIDEtLjUtLjVtMC0zYS41LjUgMCAwIDEgLjUtLjVoMTFhLjUuNSAwIDAgMSAwIDFoLTExYS41LjUgMCAwIDEtLjUtLjVtMC0zYS41LjUgMCAwIDEgLjUtLjVoMTFhLjUuNSAwIDAgMSAwIDFoLTExYS41LjUgMCAwIDEtLjUtLjVtMC0zYS41LjUgMCAwIDEgLjUtLjVoMTFhLjUuNSAwIDAgMSAwIDFoLTExYS41LjUgMCAwIDEtLjUtLjVcIi8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwLTMnPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBjb2xvcj0nYmxhY2snIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJiaSBiaS1wZXJzb24tY2lyY2xlIGN1cnNvci1wb2ludGVyXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTExIDZhMyAzIDAgMSAxLTYgMCAzIDMgMCAwIDEgNiAwXCIvPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgOGE4IDggMCAxIDEgMTYgMEE4IDggMCAwIDEgMCA4bTgtN2E3IDcgMCAwIDAtNS40NjggMTEuMzdDMy4yNDIgMTEuMjI2IDQuODA1IDEwIDggMTBzNC43NTcgMS4yMjUgNS40NjggMi4zN0E3IDcgMCAwIDAgOCAxXCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJTaWRlYmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJhIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJmaWxsIiwidmlld0JveCIsImNvbG9yIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInhtbG5zIiwiZmlsbFJ1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Sidebar.tsx\n"));

/***/ })

});