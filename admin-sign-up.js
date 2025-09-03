/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homepage/admin/admin-sign-up/template_admin-sign-up.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homepage/admin/admin-sign-up/template_admin-sign-up.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --clr-invalid: hsl(13.5, 81%, 32.1%);
  --clr-valid: #10a510;
  --clr-normal: #eff2ce;
  --clr-transparent: rgba(0 0 0 / 0.4);

  --md-dim: 50px;

  --container-width: 610px;
  --sm-gap: 5px;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input {
  &:where(:invalid, :valid) {
    border: 2px solid;
    border-color: var(--clr-transparent);
  }

  &.user-interact:invalid {
    border-color: var(--clr-invalid);
  }

  &.user-interact:valid {
    border-color: var(--clr-valid);
  }
  &.invalid {
    border-color: var(--clr-invalid);
  }
}
:focus {
  outline: none;
}
.show-message {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  transform: translateY(100%);
  font-style: italic;

  &.invalid {
    color: var(--clr-invalid);
  }
  &.valid {
    color: var(--clr-valid);
  }
}

#confirm-password {
  &.invalid {
    border-color: var(--clr-invalid);
  }
  &.valid {
    border-color: var(--clr-valid);
  }
}

main {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

form {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(var(--container-width) / 2.2 - var(--sm-gap)), 1fr)
  );
  gap: 20px;
  padding: 20px;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  max-width: 700px;
}

.heading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--md-dim);
  background: linear-gradient(50deg, var(--ink), var(--primary-accent));
  color: var(--white);
  grid-column: 1 / -1;
  border-radius: var(--br-sm);
  padding: 35px 0;
  border-radius: 5px;
}

form > div {
  display: flex;
  gap: 8px;
  flex-direction: column;
  position: relative;
}

input {
  height: 50px;
  padding-left: 10px;
}
input {
  border-radius: 5px;
  border-style: solid;
  background: var(--transparent-white);
  border-color: var(--transparent-white);
  box-shadow: var(--box-shadow);
  &::placeholder {
    color: var(--clr-transparent);
  }
}

.password,
.confirm-password {
  margin-top: 10px;
}

.email {
  grid-column: 1/-1;
}
.signup-btn-section{
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
}
.btn-sign-up {
  max-width: 120px;
  padding: 8px;
  border-radius: 5px;
  background: var(--ink);
  color: #fff;
  font-weight: 700;
  border: none;
  box-shadow: var(--box-shadow-transparent);
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/homepage/admin/admin-sign-up/template_admin-sign-up.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,oBAAoB;EACpB,qBAAqB;EACrB,oCAAoC;;EAEpC,cAAc;;EAEd,wBAAwB;EACxB,aAAa;AACf;AACA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE;IACE,iBAAiB;IACjB,oCAAoC;EACtC;;EAEA;IACE,gCAAgC;EAClC;;EAEA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;AACF;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,QAAQ;EACR,2BAA2B;EAC3B,kBAAkB;;EAElB;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;AACF;;AAEA;EACE;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb;;;GAGC;EACD,SAAS;EACT,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,qEAAqE;EACrE,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,oCAAoC;EACpC,sCAAsC;EACtC,6BAA6B;EAC7B;IACE,6BAA6B;EAC/B;AACF;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,yCAAyC;EACzC,eAAe;AACjB","sourcesContent":[":root {\n  --clr-invalid: hsl(13.5, 81%, 32.1%);\n  --clr-valid: #10a510;\n  --clr-normal: #eff2ce;\n  --clr-transparent: rgba(0 0 0 / 0.4);\n\n  --md-dim: 50px;\n\n  --container-width: 610px;\n  --sm-gap: 5px;\n}\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput {\n  &:where(:invalid, :valid) {\n    border: 2px solid;\n    border-color: var(--clr-transparent);\n  }\n\n  &.user-interact:invalid {\n    border-color: var(--clr-invalid);\n  }\n\n  &.user-interact:valid {\n    border-color: var(--clr-valid);\n  }\n  &.invalid {\n    border-color: var(--clr-invalid);\n  }\n}\n:focus {\n  outline: none;\n}\n.show-message {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  right: 0;\n  transform: translateY(100%);\n  font-style: italic;\n\n  &.invalid {\n    color: var(--clr-invalid);\n  }\n  &.valid {\n    color: var(--clr-valid);\n  }\n}\n\n#confirm-password {\n  &.invalid {\n    border-color: var(--clr-invalid);\n  }\n  &.valid {\n    border-color: var(--clr-valid);\n  }\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  padding-top: 50px;\n}\n\nform {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(calc(var(--container-width) / 2.2 - var(--sm-gap)), 1fr)\n  );\n  gap: 20px;\n  padding: 20px;\n  box-shadow: var(--box-shadow);\n  border-radius: 5px;\n  max-width: 700px;\n}\n\n.heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: var(--md-dim);\n  background: linear-gradient(50deg, var(--ink), var(--primary-accent));\n  color: var(--white);\n  grid-column: 1 / -1;\n  border-radius: var(--br-sm);\n  padding: 35px 0;\n  border-radius: 5px;\n}\n\nform > div {\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n  position: relative;\n}\n\ninput {\n  height: 50px;\n  padding-left: 10px;\n}\ninput {\n  border-radius: 5px;\n  border-style: solid;\n  background: var(--transparent-white);\n  border-color: var(--transparent-white);\n  box-shadow: var(--box-shadow);\n  &::placeholder {\n    color: var(--clr-transparent);\n  }\n}\n\n.password,\n.confirm-password {\n  margin-top: 10px;\n}\n\n.email {\n  grid-column: 1/-1;\n}\n.signup-btn-section{\n  flex-direction: row;\n  align-items: center;\n  padding-top: 30px;\n}\n.btn-sign-up {\n  max-width: 120px;\n  padding: 8px;\n  border-radius: 5px;\n  background: var(--ink);\n  color: #fff;\n  font-weight: 700;\n  border: none;\n  box-shadow: var(--box-shadow-transparent);\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/common_general.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/common_general.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-accent: #0f766e;
  --secondary-accent: #c5efe1;
  --secondary-accent-faint: #f1fffb;
  --dark-yellow: #866c05;
  --ink: #0b1f2a;
  --black: #000;
  --white: #fff;
  --grey: #666;
  --transparent-black: rgba(0 0 0 / 0.8);
  --transparent-white: rgba(255 255 255 / 0.4);

  --box-shadow: 0 0 3px rgba(0 0 0 / 0.5);
}

body,
html {
  height: 100%;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: clamp(1rem, 1rem + 0.03vw, 1.05rem);
}
.container {
  padding-top: 30px;
  width: min(90%, 1200px);
  margin: 0 auto 0;
}
header {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.navigation-section {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}
.navigation-section ul {
  list-style-type: none;
  padding: 0;
  position: relative;
}
.logo-section img {
  height: 50px;
}
a {
  text-decoration: none;
  color: var(--dark-yellow);
}
p {
  max-width: 50ch;
}
:focus {
  outline: none;
}
`, "",{"version":3,"sources":["webpack://./src/homepage/assets/common_general.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,iCAAiC;EACjC,sBAAsB;EACtB,cAAc;EACd,aAAa;EACb,aAAa;EACb,YAAY;EACZ,sCAAsC;EACtC,4CAA4C;;EAE5C,uCAAuC;AACzC;;AAEA;;EAEE,YAAY;EACZ,iDAAiD;EACjD,8CAA8C;AAChD;AACA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --primary-accent: #0f766e;\n  --secondary-accent: #c5efe1;\n  --secondary-accent-faint: #f1fffb;\n  --dark-yellow: #866c05;\n  --ink: #0b1f2a;\n  --black: #000;\n  --white: #fff;\n  --grey: #666;\n  --transparent-black: rgba(0 0 0 / 0.8);\n  --transparent-white: rgba(255 255 255 / 0.4);\n\n  --box-shadow: 0 0 3px rgba(0 0 0 / 0.5);\n}\n\nbody,\nhtml {\n  height: 100%;\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n  font-size: clamp(1rem, 1rem + 0.03vw, 1.05rem);\n}\n.container {\n  padding-top: 30px;\n  width: min(90%, 1200px);\n  margin: 0 auto 0;\n}\nheader {\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.navigation-section {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.navigation-section ul {\n  list-style-type: none;\n  padding: 0;\n  position: relative;\n}\n.logo-section img {\n  height: 50px;\n}\na {\n  text-decoration: none;\n  color: var(--dark-yellow);\n}\np {\n  max-width: 50ch;\n}\n:focus {\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/font.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/font.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-400.woff */ "./src/homepage/assets/fonts/Roboto-400.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.woff2 */ "./src/homepage/assets/fonts/Pacifico-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.woff */ "./src/homepage/assets/fonts/Pacifico-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Roboto;
  src:
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(woff),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(woff2);
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Pacifico;
  src:
    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(woff),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(woff2);
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}
`, "",{"version":3,"sources":["webpack://./src/homepage/assets/font.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB;;yDAEmD;EACnD,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB;;yDAEmD;EACnD,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":["@font-face {\n  font-family: Roboto;\n  src:\n    url(./fonts/Roboto-400.woff) format(woff),\n    url(./fonts/Pacifico-Regular.woff2) format(woff2);\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Pacifico;\n  src:\n    url(./fonts/Pacifico-Regular.woff) format(woff),\n    url(./fonts/Pacifico-Regular.woff2) format(woff2);\n  font-style: normal;\n  font-weight: normal;\n  font-display: swap;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/reset.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/reset.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*  =========== Reset =========  */
/* 1. Use a more-intuitive box-sizing model */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

body {
  /* 3. Add accessible line-height */
  line-height: 1.5;
  /* 4. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* 6. Inherit fonts for form controls */
input,
button,
textarea,
select {
  font: inherit;
}

/* 7. Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* 8. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}
`, "",{"version":3,"sources":["webpack://./src/homepage/assets/reset.css"],"names":[],"mappings":"AAAA,kCAAkC;AAClC,6CAA6C;AAC7C;;;EAGE,sBAAsB;AACxB;;AAEA,6BAA6B;AAC7B;EACE,SAAS;AACX;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,8BAA8B;EAC9B,mCAAmC;AACrC;;AAEA,8BAA8B;AAC9B;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA,uCAAuC;AACvC;;;;EAIE,aAAa;AACf;;AAEA,4BAA4B;AAC5B;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA,6BAA6B;AAC7B;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB","sourcesContent":["/*  =========== Reset =========  */\n/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\nbody {\n  /* 3. Add accessible line-height */\n  line-height: 1.5;\n  /* 4. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/homepage/admin/admin-sign-up/template_admin-sign-up.css":
/*!*********************************************************************!*\
  !*** ./src/homepage/admin/admin-sign-up/template_admin-sign-up.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_template_admin_sign_up_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./template_admin-sign-up.css */ "./node_modules/css-loader/dist/cjs.js!./src/homepage/admin/admin-sign-up/template_admin-sign-up.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_template_admin_sign_up_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_template_admin_sign_up_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_template_admin_sign_up_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_template_admin_sign_up_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/homepage/assets/common_general.css":
/*!************************************************!*\
  !*** ./src/homepage/assets/common_general.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./common_general.css */ "./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/common_general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_common_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_common_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/homepage/assets/font.css":
/*!**************************************!*\
  !*** ./src/homepage/assets/font.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./font.css */ "./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/font.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/homepage/assets/fonts/Pacifico-Regular.woff":
/*!*********************************************************!*\
  !*** ./src/homepage/assets/fonts/Pacifico-Regular.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e339c6943424b7bcceb6.woff";

/***/ }),

/***/ "./src/homepage/assets/fonts/Pacifico-Regular.woff2":
/*!**********************************************************!*\
  !*** ./src/homepage/assets/fonts/Pacifico-Regular.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d75d5ecea13c228ed785.woff2";

/***/ }),

/***/ "./src/homepage/assets/fonts/Roboto-400.woff":
/*!***************************************************!*\
  !*** ./src/homepage/assets/fonts/Roboto-400.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbebe70817c0f48eb4ee.woff";

/***/ }),

/***/ "./src/homepage/assets/reset.css":
/*!***************************************!*\
  !*** ./src/homepage/assets/reset.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/homepage/assets/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/homepage/module/form-validation/email-validator.js":
/*!****************************************************************!*\
  !*** ./src/homepage/module/form-validation/email-validator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Email)
/* harmony export */ });
/* harmony import */ var _form_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validator */ "./src/homepage/module/form-validation/form-validator.js");


