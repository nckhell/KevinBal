module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jLj4");


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jLj4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nz7v");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_main__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    activePath: "info",
    title: "Info",
    description: "Informatie over de kinesitherapiepraktijk van Kevin Bal te Kontich"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "container m-auto flex flex-col py-10 max-w-xl text-center px-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "tagline",
    className: "uppercase tracking-wide text-grey-dark font-bold"
  }, "Aandachtspunten"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "my-4 font-normal"
  }, "Informatie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "border-b w-8 m-auto my-6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto"
  }, "Dankzij de verscheidenheid aan disciplines staat er bij KINE GROEP ZUID een team voor u klaar dat elkaar goed aanvult om u zo een therapie op maat te kunnen aanbieden."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto"
  }, "Tijdens een behandeling hechten wij veel belang aan een individuele aanpak bestaande uit manuele therapie in ruime zin aangevuld met actieve oefentherapie afgestemd op pati\xEBnt en pathologie. De samenwerking tussen pati\xEBnt en therapeut staat hierbij uiteraard centraal. Door middel van zachte mobilisaties, harmonieuze technieken en gerichte manipulaties trachten we de beperkte mobiliteit van gewrichten te vergroten waarna gerichte oefentherapie kan opgestart worden om zo het weefselherstel te bevorderen. Belangrijk hierbij is het evenwicht tussen belasting en belastbaarheid te bewaren en de pati\xEBnt functioneel, progressief en doelgericht op te trainen."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto"
  }, "Door ons team wordt er dagelijks therapiecontinu\xEFteit geboden van 08.00u 's morgens tot 21.00u 's avonds, ook tijdens vakantieperioden. Alle behandelingen gebeuren dagelijks na afspraak en omvatten een gemidelde duur van 30 minuten. Van onze kant uit doen wij steeds ons uiterste best om u niet te lang te laten wachten en voor iedereen de nodige tijd te voorzien. Uiteraard stellen wij het ook op prijs dat u zich aan de gemaakte afspraken houdt. Buiten uw wil om kunnen er zich soms omstandigheden voordoen dewelke u niet in staat stellen de afspraak na te komen. We vragen u om bij belet 12u op voorhand te verwittigen om eventueel een andere pati\xEBnt te kunnen verzorgen. Mocht u niet in de mogelijkheid zijn ons tijdig te verwittigen of indien u een afspraak vergeet, dan verwachten wij dat u zo sportief bent om de voor u vrij gehouden tijd te vergoeden."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto"
  }, "Buiten de behandeltijd die wij voor u vrijhouden, heeft u als pati\xEBnt het recht om afhankelijk van uw planning vroeger te komen of later te blijven om de aangeleerde oefeningen uit te voeren in onze oefenzaal. Omkleden kan steeds in onze kleedruimte dewelke voorzien zijn van lockers of in de doucheruimte die steeds ter uwer beschikking is om u op te frissen na de oefensessies."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto"
  }, "Indien een pati\xEBnt zich niet naar onze praktijk kan verplaatsen, maken wij graag ruimte voor een huisbezoek. Het spreekt voor zich dat dit enkel gebeurt als de pathologie dit vereist en als uw locatie in onze omgeving ligt.")));
});

/***/ }),

/***/ "nz7v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_prefixed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ueiB");
/* harmony import */ var next_prefixed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_prefixed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("qwlM");
/* harmony import */ var _static_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_8__);










var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$activePat = _this$props.activePath,
          activePath = _this$props$activePat === void 0 ? 'home' : _this$props$activePat,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? 'Welkom' : _this$props$title,
          _this$props$descripti = _this$props.description,
          description = _this$props$descripti === void 0 ? 'Kevin Bal is een kinesitherapeut met een praktijk in Kontich (Reepkenslei). Zijn specialisaties zijn manuele kinesitherapie en orthopedische revalidatie.' : _this$props$descripti;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, title, " | Kevin Bal Kinesitherapeut"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "description",
        content: description
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "robots",
        content: "index, follow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: Object(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["prefixURL"])('/static/favicon.ico')
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "border-t-8 border-kevin-green"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "pt-8 flex flex-wrap justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "w-full flex justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: Object(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["prefixURL"])('/static/img/full_logo.svg'),
        className: "h-32 md:h-48",
        alt: "Kevin Bal Kinesitherapie"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "w-5/6 flex justify-center pt-8 flex-wrap text-xl"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: (activePath == 'home' ? 'underline ' : 'no-underline ') + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        href: "/info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: (activePath == 'info' ? 'underline ' : 'no-underline ') + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"
      }, "Info")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        href: "/visie"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: (activePath == 'visie' ? 'underline ' : 'no-underline ') + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"
      }, "Visie")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        href: "/ligging"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: (activePath == 'ligging' ? 'underline ' : 'no-underline ') + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"
      }, "Ligging")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: (activePath == 'contact' ? 'underline ' : 'no-underline ') + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4"
      }, "Contact"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex-1"
      }, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "font-sans bg-grey-lighter text-white py-5 px-4 pin-b"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mx-auto max-w-xl overflow-hidden flex justify-between items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "text-sm text-grey-dark list-reset flex items-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        className: "block mr-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: Object(next_prefixed__WEBPACK_IMPORTED_MODULE_6__["prefixURL"])('/static/img/logo.svg'),
        className: "w-8",
        alt: "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Reepkenslei 45 - 2550 Kontich - 0477 92 72 02")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "inline-block py-2 px-3 text-grey-darker text-xs"
      }, " \xA92019 Kevin Bal Kinesitherapie."))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "qwlM":
/***/ (function(module, exports) {



/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "ueiB":
/***/ (function(module, exports) {

module.exports = require("next-prefixed");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });