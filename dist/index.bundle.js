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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = document.createElement('div');\nconst footerText = document.createElement('p');\nfooterText.textContent = `realsarius © ${new Date().getFullYear()}`;\nfooter.className = 'footer';\nfooter.appendChild(footerText);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gallery = document.createElement('div');\nconst galleryContent = document.createElement('div');\ngalleryContent.className = 'gallery-content';\nconst gallery1 = document.createElement('div');\nconst gallery2 = document.createElement('div');\nconst gallery3 = document.createElement('div');\nconst gallery4 = document.createElement('div');\nconst gallery5 = document.createElement('div');\ngallery1.className = 'gallery1';\ngallery2.className = 'gallery2';\ngallery3.className = 'gallery3';\ngallery4.className = 'gallery4';\ngallery5.className = 'gallery5';\ngallery.id = 'gallery';\ngallery.style.display = 'none';\ngalleryContent.appendChild(gallery1);\ngalleryContent.appendChild(gallery2);\ngalleryContent.appendChild(gallery3);\ngalleryContent.appendChild(gallery4);\ngalleryContent.appendChild(gallery5);\ngallery.appendChild(galleryContent);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/gallery.js?");

/***/ }),

/***/ "./src/gallerySlider.js":
/*!******************************!*\
  !*** ./src/gallerySlider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gallerySlider = document.createElement('div');\nconst galleryOutside = document.createElement('div');\nconst gallery = document.createElement('div');\nconst galleryImage1 = document.createElement('img');\nconst galleryImage2 = document.createElement('img');\nconst galleryImage3 = document.createElement('img');\nconst galleryImage4 = document.createElement('img');\nconst galleryImage5 = document.createElement('img');\nconst sliderNav = document.createElement('div');\nsliderNav.className = 'sliderNav';\ngalleryImage1.className = 'galleryImage1';\ngalleryImage2.className = 'galleryImage2';\ngalleryImage3.className = 'galleryImage3';\ngalleryImage4.className = 'galleryImage4';\ngalleryImage5.className = 'galleryImage5';\ngallerySlider.id = 'gallerySlider';\ngalleryOutside.className = 'galleryOutside';\ngallery.className = 'gallery';\ngallery.appendChild(galleryImage1);\ngallery.appendChild(galleryImage2);\ngallery.appendChild(galleryImage3);\ngallery.appendChild(galleryImage4);\ngallery.appendChild(galleryImage5);\ngalleryOutside.appendChild(gallery);\ngalleryOutside.appendChild(sliderNav);\ngallerySlider.appendChild(galleryOutside);\ngallerySlider.style.display = 'none';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySlider);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/gallerySlider.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = document.createElement('div');\nconst homeContent = document.createElement('div');\nconst address = document.createElement('div');\nconst title = document.createElement('div');\nconst titlePart1 = document.createElement('div');\nconst titlePart2 = document.createElement('div');\nconst titlePart3 = document.createElement('div');\nhomeContent.className = 'home-content';\naddress.id = 'address';\ntitle.id = 'title';\nhome.id = 'home';\naddress.textContent = '123 Fake Street -- Seattle, WA -- 206-555-7890';\ntitlePart1.textContent = 'EAT';\ntitlePart2.textContent = 'DRINK';\ntitlePart3.textContent = 'VISIT';\ntitle.appendChild(titlePart1);\ntitle.appendChild(titlePart2);\ntitle.appendChild(titlePart3);\nhomeContent.appendChild(address);\nhomeContent.appendChild(title);\nhome.appendChild(homeContent);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ \"./src/gallery.js\");\n/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story */ \"./src/story.js\");\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar */ \"./src/nav-bar.js\");\n/* harmony import */ var _gallerySlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallerySlider */ \"./src/gallerySlider.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\n\nconst content = document.querySelector('.content');\nconst container = document.createElement('div');\ncontainer.className = 'container';\ncontainer.appendChild(_nav_bar__WEBPACK_IMPORTED_MODULE_4__.navBar);\ncontainer.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontainer.appendChild(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ncontainer.appendChild(_gallerySlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\ncontainer.appendChild(_story__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ncontainer.appendChild(_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n_nav_bar__WEBPACK_IMPORTED_MODULE_4__.navBarLefta.addEventListener('click', function () {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'flex';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'none';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_3__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallerySlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].id).style.display = 'none';\n});\n_nav_bar__WEBPACK_IMPORTED_MODULE_4__.navBarRightUList2a.addEventListener('click', function () {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'flex';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'none';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_3__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallerySlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].id).style.display = 'none';\n});\n_nav_bar__WEBPACK_IMPORTED_MODULE_4__.navBarRightUList3a.addEventListener('click', function () {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'flex';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_3__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallerySlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].id).style.display = 'none';\n});\n_nav_bar__WEBPACK_IMPORTED_MODULE_4__.navBarRightUList4a.addEventListener('click', function () {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'none';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_3__[\"default\"].id).style.display = 'flex';\n  document.getElementById(_gallerySlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].id).style.display = 'none';\n});\n_nav_bar__WEBPACK_IMPORTED_MODULE_4__.navBarRightUList5a.addEventListener('click', function () {\n  document.getElementById(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"].id).style.display = 'none';\n  document.getElementById(_story__WEBPACK_IMPORTED_MODULE_3__[\"default\"].id).style.display = 'none';\n  document.getElementById(_gallerySlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"].id).style.display = 'flex';\n});\ncontent.appendChild(container);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/nav-bar.js":
