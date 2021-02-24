module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/molecules/Card.tsx":
/*!***************************************!*\
  !*** ./components/molecules/Card.tsx ***!
  \***************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Mad\\Project\\ayomain\\components\\molecules\\Card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Card = props => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    bgGradient: props.color,
    bg: props.color,
    p: "1rem",
    color: "white",
    textAlign: "center",
    height: "15rem",
    borderRadius: "1rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    fontSize: "4xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, props.tittle), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    display: "flex",
    justifyContent: "center",
    mt: "1rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: props.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
};
Card.defaultProps = {
  color: "linear(to-r, #f95b5b, #d53f62)"
};

/***/ }),

/***/ "./components/molecules/Navbar.tsx":
/*!*****************************************!*\
  !*** ./components/molecules/Navbar.tsx ***!
  \*****************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Mad\\Project\\ayomain\\components\\molecules\\Navbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Navbar = () => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["UnorderedList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Home"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "About"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Countact")));
};

/***/ }),

/***/ "./components/molecules/index.ts":
/*!***************************************!*\
  !*** ./components/molecules/index.ts ***!
  \***************************************/
/*! exports provided: Navbar, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ "./components/molecules/Navbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_0__["Navbar"]; });

/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/molecules/Card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_1__["Card"]; });




/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules */ "./components/molecules/index.ts");
var _jsxFileName = "C:\\Users\\Mad\\Project\\ayomain\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  const pink = "linear(to-r, #f95b5b, #d53f62)";
  const teal = "linear(to-r, #2f9f9a, #2fa57f)";
  const blue = "linear(to-r, #5986eb, #0066ce)";
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Wrap"], {
    spacing: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["WrapItem"], {
    width: "50%",
    p: "2px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    tittle: "Main Bola",
    img: "https://img.icons8.com/doodle/96/000000/football2--v1.png",
    color: teal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["WrapItem"], {
    width: "50%",
    p: "2px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    tittle: "Main Basket",
    img: "https://img.icons8.com/doodle/96/000000/basketball--v1.png",
    color: pink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["WrapItem"], {
    width: "50%",
    p: "2px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    tittle: "Ping Pong",
    img: "https://img.icons8.com/doodle/96/000000/ping-pong.png",
    color: blue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["WrapItem"], {
    width: "50%",
    p: "2px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    tittle: "Volley",
    img: "https://img.icons8.com/cotton/64/000000/volleyball.png",
    color: "gray.500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vbGVjdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiY29sb3IiLCJ0aXR0bGUiLCJpbWciLCJkZWZhdWx0UHJvcHMiLCJOYXZiYXIiLCJIb21lIiwicGluayIsInRlYWwiLCJibHVlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStE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QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxVQUFNLEVBQUMsYUFEVDtBQUVFLE9BQUcsRUFBQyw0REFGTjtBQUdFLFNBQUssRUFBRUQsSUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixFQWVFLE1BQUMseURBQUQ7QUFBVSxTQUFLLEVBQUMsS0FBaEI7QUFBc0IsS0FBQyxFQUFDLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsVUFBTSxFQUFDLFdBRFQ7QUFFRSxPQUFHLEVBQUMsdURBRk47QUFHRSxTQUFLLEVBQUVFLElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBZkYsRUFzQkUsTUFBQyx5REFBRDtBQUFVLFNBQUssRUFBQyxLQUFoQjtBQUFzQixLQUFDLEVBQUMsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxVQUFNLEVBQUMsUUFEVDtBQUVFLE9BQUcsRUFBQyx3REFGTjtBQUdFLFNBQUssRUFBQyxVQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXRCRixDQURGLENBREYsQ0FERjtBQW9DRCxDOzs7Ozs7Ozs7OztBQzNDRCw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgQm94LCBJbWFnZSwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgdGl0dGxlOiBzdHJpbmc7XG4gIGltZzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPEJveFxuICAgICAgICBiZ0dyYWRpZW50PXtwcm9wcy5jb2xvcn1cbiAgICAgICAgYmc9e3Byb3BzLmNvbG9yfVxuICAgICAgICBwPVwiMXJlbVwiXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBoZWlnaHQ9XCIxNXJlbVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjFyZW1cIlxuICAgICAgPlxuICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjR4bFwiPntwcm9wcy50aXR0bGV9PC9UZXh0PlxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9wcy5pbWd9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiBcImxpbmVhcih0by1yLCAjZjk1YjViLCAjZDUzZjYyKVwiLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBMaXN0SXRlbSwgVW5vcmRlcmVkTGlzdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8VW5vcmRlcmVkTGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0+SG9tZTwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPExpc3RJdGVtPkFib3V0PC9MaXN0SXRlbT5cclxuICAgICAgICA8TGlzdEl0ZW0+Q291bnRhY3Q8L0xpc3RJdGVtPlxyXG4gICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9OYXZiYXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vQ2FyZFwiO1xyXG4iLCJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgV3JhcCwgV3JhcEl0ZW0gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9sZWN1bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHBpbmsgPSBcImxpbmVhcih0by1yLCAjZjk1YjViLCAjZDUzZjYyKVwiO1xyXG4gIGNvbnN0IHRlYWwgPSBcImxpbmVhcih0by1yLCAjMmY5ZjlhLCAjMmZhNTdmKVwiO1xyXG4gIGNvbnN0IGJsdWUgPSBcImxpbmVhcih0by1yLCAjNTk4NmViLCAjMDA2NmNlKVwiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxXcmFwIHNwYWNpbmc9XCJub25lXCI+XHJcbiAgICAgICAgICA8V3JhcEl0ZW0gd2lkdGg9XCI1MCVcIiBwPVwiMnB4XCI+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgdGl0dGxlPVwiTWFpbiBCb2xhXCJcclxuICAgICAgICAgICAgICBpbWc9XCJodHRwczovL2ltZy5pY29uczguY29tL2Rvb2RsZS85Ni8wMDAwMDAvZm9vdGJhbGwyLS12MS5wbmdcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXt0ZWFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9XcmFwSXRlbT5cclxuICAgICAgICAgIDxXcmFwSXRlbSB3aWR0aD1cIjUwJVwiIHA9XCIycHhcIj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICB0aXR0bGU9XCJNYWluIEJhc2tldFwiXHJcbiAgICAgICAgICAgICAgaW1nPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9kb29kbGUvOTYvMDAwMDAwL2Jhc2tldGJhbGwtLXYxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9e3Bpbmt9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1dyYXBJdGVtPlxyXG4gICAgICAgICAgPFdyYXBJdGVtIHdpZHRoPVwiNTAlXCIgcD1cIjJweFwiPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHRpdHRsZT1cIlBpbmcgUG9uZ1wiXHJcbiAgICAgICAgICAgICAgaW1nPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9kb29kbGUvOTYvMDAwMDAwL3BpbmctcG9uZy5wbmdcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtibHVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9XcmFwSXRlbT5cclxuICAgICAgICAgIDxXcmFwSXRlbSB3aWR0aD1cIjUwJVwiIHA9XCIycHhcIj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICB0aXR0bGU9XCJWb2xsZXlcIlxyXG4gICAgICAgICAgICAgIGltZz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY290dG9uLzY0LzAwMDAwMC92b2xsZXliYWxsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1dyYXBJdGVtPlxyXG4gICAgICAgIDwvV3JhcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==