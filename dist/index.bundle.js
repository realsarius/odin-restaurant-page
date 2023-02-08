/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst galleryContent = document.createElement('div');\n\ngalleryContent.textContent = 'Gallery Content';\ngalleryContent.id = 'gallery-content';\n\ngalleryContent.style.display = 'none';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (galleryContent);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/gallery.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = document.createElement('div');\nconst homeContent = document.createElement('div');\nhomeContent.className = 'home-content';\n\nhome.textContent = 'Home';\nhome.id = 'home';\n\nhome.appendChild(homeContent);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery */ \"./src/gallery.js\");\n/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story */ \"./src/story.js\");\n\n\n\n\nconst content = document.querySelector('.content');\nconst container = document.createElement('div');\ncontainer.className = 'container';\nconst navBar = document.createElement('nav');\nnavBar.className = 'nav-bar';\nconst navBarLeft = document.createElement('div');\nconst navBarRight = document.createElement('div');\nconst navBarRightUList = document.createElement('ul');\n\nconst navBarRightUList1 = document.createElement('li');\nconst navBarRightUList2 = document.createElement('li');\nconst navBarRightUList3 = document.createElement('li');\nconst navBarRightUList4 = document.createElement('li');\nconst navBarRightUList5 = document.createElement('li');\n\n// Links\nconst navBarRightUList1a = document.createElement('a');\nconst navBarRightUList2a = document.createElement('a');\nconst navBarRightUList3a = document.createElement('a');\nconst navBarRightUList4a = document.createElement('a');\nconst navBarRightUList5a = document.createElement('a');\n\nnavBarRightUList1a.href = '#';\nnavBarRightUList2a.href = '#';\nnavBarRightUList3a.href = '#';\nnavBarRightUList4a.href = '#';\nnavBarRightUList5a.href = '#';\n\nnavBarLeft.textContent = 'asdsa';\n\nnavBarRightUList1a.textContent = 'Order Now';\nnavBarRightUList2a.textContent = 'Home';\nnavBarRightUList3a.textContent = 'Gallery';\nnavBarRightUList4a.textContent = 'Story';\nnavBarRightUList5a.textContent = 'Visit';\n\nnavBarRightUList1.appendChild(navBarRightUList1a);\nnavBarRightUList2.appendChild(navBarRightUList2a);\nnavBarRightUList3.appendChild(navBarRightUList3a);\nnavBarRightUList4.appendChild(navBarRightUList4a);\nnavBarRightUList5.appendChild(navBarRightUList5a);\n\nnavBarRightUList.appendChild(navBarRightUList1);\nnavBarRightUList.appendChild(navBarRightUList2);\nnavBarRightUList.appendChild(navBarRightUList3);\nnavBarRightUList.appendChild(navBarRightUList4);\nnavBarRightUList.appendChild(navBarRightUList5);\n\nnavBarRight.appendChild(navBarRightUList);\n\nnavBar.appendChild(navBarLeft);\nnavBar.appendChild(navBarRight);\ncontainer.appendChild(navBar);\n\ncontainer.appendChild(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\ncontainer.appendChild(_gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontainer.appendChild(_story__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nnavBarRightUList2a.addEventListener('click', () => {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id).style.display = 'flex';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'none';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'none';\n});\n\nnavBarRightUList3a.addEventListener('click', () => {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'flex';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'none';\n});\n\nnavBarRightUList4a.addEventListener('click', () => {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'none';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'flex';\n});\n\ncontent.appendChild(container);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst story = document.createElement('div');\n\nstory.textContent = 'Story';\nstory.id = 'story';\n\nstory.style.display = 'none';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (story);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/story.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;