class Email {
  constructor({ email, emailMessage }) {
    this.email = email;
    this.emailMessage = emailMessage;
    this.bindEvent();
  }

  bindEvent() {
    this.email.addEventListener('input', this.validateEmail.bind(this));
  }

  validateEmail() {
    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].hasUserInteract({ field: this.email });

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].removeInvalidHighlightFromInput({ field: this.email });

    const emailField = _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].resetFieldStyle({
      field: this.email,
      fieldMessage: this.emailMessage,
    });
    if (emailField.empty) return;

    const emailPattern = /^[a-zA-Z0-9.]{4,}@(gmail|yahoo|hotmail).com$/;

    const isEmailValid = emailPattern.test(this.email.value);

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].validateClientAndServerState({
      field: this.email,
      isFieldValid: isEmailValid,
      fieldMessage: this.emailMessage,
      msg: 'Incorrect email',
    });
  }
}


/***/ }),

/***/ "./src/homepage/module/form-validation/form-validator.js":
/*!***************************************************************!*\
  !*** ./src/homepage/module/form-validation/form-validator.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
class FormValidator {
  constructor({ buttonSubmit, messages, inputs, runWhenAllFormIsValid }) {
    this.buttonSubmit = buttonSubmit;
    this.messages = messages;
    this.inputs = inputs;
    this.runWhenAllFormIsValid = runWhenAllFormIsValid;
    this.bindEvent();
  }

  bindEvent() {
    this.buttonSubmit.addEventListener('click', this.customCheckValidity.bind(this));
  }

  customCheckValidity() {
    const isEveryInputValid = [...this.messages].every((input) => input.validity.valid);

    const isEveryMessageValid = [...this.messages].every((message) =>
      message.classList.contains('valid'),
    );

    if (isEveryMessageValid && isEveryInputValid) {
      window.scrollTo(0, 0);
      this.runWhenAllFormIsValid();
    } else {
      const invalidInputs = [...this.inputs].filter((input) => !input.validity.valid);

      invalidInputs.forEach((invalidInput) => {
        invalidInput.classList.add('invalid');
      });
    }
  }

  static hasUserInteract({ field }) {
    if (field.value !== '' && !field.classList.contains('user-interact')) {
      field.classList.add('user-interact');
    }
  }

  static removeInvalidHighlightFromInput({ field }) {
    if (field.classList.contains('invalid')) {
      field.classList.remove('invalid');
    }
  }

  static colorCustomMessage({ msgToColor, validityState, field }) {
    msgToColor.classList.add(validityState);

    if (field) {
      field.classList.add(validityState);
    }

    validityState = validityState === 'valid' ? 'invalid' : 'valid';

    msgToColor.classList.remove(validityState);

    if (field) {
      field.classList.remove(validityState);
    }
  }

  static resetFieldStyle({ field, fieldMessage }) {
    if (field.value !== '') return { empty: false };

    fieldMessage.value = '';
    field.classList.remove('invalid', 'valid');

    return { empty: true };
  }

  static validateClientAndServerState({
    field,
    isFieldValid,
    fieldMessage,
    msg,
    isConfirmPassword,
    field2,
  }) {
    let message;
    let validityState;

    if (!field.validity.valid && !isFieldValid) {
      message = msg;
      validityState = 'invalid';
    } else if (field.validity.valid && isFieldValid) {
      message = '✓';
      validityState = 'valid';
    }

    message ? (fieldMessage.textContent = message) : fieldMessage.textContent;

    this.colorCustomMessage({
      msgToColor: fieldMessage,
      validityState,
      field: field2,
    });

    if (isConfirmPassword) {
      return this.isPasswordWeak({ validityState });
    }
  }

  static isPasswordWeak({ validityState }) {
    if (validityState === 'invalid') {
      return { weak: true };
    }
    return { weak: false };
  }
}


/***/ }),

/***/ "./src/homepage/module/form-validation/name-validator.js":
/*!***************************************************************!*\
  !*** ./src/homepage/module/form-validation/name-validator.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NameValidator)
/* harmony export */ });
/* harmony import */ var _form_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validator */ "./src/homepage/module/form-validation/form-validator.js");


class NameValidator {
  constructor({ name, nameMessage }) {
    this.name = name;
    this.nameMessage = nameMessage;
    this.bindEvent = this.bindEvent();
  }

  bindEvent() {
    this.name.addEventListener('input', () =>
      this.validateName({
        name: this.name,
        nameMessage: this.nameMessage,
      }),
    );
  }

  validateName({ name, nameMessage }) {
    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].hasUserInteract({
      field: this.name,
    });

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].removeInvalidHighlightFromInput({
      field: this.name,
    });

    const nameField = _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].resetFieldStyle({
      field: name,
      fieldMessage: nameMessage,
    });
    if (nameField.empty) return;

    const pattern = /^[a-zA-Z]{1,}$/;

    const isNameValid = pattern.test(name.value);

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].validateClientAndServerState({
      field: name,
      isFieldValid: isNameValid,
      fieldMessage: nameMessage,
      msg: 'Incorrect name',
    });
  }
}


/***/ }),

/***/ "./src/homepage/module/form-validation/password-validator.js":
/*!*******************************************************************!*\
  !*** ./src/homepage/module/form-validation/password-validator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Password)
/* harmony export */ });
/* harmony import */ var _form_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validator */ "./src/homepage/module/form-validation/form-validator.js");


class Password {
  constructor({ password, passwordMessage, confirmPassword, confirmPasswordMessage }) {
    this.password = password;
    this.passwordMessage = passwordMessage;
    this.confirmPassword = confirmPassword;
    this.confirmPasswordMessage = confirmPasswordMessage;
    this.isPasswordValid = null;
    this.bindEvent = this.bindEvent();
  }

  bindEvent() {
    this.password.addEventListener('input', this.validatePassword.bind(this));

    this.confirmPassword.addEventListener(
      'input',
      this.confirmPasswordToValidatePassword.bind(this),
    );
  }

  validatePassword() {
    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].hasUserInteract({ field: this.password });

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].removeInvalidHighlightFromInput({ field: this.password });

    const passwordField = _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].resetFieldStyle({
      field: this.password,
      fieldMessage: this.passwordMessage,
    });
    if (passwordField.empty) return;

    const lowercase = /[a-z]/.test(this.password.value);
    const uppercase = /[A-Z]/.test(this.password.value);
    const number = /[0-9]/.test(this.password.value);
    const minLength = /.{7,}/.test(this.password.value);

    this.passwordMessage.value = 'Password should contain';

    if (!lowercase) {
      this.passwordMessage.value += ', Lowercase';
    }
    if (!uppercase) {
      this.passwordMessage.value += ', Uppercase';
    }
    if (!number) {
      this.passwordMessage.value += ', Number';
    }
    if (!minLength) {
      this.passwordMessage.value += ', Minimum of 7 characters';
    }

    this.isPasswordValid = lowercase && uppercase && number && minLength;

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].validateClientAndServerState({
      field: this.password,
      isFieldValid: this.isPasswordValid,
      fieldMessage: this.passwordMessage,
    });

    if (this.confirmPassword.value !== '') {
      this.confirmPasswordToValidatePassword();
    }
  }

  confirmPasswordToValidatePassword() {
    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].hasUserInteract({ field: this.confirmPassword });

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].removeInvalidHighlightFromInput({
      field: this.confirmPassword,
    });

    const confirmPasswordField = _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].resetFieldStyle({
      field: this.confirmPassword,
      fieldMessage: this.confirmPasswordMessage,
    });
    if (confirmPasswordField.empty) return;

    const passwordStatus = _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].validateClientAndServerState({
      field: this.password,
      isFieldValid: this.isPasswordValid,
      fieldMessage: this.confirmPasswordMessage,
      field2: this.confirmPassword,
      msg: 'Your password is weak',
      isConfirmPassword: true,
    });

    if (passwordStatus.weak) return;

    let validityState;

    if (this.password.value === this.confirmPassword.value) {
      this.confirmPasswordMessage.value = '✓';
      validityState = 'valid';
    } else if (this.password.value !== this.confirmPassword.value) {
      validityState = 'invalid';
      this.confirmPasswordMessage.value = 'Password Mismatch';
    }

    _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"].colorCustomMessage({
      msgToColor: this.confirmPasswordMessage,
      validityState,
      field: this.confirmPassword,
    });
  }
}


/***/ }),

