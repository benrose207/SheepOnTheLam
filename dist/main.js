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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fence.js":
/*!**********************!*\
  !*** ./src/fence.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FenceBox {\n    constructor(ctx, x, y, width, height) {\n        this.ctx = ctx;\n        this.pos = [x, y];\n        this.width = width;\n        this.height = height;\n    }\n\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);\n        this.ctx.fillStyle = \"rgb(110, 86, 48)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FenceBox);\n\n//# sourceURL=webpack:///./src/fence.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep */ \"./src/sheep.js\");\n/* harmony import */ var _fence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fence */ \"./src/fence.js\");\n\n\n\nconst gameConstants = {\n    NUM_SHEEP: 10\n}\n\nclass Game {\n    constructor(ctx) {\n        this.numSheep = gameConstants.NUM_SHEEP;\n        this.sheep = [];\n        this.fences = [];\n        this.ctx = ctx;\n        this.addFences();\n        this.addSheep();\n    }\n\n    addSheep() {\n        for (let i = 0; i < this.numSheep; i++) {\n            const newSheep = new _sheep__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n            this.sheep.push(newSheep);\n        }\n    }\n\n    addFences() {\n        const fenceTop = new _fence__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, 100, 0, 10, 225);\n        const fenceBottom = new _fence__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, 100, 350, 10, 225);\n        const fenceBack = new _fence__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, -100, 0, 10, 550);\n        this.fences.push(fenceTop, fenceBottom, fenceBack);\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        this.ctx.fillStyle = \"rgb(149, 223, 114)\";\n        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        this.sheep.forEach(sheep => sheep.draw(this.ctx));\n\n        this.fences.forEach(fence => fence.draw());\n    }\n\n    moveObjects() {\n        this.sheep.forEach(sheep => sheep.move());\n    }\n\n    checkCollision() {\n        for (let i = 0; i < this.sheep.length - 1; i++) {\n            const currentObj = this.sheep[i];\n            for (let j = i + 1; j < this.sheep.length; j++) {\n                const compareObj = this.sheep[j];\n\n                if (currentObj.isCollidedWith(compareObj)) {\n                }\n            }\n            \n            for (let k = 0; k < this.fences.length; k++) {\n                const stationaryObj = this.fences[k];\n                const { collided, direction } = currentObj.isCollidedWith(stationaryObj);\n                if (collided) {\n                    if (direction === \"x\") currentObj.vel[0] = -currentObj.vel[0];\n                    if (direction === \"y\") currentObj.vel[1] = -currentObj.vel[1];\n                }\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n        // this.game.draw(this.ctx);\n    }\n\n    start() {\n        setInterval(() => {\n            this.game.moveObjects();\n            this.game.checkCollision();\n            this.game.draw(this.ctx);\n        }, 20);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 550;\n    canvas.width = 900;\n\n    const ctx = canvas.getContext('2d');\n    ctx.fillStyle = \"rgb(149, 223, 114)\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    gameView.start();\n\n    //testing\n\n    // window.MovingObject = MovingObject;\n    // window.Sheep = Sheep;\n    // window.ctx = ctx;\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep */ \"./src/sheep.js\");\n\n\nclass MovingObject {\n    constructor(ctx) {\n        this.ctx = ctx;\n        // this.vel = [-0.25, -0.25];\n        this.radius = 10;\n\n        const xPos = Math.random() * (this.ctx.canvas.width - this.radius * 2) + this.radius\n        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius\n        this.pos = [xPos, yPos];\n\n        this.color = \"rgb(255, 255, 255)\";\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n\n        ctx.arc(\n            this.pos[0],\n            this.pos[1],\n            this.radius,\n            0,\n            2 * Math.PI,\n            false\n        );\n\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    }\n\n    move() {\n        if (this.pos[0] + this.radius > this.ctx.canvas.width) {\n            this.vel[0] = -this.vel[0];\n        }\n\n        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {\n            this.vel[1] = - this.vel[1];\n        }\n\n        this.pos[0] += this.vel[0]\n        this.pos[1] += this.vel[1];\n    }\n\n    isCollidedWith(otherObject) {\n        if (otherObject instanceof _sheep__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            return this.collideCircles(otherObject);\n        } else {\n            return this.collideCircleRectangle(otherObject);\n        }\n    }\n\n    collideCircles(otherObject) {\n        let radiiSum = this.radius + otherObject.radius;\n        let distanceBtwn = Math.sqrt(\n            (this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2\n        );\n\n        return distanceBtwn < radiiSum + 5;\n    }\n\n    collideCircleRectangle(otherObject) {\n        let testX = this.pos[0];\n        let testY = this.pos[1];\n        const rx = otherObject.pos[0]\n        const ry = otherObject.pos[1]\n        let collisionDirection = \"x\";\n\n        if (testX < rx) testX = rx;\n        if (testX > rx + otherObject.width) testX = rx + otherObject.width;\n\n        if (testY < ry) {\n            testY = ry;\n            collisionDirection = \"y\";\n        }\n        if (testY > ry + otherObject.height) {\n            testY = ry + otherObject.height;\n            collisionDirection = \"y\";\n        }\n\n        const distX = this.pos[0] - testX;\n        const distY = this.pos[1] - testY;\n        const distance = Math.sqrt((distX * distX) + (distY * distY)) - 5;\n\n        return { collided: distance <= this.radius, direction: collisionDirection }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/sheep.js":
/*!**********************!*\
  !*** ./src/sheep.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst constants = {\n    COLOR: \"rgb(255, 255, 255)\",\n    RADIUS: 10\n}\n\nclass Sheep extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(pos) {\n        super(pos);\n        this.vel = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"randomVec\"])(0.25);\n        this.color = constants.COLOR;\n        this.radius = constants.RADIUS;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sheep);\n\n//# sourceURL=webpack:///./src/sheep.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: randomVec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomVec\", function() { return randomVec; });\nconst randomVec = (length) => {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\nconst scale = (vec, m) => {\n    return [vec[0] * m, vec[1] * m];\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });