/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Логика кликов */
var items = document.querySelectorAll('.item_point');
var signa = document.querySelectorAll('.item_signa');
var taste = document.querySelectorAll('.item_taste');
var arrayTastes = [];
var str = 'Чего сидишь? Порадуй котэ,<span class="item_buy"> купи.</span>';
items.forEach(function (element, i) {
  arrayTastes.push(taste[i].innerHTML);

  if (element.classList.contains('item_disabled')) {
    signa[i].innerHTML = "\u041F\u0435\u0447\u0430\u043B\u044C\u043A\u0430, ".concat(arrayTastes[i], " \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F.");
    signa[i].style.color = '#ffff66';
  }

  element.addEventListener('click', function () {
    if (this.classList.contains('item_default')) {
      element.classList = 'item_point item_selected';
      activeSigna(i);
    } else if (this.classList.contains('item_selected')) {
      element.classList = 'item_point item_default';
      defaultSigna(i);
      searchBuy();
    } else if (this.classList.contains('item_disabled')) {
      alert('Товар закончился!');
    }
  });
});
/* Нижнее поле при активации элемента */

function activeSigna(numb) {
  if (numb == 0) {
    signa[numb].innerHTML = 'Печень утки разварная с артишоками.';
  } else if (numb == 1) {
    signa[numb].innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
  } else if (numb == 2) {
    signa[numb].innerHTML = 'Филе из цыплят с трюфелями в бульоне.';
  }
}
/* Нижнее поле после возвращения элемента к дефолту */


function defaultSigna(numb) {
  signa[numb].innerHTML = str;
}
/* Навешивание клика на текст "Купи" */


function searchBuy() {
  var buy = document.querySelectorAll('.item_buy');
  buy.forEach(function (element, i) {
    element.addEventListener('click', function () {
      items[i].classList = 'item_point item_selected';
      activeSigna(i);
    });
  });
}

searchBuy();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map