/***/ "./src/homepage/module/indexDB/indexDB.js":
/*!************************************************!*\
  !*** ./src/homepage/module/indexDB/indexDB.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const indexDB = {
  openRequest: null,

  createDatabase() {
    this.openRequest = indexedDB.open('akp-loan-tracker', 2);
  },

  createObjectStore({ storeName }) {
    const isIndexDB = this.checkIfIndexedDBIsOpen();

    if (!isIndexDB.open) return;

    console.log('Did not create store', this.openRequest);
    this.openRequest.onupgradeneeded = (e) => {
      const storeHas = this.checkIfStoreHasName(storeName);

      if (storeHas.name) return;

      // eslint-disable-next-line prefer-destructuring
      const result = e.target.result;

      result.createObjectStore(storeName, { keyPath: 'id' });
      console.log('Run create store', this.openRequest);
    };
  },

  storeData({ storeName, data, runSuccessStatus, runErrorStatus }) {
    const isIndexDB = this.checkIfIndexedDBIsOpen();

    if (!isIndexDB.open) return;

    this.openRequest.onsuccess = (e) => {
      const result = e.target.result;

      const storeHas = this.checkIfStoreHasName(storeName);

      if (!storeHas.name) return;

      const transaction = result.transaction(storeName, 'readwrite');

      const store = transaction.objectStore(storeName);

      const putData = store.put(data);

      const previewDataStored = store.get(data.id);

      previewDataStored.onsuccess = () => {
        console.log(previewDataStored.result);
      };

      putData.onsuccess = () => {
        runSuccessStatus();
      };

      putData.onerror = () => {
        runErrorStatus();
      };
    };
  },

  checkIfDataMatch({
    username,
    password,
    storeName,
    keyPathValue,
    runErrorStatus,
    runSuccessStatus,
  }) {
    function returnData(data) {
      if (data.username === username && data.password === password) {
        runSuccessStatus();
        console.log(data);
      } else {
        runErrorStatus();
      }
    }

    this.getData({
      storeName,
      keyPathValue,
      returnData,
    });
  },

  checkIfKeyValueExist({ storeName, keyPathValue, runErrorStatus, runSuccessStatus }) {
    function returnData(data) {
      if (data.id === undefined) {
        runErrorStatus();
        return;
      }
      runSuccessStatus();
    }

    this.getData({
      storeName,
      keyPathValue,
      returnData,
    });
  },
  getData({ storeName, keyPathValue, returnData }) {
    this.openRequest.onsuccess = (e) => {
      const result = e.target.result;

      const storeHas = this.checkIfStoreHasName(storeName);

      if (!storeHas.name) return;

      const transaction = result.transaction(storeName, 'readwrite');

      const store = transaction.objectStore(storeName);

      const request = store.get(keyPathValue);

      request.onsuccess = (event) => {
        const data = event.target.result;

        returnData(data);
      };
    };
  },

  checkIfIndexedDBIsOpen() {
    if (!this.openRequest) {
      alert('Database not open');
      return {
        open: false,
      };
    }

    return {
      open: true,
    };
  },

  checkIfStoreHasName(storeName) {
    const result = this.openRequest.result;

    if (result.objectStoreNames.contains(storeName))
      return {
        name: true,
      };
    return {
      name: false,
    };
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indexDB);


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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"admin-sign-up": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************!*\
  !*** ./src/homepage/admin/admin-sign-up/template_admin-sign-up.js ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_admin_sign_up_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template_admin-sign-up.css */ "./src/homepage/admin/admin-sign-up/template_admin-sign-up.css");
/* harmony import */ var _assets_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/reset.css */ "./src/homepage/assets/reset.css");
/* harmony import */ var _assets_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/font.css */ "./src/homepage/assets/font.css");
/* harmony import */ var _assets_common_general_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/common_general.css */ "./src/homepage/assets/common_general.css");
/* harmony import */ var _module_form_validation_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module/form-validation/form-validator */ "./src/homepage/module/form-validation/form-validator.js");
/* harmony import */ var _module_form_validation_email_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../module/form-validation/email-validator */ "./src/homepage/module/form-validation/email-validator.js");
/* harmony import */ var _module_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../module/form-validation/password-validator */ "./src/homepage/module/form-validation/password-validator.js");
/* harmony import */ var _module_form_validation_name_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../module/form-validation/name-validator */ "./src/homepage/module/form-validation/name-validator.js");
/* harmony import */ var _module_indexDB_indexDB__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../module/indexDB/indexDB */ "./src/homepage/module/indexDB/indexDB.js");












const messages = document.querySelectorAll('output.show-message');
const inputs = document.querySelectorAll('input');
const signUpStatus = document.querySelector('.display-signup-status');

const btnSubmit = document.querySelector('.btn-sign-up');

const password = document.querySelector('#password');
const passwordMessage = document.querySelector('#password-message');

const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordMessage = document.querySelector('#confirm-password-message');

const email = document.querySelector('#email');
const emailMessage = document.querySelector('#email-message');

const firstName = document.querySelector('#first-name');
const firstNameMessage = document.querySelector('#first-name-message');

const lastName = document.querySelector('#last-name');
const lastNameMessage = document.querySelector('#last-name-message');

const adminDashboardReference = document.createElement('a');
adminDashboardReference.href = './admin-dashboard.html';

new _module_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_6__["default"]({
  password,
  passwordMessage,
  confirmPassword,
  confirmPasswordMessage,
});

new _module_form_validation_email_validator__WEBPACK_IMPORTED_MODULE_5__["default"]({ email, emailMessage });

new _module_form_validation_name_validator__WEBPACK_IMPORTED_MODULE_7__["default"]({ name: firstName, nameMessage: firstNameMessage });

new _module_form_validation_name_validator__WEBPACK_IMPORTED_MODULE_7__["default"]({ name: lastName, nameMessage: lastNameMessage });

function generateUsername() {
  const randomNumber = Math.floor(Math.random() * 200) + 1;
  const alterFirstName = firstName.value.slice(0, 3);
  const alterLastName = lastName.value.slice(0, 5);
  const username = `${alterFirstName}_${alterLastName}${randomNumber}`;

  return username;
}

function displaySignUpStatus() {
  signUpStatus.textContent = 'Submitting data...';
}

function clearForm() {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
}

function getAdminDataFromForm() {
  const username = generateUsername();

  const adminData = {
    id: 'admin',
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    username,
  };
  return adminData;
}

function adminDataIsStored() {
  // Remove the quick replace of red border when input is empty
  inputs.forEach((input) => {
    input.style = 'border-color: var(--clr-valid)';
  });
  
  setTimeout(() => {
    adminDashboardReference.click();
  }, 2000);

  setTimeout(()=>{
    clearForm()
  }, 2050)
}

function adminDataNotStored() {
  alert('Admin data not stored');
}

function runWhenAllFormIsValid() {
  _module_indexDB_indexDB__WEBPACK_IMPORTED_MODULE_8__["default"].createDatabase();

  _module_indexDB_indexDB__WEBPACK_IMPORTED_MODULE_8__["default"].createObjectStore({ storeName: 'admin-data', keyPath: 'id' });

  const adminData = getAdminDataFromForm();

  displaySignUpStatus();

  _module_indexDB_indexDB__WEBPACK_IMPORTED_MODULE_8__["default"].storeData({
    storeName: 'admin-data',
    data: adminData,
    runSuccessStatus: adminDataIsStored,
    runErrorStatus: adminDataNotStored,
  });
}

