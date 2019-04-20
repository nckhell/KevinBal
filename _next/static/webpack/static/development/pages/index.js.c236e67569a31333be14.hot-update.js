webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layouts/main.js":
/*!************************************!*\
  !*** ./components/layouts/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/styles/tailwind.css */ "./static/styles/tailwind.css");
/* harmony import */ var _static_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/nick/Documents/Github/KevinBal/components/layouts/main.js";





var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$activePat = _this$props.activePath,
          activePath = _this$props$activePat === void 0 ? 'home' : _this$props$activePat,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? 'This is the default title' : _this$props$title;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "border-t-8 border-kevin-green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "pt-8 flex flex-wrap justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "w-full flex justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "static/img/full_logo.svg",
        className: "h-32 md:h-48",
        alt: "Kevin Bal Kinesitherapie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "w-5/6 flex justify-center pt-8 flex-wrap text-xl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        className: "{ activePath == 'home' ? 'underline ' : 'no-underline' }block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/visie",
        className: "{ activePath == 'visie' ? 'underline ' : 'no-underline' }no-underline block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4md:mr-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Visie"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/ligging",
        className: "{ activePath == 'ligging' ? 'underline ' : 'no-underline' }no-underline block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Ligging"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/contact",
        className: "{ activePath == 'contact' ? 'underline ' : 'no-underline' }no-underline block sm:inline-block sm:mt-0 text-kevin-green hover:underline mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        class: "flex-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "font-sans bg-grey-lighter text-white py-5 px-4 pin-b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mx-auto max-w-xl overflow-hidden flex justify-between items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "text-sm text-grey-dark list-reset flex items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        className: "block mr-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "static/img/logo.svg",
        className: "w-8",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Van Putlei 53/12 - 2018 Antwerpen - 03/216.26.24")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "inline-block py-2 px-3 text-grey-darker text-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, " \xA92019 Kevin Bal Kinesitherapie."))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c236e67569a31333be14.hot-update.js.map