/*!************************!*\
  !*** ./src/nav-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar),\n/* harmony export */   \"navBarLefta\": () => (/* binding */ navBarLefta),\n/* harmony export */   \"navBarRightUList2a\": () => (/* binding */ navBarRightUList2a),\n/* harmony export */   \"navBarRightUList3a\": () => (/* binding */ navBarRightUList3a),\n/* harmony export */   \"navBarRightUList4a\": () => (/* binding */ navBarRightUList4a),\n/* harmony export */   \"navBarRightUList5a\": () => (/* binding */ navBarRightUList5a)\n/* harmony export */ });\nconst navBar = document.createElement('nav');\nnavBar.className = 'nav-bar';\nconst navBarLeft = document.createElement('div');\nconst navBarRight = document.createElement('div');\nconst navBarRightUList = document.createElement('ul');\n\n// const navBarRightUList1 = document.createElement('li');\nconst navBarRightUList2 = document.createElement('li');\nconst navBarRightUList3 = document.createElement('li');\nconst navBarRightUList4 = document.createElement('li');\nconst navBarRightUList5 = document.createElement('li');\n\n// Links\n// const navBarRightUList1a = document.createElement('a');\nconst navBarRightUList2a = document.createElement('a');\nconst navBarRightUList3a = document.createElement('a');\nconst navBarRightUList4a = document.createElement('a');\nconst navBarRightUList5a = document.createElement('a');\nconst navBarLefta = document.createElement('a');\n\n// navBarRightUList1a.href = '#';\nnavBarRightUList2a.href = '#';\nnavBarRightUList3a.href = '#';\nnavBarRightUList4a.href = '#';\nnavBarRightUList5a.href = '#';\nnavBarLefta.href = '#';\nnavBarLefta.textContent = 'TRÉMONT';\nnavBarLeft.className = 'logo';\nnavBarLeft.appendChild(navBarLefta);\n\n// navBarRightUList1a.textContent = 'Order Now';\nnavBarRightUList2a.textContent = 'Home';\nnavBarRightUList3a.textContent = 'Gallery';\nnavBarRightUList4a.textContent = 'Story';\nnavBarRightUList5a.textContent = 'Image Slider';\n\n// navBarRightUList1.appendChild(navBarRightUList1a);\nnavBarRightUList2.appendChild(navBarRightUList2a);\nnavBarRightUList3.appendChild(navBarRightUList3a);\nnavBarRightUList4.appendChild(navBarRightUList4a);\nnavBarRightUList5.appendChild(navBarRightUList5a);\n\n// navBarRightUList.appendChild(navBarRightUList1);\nnavBarRightUList.appendChild(navBarRightUList2);\nnavBarRightUList.appendChild(navBarRightUList3);\nnavBarRightUList.appendChild(navBarRightUList4);\nnavBarRightUList.appendChild(navBarRightUList5);\nnavBarRight.appendChild(navBarRightUList);\nnavBar.appendChild(navBarLeft);\nnavBar.appendChild(navBarRight);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/nav-bar.js?");

/***/ }),

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst story = document.createElement('div');\nconst storyContent = document.createElement('div');\nconst title = document.createElement('h1');\nconst main = document.createElement('main');\nstoryContent.className = 'story-content';\nstory.id = 'story';\ntitle.textContent = 'STORY';\nmain.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Egestas purus viverra accumsan in nisl nisi. Etiam sit amet nisl purus in mollis nunc. Nibh ipsum consequat nisl vel pretium. Fermentum dui faucibus in ornare quam viverra. Arcu non odio euismod lacinia at quis risus sed. Malesuada fames ac turpis egestas sed tempus. Consectetur adipiscing elit duis tristique sollicitudin. Suspendisse sed nisi lacus sed viverra tellus in hac.\\r\\n \\r\\nNeque laoreet suspendisse interdum consectetur libero id faucibus. Viverra vitae congue eu consequat ac felis. Enim sit amet venenatis urna cursus eget. Ultrices gravida dictum fusce ut placerat. Viverra accumsan in nisl nisi scelerisque eu ultrices. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Aliquet lectus proin nibh nisl condimentum id venenatis. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Ornare arcu dui vivamus arcu felis bibendum ut.';\nstory.style.display = 'none';\nstoryContent.appendChild(title);\nstoryContent.appendChild(main);\nstory.appendChild(storyContent);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (story);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/story.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

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