new _module_form_validation_form_validator__WEBPACK_IMPORTED_MODULE_4__["default"]({
  buttonSubmit: btnSubmit,
  messages,
  inputs,
  runWhenAllFormIsValid,
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tc2lnbi11cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw4SEFBOEgsWUFBWSxhQUFhLGFBQWEsY0FBYyxZQUFZLFlBQVksV0FBVyxLQUFLLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxpQ0FBaUMseUNBQXlDLHlCQUF5QiwwQkFBMEIseUNBQXlDLHFCQUFxQiwrQkFBK0Isa0JBQWtCLEdBQUcsNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxXQUFXLCtCQUErQix3QkFBd0IsMkNBQTJDLEtBQUssK0JBQStCLHVDQUF1QyxLQUFLLDZCQUE2QixxQ0FBcUMsS0FBSyxlQUFlLHVDQUF1QyxLQUFLLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxpQkFBaUIsdUJBQXVCLGlCQUFpQixZQUFZLGFBQWEsZ0NBQWdDLHVCQUF1QixpQkFBaUIsZ0NBQWdDLEtBQUssYUFBYSw4QkFBOEIsS0FBSyxHQUFHLHVCQUF1QixlQUFlLHVDQUF1QyxLQUFLLGFBQWEscUNBQXFDLEtBQUssR0FBRyxVQUFVLGtCQUFrQiw0QkFBNEIsc0JBQXNCLEdBQUcsVUFBVSxrQkFBa0IsNEhBQTRILGNBQWMsa0JBQWtCLGtDQUFrQyx1QkFBdUIscUJBQXFCLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLDRCQUE0QiwwQkFBMEIsMEVBQTBFLHdCQUF3Qix3QkFBd0IsZ0NBQWdDLG9CQUFvQix1QkFBdUIsR0FBRyxnQkFBZ0Isa0JBQWtCLGFBQWEsMkJBQTJCLHVCQUF1QixHQUFHLFdBQVcsaUJBQWlCLHVCQUF1QixHQUFHLFNBQVMsdUJBQXVCLHdCQUF3Qix5Q0FBeUMsMkNBQTJDLGtDQUFrQyxvQkFBb0Isb0NBQW9DLEtBQUssR0FBRyxtQ0FBbUMscUJBQXFCLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxzQkFBc0Isd0JBQXdCLHdCQUF3QixzQkFBc0IsR0FBRyxnQkFBZ0IscUJBQXFCLGlCQUFpQix1QkFBdUIsMkJBQTJCLGdCQUFnQixxQkFBcUIsaUJBQWlCLDhDQUE4QyxvQkFBb0IsR0FBRyxxQkFBcUI7QUFDbHVIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySnZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUdBQXlHLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLGdDQUFnQyw4QkFBOEIsZ0NBQWdDLHNDQUFzQywyQkFBMkIsbUJBQW1CLGtCQUFrQixrQkFBa0IsaUJBQWlCLDJDQUEyQyxpREFBaUQsOENBQThDLEdBQUcsaUJBQWlCLGlCQUFpQixzREFBc0QsbURBQW1ELEdBQUcsY0FBYyxzQkFBc0IsNEJBQTRCLHFCQUFxQixHQUFHLFVBQVUsa0JBQWtCLGNBQWMsbUNBQW1DLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0IsY0FBYyx3QkFBd0Isb0JBQW9CLEdBQUcsMEJBQTBCLDBCQUEwQixlQUFlLHVCQUF1QixHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyxLQUFLLDBCQUEwQiw4QkFBOEIsR0FBRyxLQUFLLG9CQUFvQixHQUFHLFVBQVUsa0JBQWtCLEdBQUcscUJBQXFCO0FBQzFvRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRHZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLDJJQUEwQztBQUN0Riw0Q0FBNEMseUpBQWlEO0FBQzdGLDRDQUE0Qyx1SkFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrRkFBK0YsWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLGFBQWEsYUFBYSxhQUFhLHNDQUFzQyx3QkFBd0IsZ0hBQWdILHdCQUF3Qix1QkFBdUIsdUJBQXVCLEdBQUcsZ0JBQWdCLDBCQUEwQixzSEFBc0gsdUJBQXVCLHdCQUF3Qix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDenVCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUdBQXVHLGFBQWEsUUFBUSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxTQUFTLFVBQVUsTUFBTSxZQUFZLFlBQVksWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLHlJQUF5SSwyQkFBMkIsR0FBRyx1Q0FBdUMsY0FBYyxHQUFHLFVBQVUsNERBQTRELDJFQUEyRSxHQUFHLDJFQUEyRSxtQkFBbUIsb0JBQW9CLEdBQUcsa0ZBQWtGLGtCQUFrQixHQUFHLG9FQUFvRSw4QkFBOEIsR0FBRyx1Q0FBdUMsc0JBQXNCLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLHFCQUFxQjtBQUNwdkM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNwRTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBNkg7QUFDN0g7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1R0FBTzs7OztBQUl1RTtBQUMvRixPQUFPLGlFQUFlLHVHQUFPLElBQUksdUdBQU8sVUFBVSx1R0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQWtIO0FBQ2xIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0ZBQU87Ozs7QUFJNEQ7QUFDcEYsT0FBTyxpRUFBZSwrRkFBTyxJQUFJLCtGQUFPLFVBQVUsK0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUscUZBQU8sSUFBSSxxRkFBTyxVQUFVLHFGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCaEM7O0FBRTlCO0FBQ2YsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFhLG1CQUFtQixtQkFBbUI7O0FBRXZELElBQUksdURBQWEsbUNBQW1DLG1CQUFtQjs7QUFFdkUsdUJBQXVCLHVEQUFhO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsd0NBQXdDLEdBQUc7O0FBRTNDOztBQUVBLElBQUksdURBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkNlO0FBQ2YsZ0JBQWdCLHVEQUF1RDtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLGtDQUFrQztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLHFCQUFxQjtBQUNoRCxxQ0FBcUM7O0FBRXJDO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBOztBQUVBLDBCQUEwQixlQUFlO0FBQ3pDO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRzZDOztBQUU5QjtBQUNmLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEMsSUFBSSx1REFBYTtBQUNqQjtBQUNBLEtBQUs7O0FBRUwsSUFBSSx1REFBYTtBQUNqQjtBQUNBLEtBQUs7O0FBRUwsc0JBQXNCLHVEQUFhO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsK0JBQStCLEdBQUc7O0FBRWxDOztBQUVBLElBQUksdURBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVDNkM7O0FBRTlCO0FBQ2YsZ0JBQWdCLG9FQUFvRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFhLG1CQUFtQixzQkFBc0I7O0FBRTFELElBQUksdURBQWEsbUNBQW1DLHNCQUFzQjs7QUFFMUUsMEJBQTBCLHVEQUFhO0FBQ3ZDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEdBQUc7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHVEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFhLG1CQUFtQiw2QkFBNkI7O0FBRWpFLElBQUksdURBQWE7QUFDakI7QUFDQSxLQUFLOztBQUVMLGlDQUFpQyx1REFBYTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDJCQUEyQix1REFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSx1REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUgsc0JBQXNCLFdBQVc7QUFDakM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBLEdBQUc7O0FBRUgsY0FBYyxtREFBbUQ7QUFDakU7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSCx5QkFBeUIsMkRBQTJEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxZQUFZLHFDQUFxQztBQUNqRDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7O1VDbkp2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSxvQjs7Ozs7V0NyQkEsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ047QUFDRDtBQUNVOztBQUUrQjtBQUNFO0FBQ007QUFDUjs7QUFFckI7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLGtGQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsSUFBSSwrRUFBYyxHQUFHLHFCQUFxQjs7QUFFMUMsSUFBSSw4RUFBYSxHQUFHLGdEQUFnRDs7QUFFcEUsSUFBSSw4RUFBYSxHQUFHLDhDQUE4Qzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZSxHQUFHLGNBQWMsRUFBRSxhQUFhOztBQUVyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsK0RBQU87O0FBRVQsRUFBRSwrREFBTyxxQkFBcUIsd0NBQXdDOztBQUV0RTs7QUFFQTs7QUFFQSxFQUFFLCtEQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsSUFBSSw4RUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vc3JjL2hvbWVwYWdlL2FkbWluL2FkbWluLXNpZ24tdXAvdGVtcGxhdGVfYWRtaW4tc2lnbi11cC5jc3MiLCJ3ZWJwYWNrOi8vQWt3YXBvbHljb29wIExvYW4gVHJhY2tlci8uL3NyYy9ob21lcGFnZS9hc3NldHMvY29tbW9uX2dlbmVyYWwuY3NzIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9zcmMvaG9tZXBhZ2UvYXNzZXRzL2ZvbnQuY3NzIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9zcmMvaG9tZXBhZ2UvYXNzZXRzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQWt3YXBvbHljb29wIExvYW4gVHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQWt3YXBvbHljb29wIExvYW4gVHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vc3JjL2hvbWVwYWdlL2FkbWluL2FkbWluLXNpZ24tdXAvdGVtcGxhdGVfYWRtaW4tc2lnbi11cC5jc3M/OWY5NiIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vc3JjL2hvbWVwYWdlL2Fzc2V0cy9jb21tb25fZ2VuZXJhbC5jc3M/NWYzMCIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vc3JjL2hvbWVwYWdlL2Fzc2V0cy9mb250LmNzcz9kMDBhIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9zcmMvaG9tZXBhZ2UvYXNzZXRzL3Jlc2V0LmNzcz9jNGYyIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9zcmMvaG9tZXBhZ2UvbW9kdWxlL2Zvcm0tdmFsaWRhdGlvbi9lbWFpbC12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vQWt3YXBvbHljb29wIExvYW4gVHJhY2tlci8uL3NyYy9ob21lcGFnZS9tb2R1bGUvZm9ybS12YWxpZGF0aW9uL2Zvcm0tdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9zcmMvaG9tZXBhZ2UvbW9kdWxlL2Zvcm0tdmFsaWRhdGlvbi9uYW1lLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyLy4vc3JjL2hvbWVwYWdlL21vZHVsZS9mb3JtLXZhbGlkYXRpb24vcGFzc3dvcmQtdmFsaWRhdG9yLmpzIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9zcmMvaG9tZXBhZ2UvbW9kdWxlL2luZGV4REIvaW5kZXhEQi5qcyIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQWt3YXBvbHljb29wIExvYW4gVHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQWt3YXBvbHljb29wIExvYW4gVHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQWt3YXBvbHljb29wIExvYW4gVHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ba3dhcG9seWNvb3AgTG9hbiBUcmFja2VyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0Frd2Fwb2x5Y29vcCBMb2FuIFRyYWNrZXIvLi9zcmMvaG9tZXBhZ2UvYWRtaW4vYWRtaW4tc2lnbi11cC90ZW1wbGF0ZV9hZG1pbi1zaWduLXVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY2xyLWludmFsaWQ6IGhzbCgxMy41LCA4MSUsIDMyLjElKTtcbiAgLS1jbHItdmFsaWQ6ICMxMGE1MTA7XG4gIC0tY2xyLW5vcm1hbDogI2VmZjJjZTtcbiAgLS1jbHItdHJhbnNwYXJlbnQ6IHJnYmEoMCAwIDAgLyAwLjQpO1xuXG4gIC0tbWQtZGltOiA1MHB4O1xuXG4gIC0tY29udGFpbmVyLXdpZHRoOiA2MTBweDtcbiAgLS1zbS1nYXA6IDVweDtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXQge1xuICAmOndoZXJlKDppbnZhbGlkLCA6dmFsaWQpIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci10cmFuc3BhcmVudCk7XG4gIH1cblxuICAmLnVzZXItaW50ZXJhY3Q6aW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItaW52YWxpZCk7XG4gIH1cblxuICAmLnVzZXItaW50ZXJhY3Q6dmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXZhbGlkKTtcbiAgfVxuICAmLmludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLWludmFsaWQpO1xuICB9XG59XG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNob3ctbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgJi5pbnZhbGlkIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWludmFsaWQpO1xuICB9XG4gICYudmFsaWQge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdmFsaWQpO1xuICB9XG59XG5cbiNjb25maXJtLXBhc3N3b3JkIHtcbiAgJi5pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1pbnZhbGlkKTtcbiAgfVxuICAmLnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci12YWxpZCk7XG4gIH1cbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KFxuICAgIGF1dG8tZml0LFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNvbnRhaW5lci13aWR0aCkgLyAyLjIgLSB2YXIoLS1zbS1nYXApKSwgMWZyKVxuICApO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogdmFyKC0tbWQtZGltKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDUwZGVnLCB2YXIoLS1pbmspLCB2YXIoLS1wcmltYXJ5LWFjY2VudCkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1zbSk7XG4gIHBhZGRpbmc6IDM1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5mb3JtID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtd2hpdGUpO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdHJhbnNwYXJlbnQpO1xuICB9XG59XG5cbi5wYXNzd29yZCxcbi5jb25maXJtLXBhc3N3b3JkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVtYWlsIHtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG59XG4uc2lnbnVwLWJ0bi1zZWN0aW9ue1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5idG4tc2lnbi11cCB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmspO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXRyYW5zcGFyZW50KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZXBhZ2UvYWRtaW4vYWRtaW4tc2lnbi11cC90ZW1wbGF0ZV9hZG1pbi1zaWduLXVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG9DQUFvQzs7RUFFcEMsY0FBYzs7RUFFZCx3QkFBd0I7RUFDeEIsYUFBYTtBQUNmO0FBQ0E7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGtCQUFrQjs7RUFFbEI7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7OztHQUdDO0VBQ0QsU0FBUztFQUNULGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxRUFBcUU7RUFDckUsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0Qyw2QkFBNkI7RUFDN0I7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jbHItaW52YWxpZDogaHNsKDEzLjUsIDgxJSwgMzIuMSUpO1xcbiAgLS1jbHItdmFsaWQ6ICMxMGE1MTA7XFxuICAtLWNsci1ub3JtYWw6ICNlZmYyY2U7XFxuICAtLWNsci10cmFuc3BhcmVudDogcmdiYSgwIDAgMCAvIDAuNCk7XFxuXFxuICAtLW1kLWRpbTogNTBweDtcXG5cXG4gIC0tY29udGFpbmVyLXdpZHRoOiA2MTBweDtcXG4gIC0tc20tZ2FwOiA1cHg7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAmOndoZXJlKDppbnZhbGlkLCA6dmFsaWQpIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXRyYW5zcGFyZW50KTtcXG4gIH1cXG5cXG4gICYudXNlci1pbnRlcmFjdDppbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItaW52YWxpZCk7XFxuICB9XFxuXFxuICAmLnVzZXItaW50ZXJhY3Q6dmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci12YWxpZCk7XFxuICB9XFxuICAmLmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1pbnZhbGlkKTtcXG4gIH1cXG59XFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zaG93LW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcblxcbiAgJi5pbnZhbGlkIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1pbnZhbGlkKTtcXG4gIH1cXG4gICYudmFsaWQge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXZhbGlkKTtcXG4gIH1cXG59XFxuXFxuI2NvbmZpcm0tcGFzc3dvcmQge1xcbiAgJi5pbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItaW52YWxpZCk7XFxuICB9XFxuICAmLnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItdmFsaWQpO1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcXG4gICAgYXV0by1maXQsXFxuICAgIG1pbm1heChjYWxjKHZhcigtLWNvbnRhaW5lci13aWR0aCkgLyAyLjIgLSB2YXIoLS1zbS1nYXApKSwgMWZyKVxcbiAgKTtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IHZhcigtLW1kLWRpbSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHZhcigtLWluayksIHZhcigtLXByaW1hcnktYWNjZW50KSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLXNtKTtcXG4gIHBhZGRpbmc6IDM1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbmlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudC13aGl0ZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRyYW5zcGFyZW50KTtcXG4gIH1cXG59XFxuXFxuLnBhc3N3b3JkLFxcbi5jb25maXJtLXBhc3N3b3JkIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5lbWFpbCB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuLnNpZ251cC1idG4tc2VjdGlvbntcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcbi5idG4tc2lnbi11cCB7XFxuICBtYXgtd2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0taW5rKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdHJhbnNwYXJlbnQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1wcmltYXJ5LWFjY2VudDogIzBmNzY2ZTtcbiAgLS1zZWNvbmRhcnktYWNjZW50OiAjYzVlZmUxO1xuICAtLXNlY29uZGFyeS1hY2NlbnQtZmFpbnQ6ICNmMWZmZmI7XG4gIC0tZGFyay15ZWxsb3c6ICM4NjZjMDU7XG4gIC0taW5rOiAjMGIxZjJhO1xuICAtLWJsYWNrOiAjMDAwO1xuICAtLXdoaXRlOiAjZmZmO1xuICAtLWdyZXk6ICM2NjY7XG4gIC0tdHJhbnNwYXJlbnQtYmxhY2s6IHJnYmEoMCAwIDAgLyAwLjgpO1xuICAtLXRyYW5zcGFyZW50LXdoaXRlOiByZ2JhKDI1NSAyNTUgMjU1IC8gMC40KTtcblxuICAtLWJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwIDAgMCAvIDAuNSk7XG59XG5cbmJvZHksXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDFyZW0gKyAwLjAzdncsIDEuMDVyZW0pO1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICB3aWR0aDogbWluKDkwJSwgMTIwMHB4KTtcbiAgbWFyZ2luOiAwIGF1dG8gMDtcbn1cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubmF2aWdhdGlvbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubmF2aWdhdGlvbi1zZWN0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9nby1zZWN0aW9uIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXllbGxvdyk7XG59XG5wIHtcbiAgbWF4LXdpZHRoOiA1MGNoO1xufVxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWVwYWdlL2Fzc2V0cy9jb21tb25fZ2VuZXJhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNDQUFzQztFQUN0Qyw0Q0FBNEM7O0VBRTVDLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaURBQWlEO0VBQ2pELDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktYWNjZW50OiAjMGY3NjZlO1xcbiAgLS1zZWNvbmRhcnktYWNjZW50OiAjYzVlZmUxO1xcbiAgLS1zZWNvbmRhcnktYWNjZW50LWZhaW50OiAjZjFmZmZiO1xcbiAgLS1kYXJrLXllbGxvdzogIzg2NmMwNTtcXG4gIC0taW5rOiAjMGIxZjJhO1xcbiAgLS1ibGFjazogIzAwMDtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWdyZXk6ICM2NjY7XFxuICAtLXRyYW5zcGFyZW50LWJsYWNrOiByZ2JhKDAgMCAwIC8gMC44KTtcXG4gIC0tdHJhbnNwYXJlbnQtd2hpdGU6IHJnYmEoMjU1IDI1NSAyNTUgLyAwLjQpO1xcblxcbiAgLS1ib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCAwIDAgLyAwLjUpO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXJlbSArIDAuMDN2dywgMS4wNXJlbSk7XFxufVxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICB3aWR0aDogbWluKDkwJSwgMTIwMHB4KTtcXG4gIG1hcmdpbjogMCBhdXRvIDA7XFxufVxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubmF2aWdhdGlvbi1zZWN0aW9uIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sb2dvLXNlY3Rpb24gaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZGFyay15ZWxsb3cpO1xcbn1cXG5wIHtcXG4gIG1heC13aWR0aDogNTBjaDtcXG59XFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tNDAwLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgc3JjOlxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQod29mZiksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCh3b2ZmMik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFBhY2lmaWNvO1xuICBzcmM6XG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCh3b2ZmKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KHdvZmYyKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ob21lcGFnZS9hc3NldHMvZm9udC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkI7O3lEQUVtRDtFQUNuRCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjs7eURBRW1EO0VBQ25ELGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzpcXG4gICAgdXJsKC4vZm9udHMvUm9ib3RvLTQwMC53b2ZmKSBmb3JtYXQod29mZiksXFxuICAgIHVybCguL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZjIpIGZvcm1hdCh3b2ZmMik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBQYWNpZmljbztcXG4gIHNyYzpcXG4gICAgdXJsKC4vZm9udHMvUGFjaWZpY28tUmVndWxhci53b2ZmKSBmb3JtYXQod29mZiksXFxuICAgIHVybCguL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZjIpIGZvcm1hdCh3b2ZmMik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qICA9PT09PT09PT09PSBSZXNldCA9PT09PT09PT0gICovXG4vKiAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbioge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICAvKiAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodCAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICAvKiA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vKiA1LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzICovXG5pbWcsXG5waWN0dXJlLFxudmlkZW8sXG5jYW52YXMsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKiA2LiBJbmhlcml0IGZvbnRzIGZvciBmb3JtIGNvbnRyb2xzICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLyogNy4gQXZvaWQgdGV4dCBvdmVyZmxvd3MgKi9cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4vKiA4LiBJbXByb3ZlIGxpbmUgd3JhcHBpbmcgKi9cbnAge1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbn1cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIHRleHQtd3JhcDogYmFsYW5jZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWVwYWdlL2Fzc2V0cy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0NBQWtDO0FBQ2xDLDZDQUE2QztBQUM3Qzs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLG1DQUFtQztBQUNyQzs7QUFFQSw4QkFBOEI7QUFDOUI7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUEsdUNBQXVDO0FBQ3ZDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLDRCQUE0QjtBQUM1Qjs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7Ozs7O0VBTUUsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qICA9PT09PT09PT09PSBSZXNldCA9PT09PT09PT0gICovXFxuLyogMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbCAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC8qIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLyogNC4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZyAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHMgKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiA2LiBJbmhlcml0IGZvbnRzIGZvciBmb3JtIGNvbnRyb2xzICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93cyAqL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLyogOC4gSW1wcm92ZSBsaW5lIHdyYXBwaW5nICovXFxucCB7XFxuICB0ZXh0LXdyYXA6IHByZXR0eTtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZW1wbGF0ZV9hZG1pbi1zaWduLXVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlbXBsYXRlX2FkbWluLXNpZ24tdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1vbl9nZW5lcmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1vbl9nZW5lcmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4vZm9ybS12YWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbCB7XG4gIGNvbnN0cnVjdG9yKHsgZW1haWwsIGVtYWlsTWVzc2FnZSB9KSB7XG4gICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgIHRoaXMuZW1haWxNZXNzYWdlID0gZW1haWxNZXNzYWdlO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cblxuICBiaW5kRXZlbnQoKSB7XG4gICAgdGhpcy5lbWFpbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudmFsaWRhdGVFbWFpbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHZhbGlkYXRlRW1haWwoKSB7XG4gICAgRm9ybVZhbGlkYXRvci5oYXNVc2VySW50ZXJhY3QoeyBmaWVsZDogdGhpcy5lbWFpbCB9KTtcblxuICAgIEZvcm1WYWxpZGF0b3IucmVtb3ZlSW52YWxpZEhpZ2hsaWdodEZyb21JbnB1dCh7IGZpZWxkOiB0aGlzLmVtYWlsIH0pO1xuXG4gICAgY29uc3QgZW1haWxGaWVsZCA9IEZvcm1WYWxpZGF0b3IucmVzZXRGaWVsZFN0eWxlKHtcbiAgICAgIGZpZWxkOiB0aGlzLmVtYWlsLFxuICAgICAgZmllbGRNZXNzYWdlOiB0aGlzLmVtYWlsTWVzc2FnZSxcbiAgICB9KTtcbiAgICBpZiAoZW1haWxGaWVsZC5lbXB0eSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bYS16QS1aMC05Ll17NCx9QChnbWFpbHx5YWhvb3xob3RtYWlsKS5jb20kLztcblxuICAgIGNvbnN0IGlzRW1haWxWYWxpZCA9IGVtYWlsUGF0dGVybi50ZXN0KHRoaXMuZW1haWwudmFsdWUpO1xuXG4gICAgRm9ybVZhbGlkYXRvci52YWxpZGF0ZUNsaWVudEFuZFNlcnZlclN0YXRlKHtcbiAgICAgIGZpZWxkOiB0aGlzLmVtYWlsLFxuICAgICAgaXNGaWVsZFZhbGlkOiBpc0VtYWlsVmFsaWQsXG4gICAgICBmaWVsZE1lc3NhZ2U6IHRoaXMuZW1haWxNZXNzYWdlLFxuICAgICAgbXNnOiAnSW5jb3JyZWN0IGVtYWlsJyxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHsgYnV0dG9uU3VibWl0LCBtZXNzYWdlcywgaW5wdXRzLCBydW5XaGVuQWxsRm9ybUlzVmFsaWQgfSkge1xuICAgIHRoaXMuYnV0dG9uU3VibWl0ID0gYnV0dG9uU3VibWl0O1xuICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcbiAgICB0aGlzLnJ1bldoZW5BbGxGb3JtSXNWYWxpZCA9IHJ1bldoZW5BbGxGb3JtSXNWYWxpZDtcbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG5cbiAgYmluZEV2ZW50KCkge1xuICAgIHRoaXMuYnV0dG9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jdXN0b21DaGVja1ZhbGlkaXR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY3VzdG9tQ2hlY2tWYWxpZGl0eSgpIHtcbiAgICBjb25zdCBpc0V2ZXJ5SW5wdXRWYWxpZCA9IFsuLi50aGlzLm1lc3NhZ2VzXS5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcblxuICAgIGNvbnN0IGlzRXZlcnlNZXNzYWdlVmFsaWQgPSBbLi4udGhpcy5tZXNzYWdlc10uZXZlcnkoKG1lc3NhZ2UpID0+XG4gICAgICBtZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucygndmFsaWQnKSxcbiAgICApO1xuXG4gICAgaWYgKGlzRXZlcnlNZXNzYWdlVmFsaWQgJiYgaXNFdmVyeUlucHV0VmFsaWQpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHRoaXMucnVuV2hlbkFsbEZvcm1Jc1ZhbGlkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSBbLi4udGhpcy5pbnB1dHNdLmZpbHRlcigoaW5wdXQpID0+ICFpbnB1dC52YWxpZGl0eS52YWxpZCk7XG5cbiAgICAgIGludmFsaWRJbnB1dHMuZm9yRWFjaCgoaW52YWxpZElucHV0KSA9PiB7XG4gICAgICAgIGludmFsaWRJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaGFzVXNlckludGVyYWN0KHsgZmllbGQgfSkge1xuICAgIGlmIChmaWVsZC52YWx1ZSAhPT0gJycgJiYgIWZpZWxkLmNsYXNzTGlzdC5jb250YWlucygndXNlci1pbnRlcmFjdCcpKSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCd1c2VyLWludGVyYWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZUludmFsaWRIaWdobGlnaHRGcm9tSW5wdXQoeyBmaWVsZCB9KSB7XG4gICAgaWYgKGZpZWxkLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNvbG9yQ3VzdG9tTWVzc2FnZSh7IG1zZ1RvQ29sb3IsIHZhbGlkaXR5U3RhdGUsIGZpZWxkIH0pIHtcbiAgICBtc2dUb0NvbG9yLmNsYXNzTGlzdC5hZGQodmFsaWRpdHlTdGF0ZSk7XG5cbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQodmFsaWRpdHlTdGF0ZSk7XG4gICAgfVxuXG4gICAgdmFsaWRpdHlTdGF0ZSA9IHZhbGlkaXR5U3RhdGUgPT09ICd2YWxpZCcgPyAnaW52YWxpZCcgOiAndmFsaWQnO1xuXG4gICAgbXNnVG9Db2xvci5jbGFzc0xpc3QucmVtb3ZlKHZhbGlkaXR5U3RhdGUpO1xuXG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKHZhbGlkaXR5U3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZXNldEZpZWxkU3R5bGUoeyBmaWVsZCwgZmllbGRNZXNzYWdlIH0pIHtcbiAgICBpZiAoZmllbGQudmFsdWUgIT09ICcnKSByZXR1cm4geyBlbXB0eTogZmFsc2UgfTtcblxuICAgIGZpZWxkTWVzc2FnZS52YWx1ZSA9ICcnO1xuICAgIGZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnLCAndmFsaWQnKTtcblxuICAgIHJldHVybiB7IGVtcHR5OiB0cnVlIH07XG4gIH1cblxuICBzdGF0aWMgdmFsaWRhdGVDbGllbnRBbmRTZXJ2ZXJTdGF0ZSh7XG4gICAgZmllbGQsXG4gICAgaXNGaWVsZFZhbGlkLFxuICAgIGZpZWxkTWVzc2FnZSxcbiAgICBtc2csXG4gICAgaXNDb25maXJtUGFzc3dvcmQsXG4gICAgZmllbGQyLFxuICB9KSB7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgbGV0IHZhbGlkaXR5U3RhdGU7XG5cbiAgICBpZiAoIWZpZWxkLnZhbGlkaXR5LnZhbGlkICYmICFpc0ZpZWxkVmFsaWQpIHtcbiAgICAgIG1lc3NhZ2UgPSBtc2c7XG4gICAgICB2YWxpZGl0eVN0YXRlID0gJ2ludmFsaWQnO1xuICAgIH0gZWxzZSBpZiAoZmllbGQudmFsaWRpdHkudmFsaWQgJiYgaXNGaWVsZFZhbGlkKSB7XG4gICAgICBtZXNzYWdlID0gJ+Kckyc7XG4gICAgICB2YWxpZGl0eVN0YXRlID0gJ3ZhbGlkJztcbiAgICB9XG5cbiAgICBtZXNzYWdlID8gKGZpZWxkTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lc3NhZ2UpIDogZmllbGRNZXNzYWdlLnRleHRDb250ZW50O1xuXG4gICAgdGhpcy5jb2xvckN1c3RvbU1lc3NhZ2Uoe1xuICAgICAgbXNnVG9Db2xvcjogZmllbGRNZXNzYWdlLFxuICAgICAgdmFsaWRpdHlTdGF0ZSxcbiAgICAgIGZpZWxkOiBmaWVsZDIsXG4gICAgfSk7XG5cbiAgICBpZiAoaXNDb25maXJtUGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzUGFzc3dvcmRXZWFrKHsgdmFsaWRpdHlTdGF0ZSB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNQYXNzd29yZFdlYWsoeyB2YWxpZGl0eVN0YXRlIH0pIHtcbiAgICBpZiAodmFsaWRpdHlTdGF0ZSA9PT0gJ2ludmFsaWQnKSB7XG4gICAgICByZXR1cm4geyB3ZWFrOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7IHdlYWs6IGZhbHNlIH07XG4gIH1cbn1cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4vZm9ybS12YWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBuYW1lTWVzc2FnZSB9KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5hbWVNZXNzYWdlID0gbmFtZU1lc3NhZ2U7XG4gICAgdGhpcy5iaW5kRXZlbnQgPSB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG5cbiAgYmluZEV2ZW50KCkge1xuICAgIHRoaXMubmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+XG4gICAgICB0aGlzLnZhbGlkYXRlTmFtZSh7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgbmFtZU1lc3NhZ2U6IHRoaXMubmFtZU1lc3NhZ2UsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgdmFsaWRhdGVOYW1lKHsgbmFtZSwgbmFtZU1lc3NhZ2UgfSkge1xuICAgIEZvcm1WYWxpZGF0b3IuaGFzVXNlckludGVyYWN0KHtcbiAgICAgIGZpZWxkOiB0aGlzLm5hbWUsXG4gICAgfSk7XG5cbiAgICBGb3JtVmFsaWRhdG9yLnJlbW92ZUludmFsaWRIaWdobGlnaHRGcm9tSW5wdXQoe1xuICAgICAgZmllbGQ6IHRoaXMubmFtZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hbWVGaWVsZCA9IEZvcm1WYWxpZGF0b3IucmVzZXRGaWVsZFN0eWxlKHtcbiAgICAgIGZpZWxkOiBuYW1lLFxuICAgICAgZmllbGRNZXNzYWdlOiBuYW1lTWVzc2FnZSxcbiAgICB9KTtcbiAgICBpZiAobmFtZUZpZWxkLmVtcHR5KSByZXR1cm47XG5cbiAgICBjb25zdCBwYXR0ZXJuID0gL15bYS16QS1aXXsxLH0kLztcblxuICAgIGNvbnN0IGlzTmFtZVZhbGlkID0gcGF0dGVybi50ZXN0KG5hbWUudmFsdWUpO1xuXG4gICAgRm9ybVZhbGlkYXRvci52YWxpZGF0ZUNsaWVudEFuZFNlcnZlclN0YXRlKHtcbiAgICAgIGZpZWxkOiBuYW1lLFxuICAgICAgaXNGaWVsZFZhbGlkOiBpc05hbWVWYWxpZCxcbiAgICAgIGZpZWxkTWVzc2FnZTogbmFtZU1lc3NhZ2UsXG4gICAgICBtc2c6ICdJbmNvcnJlY3QgbmFtZScsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4vZm9ybS12YWxpZGF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZCB7XG4gIGNvbnN0cnVjdG9yKHsgcGFzc3dvcmQsIHBhc3N3b3JkTWVzc2FnZSwgY29uZmlybVBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmRNZXNzYWdlIH0pIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgdGhpcy5wYXNzd29yZE1lc3NhZ2UgPSBwYXNzd29yZE1lc3NhZ2U7XG4gICAgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBjb25maXJtUGFzc3dvcmQ7XG4gICAgdGhpcy5jb25maXJtUGFzc3dvcmRNZXNzYWdlID0gY29uZmlybVBhc3N3b3JkTWVzc2FnZTtcbiAgICB0aGlzLmlzUGFzc3dvcmRWYWxpZCA9IG51bGw7XG4gICAgdGhpcy5iaW5kRXZlbnQgPSB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG5cbiAgYmluZEV2ZW50KCkge1xuICAgIHRoaXMucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnZhbGlkYXRlUGFzc3dvcmQuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2lucHV0JyxcbiAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkVG9WYWxpZGF0ZVBhc3N3b3JkLmJpbmQodGhpcyksXG4gICAgKTtcbiAgfVxuXG4gIHZhbGlkYXRlUGFzc3dvcmQoKSB7XG4gICAgRm9ybVZhbGlkYXRvci5oYXNVc2VySW50ZXJhY3QoeyBmaWVsZDogdGhpcy5wYXNzd29yZCB9KTtcblxuICAgIEZvcm1WYWxpZGF0b3IucmVtb3ZlSW52YWxpZEhpZ2hsaWdodEZyb21JbnB1dCh7IGZpZWxkOiB0aGlzLnBhc3N3b3JkIH0pO1xuXG4gICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IEZvcm1WYWxpZGF0b3IucmVzZXRGaWVsZFN0eWxlKHtcbiAgICAgIGZpZWxkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgZmllbGRNZXNzYWdlOiB0aGlzLnBhc3N3b3JkTWVzc2FnZSxcbiAgICB9KTtcbiAgICBpZiAocGFzc3dvcmRGaWVsZC5lbXB0eSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbG93ZXJjYXNlID0gL1thLXpdLy50ZXN0KHRoaXMucGFzc3dvcmQudmFsdWUpO1xuICAgIGNvbnN0IHVwcGVyY2FzZSA9IC9bQS1aXS8udGVzdCh0aGlzLnBhc3N3b3JkLnZhbHVlKTtcbiAgICBjb25zdCBudW1iZXIgPSAvWzAtOV0vLnRlc3QodGhpcy5wYXNzd29yZC52YWx1ZSk7XG4gICAgY29uc3QgbWluTGVuZ3RoID0gLy57Nyx9Ly50ZXN0KHRoaXMucGFzc3dvcmQudmFsdWUpO1xuXG4gICAgdGhpcy5wYXNzd29yZE1lc3NhZ2UudmFsdWUgPSAnUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4nO1xuXG4gICAgaWYgKCFsb3dlcmNhc2UpIHtcbiAgICAgIHRoaXMucGFzc3dvcmRNZXNzYWdlLnZhbHVlICs9ICcsIExvd2VyY2FzZSc7XG4gICAgfVxuICAgIGlmICghdXBwZXJjYXNlKSB7XG4gICAgICB0aGlzLnBhc3N3b3JkTWVzc2FnZS52YWx1ZSArPSAnLCBVcHBlcmNhc2UnO1xuICAgIH1cbiAgICBpZiAoIW51bWJlcikge1xuICAgICAgdGhpcy5wYXNzd29yZE1lc3NhZ2UudmFsdWUgKz0gJywgTnVtYmVyJztcbiAgICB9XG4gICAgaWYgKCFtaW5MZW5ndGgpIHtcbiAgICAgIHRoaXMucGFzc3dvcmRNZXNzYWdlLnZhbHVlICs9ICcsIE1pbmltdW0gb2YgNyBjaGFyYWN0ZXJzJztcbiAgICB9XG5cbiAgICB0aGlzLmlzUGFzc3dvcmRWYWxpZCA9IGxvd2VyY2FzZSAmJiB1cHBlcmNhc2UgJiYgbnVtYmVyICYmIG1pbkxlbmd0aDtcblxuICAgIEZvcm1WYWxpZGF0b3IudmFsaWRhdGVDbGllbnRBbmRTZXJ2ZXJTdGF0ZSh7XG4gICAgICBmaWVsZDogdGhpcy5wYXNzd29yZCxcbiAgICAgIGlzRmllbGRWYWxpZDogdGhpcy5pc1Bhc3N3b3JkVmFsaWQsXG4gICAgICBmaWVsZE1lc3NhZ2U6IHRoaXMucGFzc3dvcmRNZXNzYWdlLFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmRUb1ZhbGlkYXRlUGFzc3dvcmQoKTtcbiAgICB9XG4gIH1cblxuICBjb25maXJtUGFzc3dvcmRUb1ZhbGlkYXRlUGFzc3dvcmQoKSB7XG4gICAgRm9ybVZhbGlkYXRvci5oYXNVc2VySW50ZXJhY3QoeyBmaWVsZDogdGhpcy5jb25maXJtUGFzc3dvcmQgfSk7XG5cbiAgICBGb3JtVmFsaWRhdG9yLnJlbW92ZUludmFsaWRIaWdobGlnaHRGcm9tSW5wdXQoe1xuICAgICAgZmllbGQ6IHRoaXMuY29uZmlybVBhc3N3b3JkLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkRmllbGQgPSBGb3JtVmFsaWRhdG9yLnJlc2V0RmllbGRTdHlsZSh7XG4gICAgICBmaWVsZDogdGhpcy5jb25maXJtUGFzc3dvcmQsXG4gICAgICBmaWVsZE1lc3NhZ2U6IHRoaXMuY29uZmlybVBhc3N3b3JkTWVzc2FnZSxcbiAgICB9KTtcbiAgICBpZiAoY29uZmlybVBhc3N3b3JkRmllbGQuZW1wdHkpIHJldHVybjtcblxuICAgIGNvbnN0IHBhc3N3b3JkU3RhdHVzID0gRm9ybVZhbGlkYXRvci52YWxpZGF0ZUNsaWVudEFuZFNlcnZlclN0YXRlKHtcbiAgICAgIGZpZWxkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgaXNGaWVsZFZhbGlkOiB0aGlzLmlzUGFzc3dvcmRWYWxpZCxcbiAgICAgIGZpZWxkTWVzc2FnZTogdGhpcy5jb25maXJtUGFzc3dvcmRNZXNzYWdlLFxuICAgICAgZmllbGQyOiB0aGlzLmNvbmZpcm1QYXNzd29yZCxcbiAgICAgIG1zZzogJ1lvdXIgcGFzc3dvcmQgaXMgd2VhaycsXG4gICAgICBpc0NvbmZpcm1QYXNzd29yZDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGlmIChwYXNzd29yZFN0YXR1cy53ZWFrKSByZXR1cm47XG5cbiAgICBsZXQgdmFsaWRpdHlTdGF0ZTtcblxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlID09PSB0aGlzLmNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmRNZXNzYWdlLnZhbHVlID0gJ+Kckyc7XG4gICAgICB2YWxpZGl0eVN0YXRlID0gJ3ZhbGlkJztcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFzc3dvcmQudmFsdWUgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkLnZhbHVlKSB7XG4gICAgICB2YWxpZGl0eVN0YXRlID0gJ2ludmFsaWQnO1xuICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmRNZXNzYWdlLnZhbHVlID0gJ1Bhc3N3b3JkIE1pc21hdGNoJztcbiAgICB9XG5cbiAgICBGb3JtVmFsaWRhdG9yLmNvbG9yQ3VzdG9tTWVzc2FnZSh7XG4gICAgICBtc2dUb0NvbG9yOiB0aGlzLmNvbmZpcm1QYXNzd29yZE1lc3NhZ2UsXG4gICAgICB2YWxpZGl0eVN0YXRlLFxuICAgICAgZmllbGQ6IHRoaXMuY29uZmlybVBhc3N3b3JkLFxuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBpbmRleERCID0ge1xuICBvcGVuUmVxdWVzdDogbnVsbCxcblxuICBjcmVhdGVEYXRhYmFzZSgpIHtcbiAgICB0aGlzLm9wZW5SZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ2FrcC1sb2FuLXRyYWNrZXInLCAyKTtcbiAgfSxcblxuICBjcmVhdGVPYmplY3RTdG9yZSh7IHN0b3JlTmFtZSB9KSB7XG4gICAgY29uc3QgaXNJbmRleERCID0gdGhpcy5jaGVja0lmSW5kZXhlZERCSXNPcGVuKCk7XG5cbiAgICBpZiAoIWlzSW5kZXhEQi5vcGVuKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygnRGlkIG5vdCBjcmVhdGUgc3RvcmUnLCB0aGlzLm9wZW5SZXF1ZXN0KTtcbiAgICB0aGlzLm9wZW5SZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBzdG9yZUhhcyA9IHRoaXMuY2hlY2tJZlN0b3JlSGFzTmFtZShzdG9yZU5hbWUpO1xuXG4gICAgICBpZiAoc3RvcmVIYXMubmFtZSkgcmV0dXJuO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcblxuICAgICAgcmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSwgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgY29uc29sZS5sb2coJ1J1biBjcmVhdGUgc3RvcmUnLCB0aGlzLm9wZW5SZXF1ZXN0KTtcbiAgICB9O1xuICB9LFxuXG4gIHN0b3JlRGF0YSh7IHN0b3JlTmFtZSwgZGF0YSwgcnVuU3VjY2Vzc1N0YXR1cywgcnVuRXJyb3JTdGF0dXMgfSkge1xuICAgIGNvbnN0IGlzSW5kZXhEQiA9IHRoaXMuY2hlY2tJZkluZGV4ZWREQklzT3BlbigpO1xuXG4gICAgaWYgKCFpc0luZGV4REIub3BlbikgcmV0dXJuO1xuXG4gICAgdGhpcy5vcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZS50YXJnZXQucmVzdWx0O1xuXG4gICAgICBjb25zdCBzdG9yZUhhcyA9IHRoaXMuY2hlY2tJZlN0b3JlSGFzTmFtZShzdG9yZU5hbWUpO1xuXG4gICAgICBpZiAoIXN0b3JlSGFzLm5hbWUpIHJldHVybjtcblxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSByZXN1bHQudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCAncmVhZHdyaXRlJyk7XG5cbiAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcblxuICAgICAgY29uc3QgcHV0RGF0YSA9IHN0b3JlLnB1dChkYXRhKTtcblxuICAgICAgY29uc3QgcHJldmlld0RhdGFTdG9yZWQgPSBzdG9yZS5nZXQoZGF0YS5pZCk7XG5cbiAgICAgIHByZXZpZXdEYXRhU3RvcmVkLm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJldmlld0RhdGFTdG9yZWQucmVzdWx0KTtcbiAgICAgIH07XG5cbiAgICAgIHB1dERhdGEub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICBydW5TdWNjZXNzU3RhdHVzKCk7XG4gICAgICB9O1xuXG4gICAgICBwdXREYXRhLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHJ1bkVycm9yU3RhdHVzKCk7XG4gICAgICB9O1xuICAgIH07XG4gIH0sXG5cbiAgY2hlY2tJZkRhdGFNYXRjaCh7XG4gICAgdXNlcm5hbWUsXG4gICAgcGFzc3dvcmQsXG4gICAgc3RvcmVOYW1lLFxuICAgIGtleVBhdGhWYWx1ZSxcbiAgICBydW5FcnJvclN0YXR1cyxcbiAgICBydW5TdWNjZXNzU3RhdHVzLFxuICB9KSB7XG4gICAgZnVuY3Rpb24gcmV0dXJuRGF0YShkYXRhKSB7XG4gICAgICBpZiAoZGF0YS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgZGF0YS5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcbiAgICAgICAgcnVuU3VjY2Vzc1N0YXR1cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bkVycm9yU3RhdHVzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5nZXREYXRhKHtcbiAgICAgIHN0b3JlTmFtZSxcbiAgICAgIGtleVBhdGhWYWx1ZSxcbiAgICAgIHJldHVybkRhdGEsXG4gICAgfSk7XG4gIH0sXG5cbiAgY2hlY2tJZktleVZhbHVlRXhpc3QoeyBzdG9yZU5hbWUsIGtleVBhdGhWYWx1ZSwgcnVuRXJyb3JTdGF0dXMsIHJ1blN1Y2Nlc3NTdGF0dXMgfSkge1xuICAgIGZ1bmN0aW9uIHJldHVybkRhdGEoZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBydW5FcnJvclN0YXR1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBydW5TdWNjZXNzU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5nZXREYXRhKHtcbiAgICAgIHN0b3JlTmFtZSxcbiAgICAgIGtleVBhdGhWYWx1ZSxcbiAgICAgIHJldHVybkRhdGEsXG4gICAgfSk7XG4gIH0sXG4gIGdldERhdGEoeyBzdG9yZU5hbWUsIGtleVBhdGhWYWx1ZSwgcmV0dXJuRGF0YSB9KSB7XG4gICAgdGhpcy5vcGVuUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZS50YXJnZXQucmVzdWx0O1xuXG4gICAgICBjb25zdCBzdG9yZUhhcyA9IHRoaXMuY2hlY2tJZlN0b3JlSGFzTmFtZShzdG9yZU5hbWUpO1xuXG4gICAgICBpZiAoIXN0b3JlSGFzLm5hbWUpIHJldHVybjtcblxuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSByZXN1bHQudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCAncmVhZHdyaXRlJyk7XG5cbiAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcblxuICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLmdldChrZXlQYXRoVmFsdWUpO1xuXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuICAgICAgICByZXR1cm5EYXRhKGRhdGEpO1xuICAgICAgfTtcbiAgICB9O1xuICB9LFxuXG4gIGNoZWNrSWZJbmRleGVkREJJc09wZW4oKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5SZXF1ZXN0KSB7XG4gICAgICBhbGVydCgnRGF0YWJhc2Ugbm90IG9wZW4nKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb3BlbjogdHJ1ZSxcbiAgICB9O1xuICB9LFxuXG4gIGNoZWNrSWZTdG9yZUhhc05hbWUoc3RvcmVOYW1lKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5vcGVuUmVxdWVzdC5yZXN1bHQ7XG5cbiAgICBpZiAocmVzdWx0Lm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoc3RvcmVOYW1lKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRydWUsXG4gICAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBmYWxzZSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhEQjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFkbWluLXNpZ24tdXBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3RlbXBsYXRlX2FkbWluLXNpZ24tdXAuY3NzJztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9mb250LmNzcyc7XG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9jb21tb25fZ2VuZXJhbC5jc3MnO1xuXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi8uLi9tb2R1bGUvZm9ybS12YWxpZGF0aW9uL2Zvcm0tdmFsaWRhdG9yJztcbmltcG9ydCBFbWFpbFZhbGlkYXRvciBmcm9tICcuLi8uLi9tb2R1bGUvZm9ybS12YWxpZGF0aW9uL2VtYWlsLXZhbGlkYXRvcic7XG5pbXBvcnQgUGFzc3dvcmRWYWxpZGF0b3IgZnJvbSAnLi4vLi4vbW9kdWxlL2Zvcm0tdmFsaWRhdGlvbi9wYXNzd29yZC12YWxpZGF0b3InO1xuaW1wb3J0IE5hbWVWYWxpZGF0b3IgZnJvbSAnLi4vLi4vbW9kdWxlL2Zvcm0tdmFsaWRhdGlvbi9uYW1lLXZhbGlkYXRvcic7XG5cbmltcG9ydCBpbmRleERCIGZyb20gJy4uLy4uL21vZHVsZS9pbmRleERCL2luZGV4REInO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ291dHB1dC5zaG93LW1lc3NhZ2UnKTtcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5jb25zdCBzaWduVXBTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1zaWdudXAtc3RhdHVzJyk7XG5cbmNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2lnbi11cCcpO1xuXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuY29uc3QgcGFzc3dvcmRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLW1lc3NhZ2UnKTtcblxuY29uc3QgY29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tcGFzc3dvcmQnKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1wYXNzd29yZC1tZXNzYWdlJyk7XG5cbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5jb25zdCBlbWFpbE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwtbWVzc2FnZScpO1xuXG5jb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3QtbmFtZScpO1xuY29uc3QgZmlyc3ROYW1lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdC1uYW1lLW1lc3NhZ2UnKTtcblxuY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdC1uYW1lJyk7XG5jb25zdCBsYXN0TmFtZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdC1uYW1lLW1lc3NhZ2UnKTtcblxuY29uc3QgYWRtaW5EYXNoYm9hcmRSZWZlcmVuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5hZG1pbkRhc2hib2FyZFJlZmVyZW5jZS5ocmVmID0gJy4vYWRtaW4tZGFzaGJvYXJkLmh0bWwnO1xuXG5uZXcgUGFzc3dvcmRWYWxpZGF0b3Ioe1xuICBwYXNzd29yZCxcbiAgcGFzc3dvcmRNZXNzYWdlLFxuICBjb25maXJtUGFzc3dvcmQsXG4gIGNvbmZpcm1QYXNzd29yZE1lc3NhZ2UsXG59KTtcblxubmV3IEVtYWlsVmFsaWRhdG9yKHsgZW1haWwsIGVtYWlsTWVzc2FnZSB9KTtcblxubmV3IE5hbWVWYWxpZGF0b3IoeyBuYW1lOiBmaXJzdE5hbWUsIG5hbWVNZXNzYWdlOiBmaXJzdE5hbWVNZXNzYWdlIH0pO1xuXG5uZXcgTmFtZVZhbGlkYXRvcih7IG5hbWU6IGxhc3ROYW1lLCBuYW1lTWVzc2FnZTogbGFzdE5hbWVNZXNzYWdlIH0pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVVzZXJuYW1lKCkge1xuICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMTtcbiAgY29uc3QgYWx0ZXJGaXJzdE5hbWUgPSBmaXJzdE5hbWUudmFsdWUuc2xpY2UoMCwgMyk7XG4gIGNvbnN0IGFsdGVyTGFzdE5hbWUgPSBsYXN0TmFtZS52YWx1ZS5zbGljZSgwLCA1KTtcbiAgY29uc3QgdXNlcm5hbWUgPSBgJHthbHRlckZpcnN0TmFtZX1fJHthbHRlckxhc3ROYW1lfSR7cmFuZG9tTnVtYmVyfWA7XG5cbiAgcmV0dXJuIHVzZXJuYW1lO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2lnblVwU3RhdHVzKCkge1xuICBzaWduVXBTdGF0dXMudGV4dENvbnRlbnQgPSAnU3VibWl0dGluZyBkYXRhLi4uJztcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICBmaXJzdE5hbWUudmFsdWUgPSAnJztcbiAgbGFzdE5hbWUudmFsdWUgPSAnJztcbiAgZW1haWwudmFsdWUgPSAnJztcbiAgcGFzc3dvcmQudmFsdWUgPSAnJztcbiAgY29uZmlybVBhc3N3b3JkLnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGdldEFkbWluRGF0YUZyb21Gb3JtKCkge1xuICBjb25zdCB1c2VybmFtZSA9IGdlbmVyYXRlVXNlcm5hbWUoKTtcblxuICBjb25zdCBhZG1pbkRhdGEgPSB7XG4gICAgaWQ6ICdhZG1pbicsXG4gICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUudmFsdWUsXG4gICAgbGFzdE5hbWU6IGxhc3ROYW1lLnZhbHVlLFxuICAgIGVtYWlsOiBlbWFpbC52YWx1ZSxcbiAgICBwYXNzd29yZDogcGFzc3dvcmQudmFsdWUsXG4gICAgY29uZmlybVBhc3N3b3JkOiBjb25maXJtUGFzc3dvcmQudmFsdWUsXG4gICAgdXNlcm5hbWUsXG4gIH07XG4gIHJldHVybiBhZG1pbkRhdGE7XG59XG5cbmZ1bmN0aW9uIGFkbWluRGF0YUlzU3RvcmVkKCkge1xuICAvLyBSZW1vdmUgdGhlIHF1aWNrIHJlcGxhY2Ugb2YgcmVkIGJvcmRlciB3aGVuIGlucHV0IGlzIGVtcHR5XG4gIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LnN0eWxlID0gJ2JvcmRlci1jb2xvcjogdmFyKC0tY2xyLXZhbGlkKSc7XG4gIH0pO1xuICBcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYWRtaW5EYXNoYm9hcmRSZWZlcmVuY2UuY2xpY2soKTtcbiAgfSwgMjAwMCk7XG5cbiAgc2V0VGltZW91dCgoKT0+e1xuICAgIGNsZWFyRm9ybSgpXG4gIH0sIDIwNTApXG59XG5cbmZ1bmN0aW9uIGFkbWluRGF0YU5vdFN0b3JlZCgpIHtcbiAgYWxlcnQoJ0FkbWluIGRhdGEgbm90IHN0b3JlZCcpO1xufVxuXG5mdW5jdGlvbiBydW5XaGVuQWxsRm9ybUlzVmFsaWQoKSB7XG4gIGluZGV4REIuY3JlYXRlRGF0YWJhc2UoKTtcblxuICBpbmRleERCLmNyZWF0ZU9iamVjdFN0b3JlKHsgc3RvcmVOYW1lOiAnYWRtaW4tZGF0YScsIGtleVBhdGg6ICdpZCcgfSk7XG5cbiAgY29uc3QgYWRtaW5EYXRhID0gZ2V0QWRtaW5EYXRhRnJvbUZvcm0oKTtcblxuICBkaXNwbGF5U2lnblVwU3RhdHVzKCk7XG5cbiAgaW5kZXhEQi5zdG9yZURhdGEoe1xuICAgIHN0b3JlTmFtZTogJ2FkbWluLWRhdGEnLFxuICAgIGRhdGE6IGFkbWluRGF0YSxcbiAgICBydW5TdWNjZXNzU3RhdHVzOiBhZG1pbkRhdGFJc1N0b3JlZCxcbiAgICBydW5FcnJvclN0YXR1czogYWRtaW5EYXRhTm90U3RvcmVkLFxuICB9KTtcbn1cblxubmV3IEZvcm1WYWxpZGF0b3Ioe1xuICBidXR0b25TdWJtaXQ6IGJ0blN1Ym1pdCxcbiAgbWVzc2FnZXMsXG4gIGlucHV0cyxcbiAgcnVuV2hlbkFsbEZvcm1Jc1ZhbGlkLFxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=