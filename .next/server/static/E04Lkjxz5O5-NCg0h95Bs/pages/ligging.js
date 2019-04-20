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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("erlJ");


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

/***/ "erlJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layouts/main.js
var main = __webpack_require__("nz7v");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "google-maps-react"
var external_google_maps_react_ = __webpack_require__("yOsI");

// CONCATENATED MODULE: ./components/maps/map.js









var mapStyles = {
  width: '100%',
  height: '100%'
};
var map_MapContainer =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MapContainer, _Component);

  function MapContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(MapContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      showingInfoWindow: false,
      //Hides or the shows the infoWindow
      activeMarker: {},
      //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker

    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "onMarkerClick", function (props, marker, e) {
      return _this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "onClose", function (props) {
      if (_this.state.showingInfoWindow) {
        _this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(MapContainer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_google_maps_react_["Map"], {
        google: this.props.google,
        zoom: 16,
        style: mapStyles,
        initialCenter: {
          lat: 51.120003,
          lng: 4.444552
        }
      }, external_react_default.a.createElement(external_google_maps_react_["Marker"], {
        onClick: this.onMarkerClick,
        name: 'Kevin Bal Kinesitherapie (Kontich)'
      }), external_react_default.a.createElement(external_google_maps_react_["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        onClose: this.onClose
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("h4", null, this.state.selectedPlace.name))));
    }
  }]);

  return MapContainer;
}(external_react_["Component"]);
/* harmony default export */ var map = (Object(external_google_maps_react_["GoogleApiWrapper"])({
  apiKey: 'AIzaSyArBTpVYXljd8W6YUJJjMnvDpDBV9S468s'
})(map_MapContainer));
// CONCATENATED MODULE: ./pages/ligging.js



var mapStyle = {
  height: '450px'
};
/* harmony default export */ var ligging = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(main["a" /* default */], {
    activePath: "ligging",
    title: "Ligging",
    description: "Kinesitherapeut Kevin Bal heeft zijn praktijk in Kontich (2550), Reepkenslei 45"
  }, external_react_default.a.createElement("section", {
    className: "container m-auto flex flex-col py-10 max-w-xl text-center px-6"
  }, external_react_default.a.createElement("div", {
    className: "w-full flex flex-col justify-center items-start items-center"
  }, external_react_default.a.createElement("label", {
    htmlFor: "tagline",
    className: "uppercase tracking-wide text-grey-dark font-bold"
  }, "Kontich"), external_react_default.a.createElement("h1", {
    className: "my-4 font-normal"
  }, "Waar ligt de praktijk?"), external_react_default.a.createElement("hr", {
    className: "border-b w-8 m-auto my-6"
  }), external_react_default.a.createElement("p", {
    className: "text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto"
  }, "De centrale ligging aan de Singel (Desguinlei) maakt dat de praktijk zeer goed bereikbaar is met de wagen vanuit Antwerpen en vanuit de periferie. Er is ruime parkeergelegenheid aan de parking van de Desguinlei (gratis), de parking van het Centrum voor Basiseducatie Antwerpen (gratis) of in de straat (betalend tussen 9-19u via sms naar 4411)."), external_react_default.a.createElement("p", {
    className: "text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto"
  }, "Het openbaar vervoer heeft verschillende bus- en tramhaltes (tramlijn 2 en 6 - bus 17, 22, 28, 30, 298) in de directe omgeving van de praktijk. Meer info hieromtrent vindt u op www.delijn.be/reisinfo. Uiteraard kan je ook te voet, met de fiets of met de bromfiets komen. Treinstation Antwerpen Zuid is op 750m gelegen van de praktijk."))), external_react_default.a.createElement("section", {
    className: "font-sans text-center py-12 px-4 lg:px-0 bg-kevin-green"
  }, external_react_default.a.createElement("div", {
    className: "container flex flex-col md:flex-row bg-white max-w-xl m-auto shadow-md"
  }, external_react_default.a.createElement("div", {
    style: mapStyle,
    className: "w-full max-w-xl relative overflow-hidden container max-w-xl m-auto"
  }, external_react_default.a.createElement(map, null)))));
});

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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

/***/ }),

/***/ "yOsI":
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ })

/******/ });