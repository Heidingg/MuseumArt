"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/music.js":
/*!****************************!*\
  !*** ./component/music.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sound; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sound */ \"./node_modules/use-sound/dist/use-sound.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Sound() {\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [play, { stop  }] = (0,use_sound__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/music/musicbg.mp3\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isChecked ? play() : stop();\n    }, [\n        isChecked\n    ]);\n    const handleChange = (event)=>{\n        if (event.target.checked) {\n            play();\n        } else {\n            stop();\n        }\n        setIsChecked((current)=>!current);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().switchbox),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"checkbox\",\n            checked: isChecked,\n            size: 24,\n            onChange: handleChange,\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().switch1)\n        }, void 0, false, {\n            fileName: \"/Users/huyennguyen/Desktop/MDIA 3109/Assignment2/MuseumArt/component/music.js\",\n            lineNumber: 25,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/huyennguyen/Desktop/MDIA 3109/Assignment2/MuseumArt/component/music.js\",\n        lineNumber: 24,\n        columnNumber: 7\n    }, this);\n}\n_s(Sound, \"GBgRdRrKJnUcO8ET6X6y2k/JsjI=\", false, function() {\n    return [\n        use_sound__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Sound;\nvar _c;\n$RefreshReg$(_c, \"Sound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbXVzaWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNFO0FBQ2I7QUFDbEIsU0FBU0ksUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUN4QyxLQUFLO0lBR1AsTUFBTSxDQUFDTyxNQUFNLEVBQUVDLEtBQUksRUFBRSxDQUFDLEdBQUdMLHFEQUFRQSxDQUFDO0lBQ2xDRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RJLFlBQVlFLFNBQVNDLE1BQU07SUFDN0IsR0FDQTtRQUFDSDtLQUFVO0lBRVgsTUFBTUksZUFBZUMsQ0FBQUEsUUFBUztRQUM1QixJQUFJQSxNQUFNQyxNQUFNLENBQUNDLE9BQU8sRUFBRTtZQUM1Qkw7UUFDRSxPQUFPO1lBQ05DO1FBQ0QsQ0FBQztRQUNERixhQUFhTyxDQUFBQSxVQUFXLENBQUNBO0lBQzNCO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdiLDBFQUFnQjtrQkFDbkMsNEVBQUNlO1lBQU1DLE1BQUs7WUFFZk4sU0FBU1A7WUFDVGMsTUFBTTtZQUNOQyxVQUFVWDtZQUFhTSxXQUFXYix3RUFBYzs7Ozs7Ozs7Ozs7QUFNOUMsQ0FBQztHQS9CcUJFOztRQUtLRCxpREFBUUE7OztLQUxiQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvbXVzaWMuanM/ZWQyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHVzZVNvdW5kIGZyb20gJ3VzZS1zb3VuZCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb3VuZCgpIHtcbiAgICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUoXG4gICAgICBmYWxzZVxuICAgICk7XG4gIFxuICAgIGNvbnN0IFtwbGF5LCB7IHN0b3AgfV0gPSB1c2VTb3VuZChcIi9tdXNpYy9tdXNpY2JnLm1wM1wiKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaXNDaGVja2VkID8gcGxheSgpIDogc3RvcCgpO1xuICAgIH0sXG4gICAgW2lzQ2hlY2tlZF1cbiAgKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICBwbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgIHN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHNldElzQ2hlY2tlZChjdXJyZW50ID0+ICFjdXJyZW50KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN3aXRjaGJveH0+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcblxuY2hlY2tlZD17aXNDaGVja2VkfVxuc2l6ZT17MjR9XG5vbkNoYW5nZT17aGFuZGxlQ2hhbmdlfWNsYXNzTmFtZT17c3R5bGVzLnN3aXRjaDF9PjwvaW5wdXQ+XG4gICAgIFxuXHRcdDwvZGl2PlxuICAgICBcbiAgICAgIFxuICAgICk7XG4gIH0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJ1c2VTb3VuZCIsIlNvdW5kIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwicGxheSIsInN0b3AiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3dpdGNoYm94IiwiaW5wdXQiLCJ0eXBlIiwic2l6ZSIsIm9uQ2hhbmdlIiwic3dpdGNoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/music.js\n"));

/***/ })

});