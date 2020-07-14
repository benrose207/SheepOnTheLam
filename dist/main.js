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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep */ \"./src/sheep.js\");\n/* harmony import */ var _sheepdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheepdog */ \"./src/sheepdog.js\");\n/* harmony import */ var _fence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fence */ \"./src/fence.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\nconst gameConstants = {\n    NUM_SHEEP: 10\n}\n\nclass Game {\n    constructor(ctx) {\n        this.numSheep = gameConstants.NUM_SHEEP;\n        this.sheep = [];\n        this.fences = [];\n        this.ctx = ctx;\n        this.addFences();\n        this.addSheep();\n        this.addSheepDog();\n    }\n\n    addSheep() {\n        for (let i = 0; i < this.numSheep; i++) {\n            let newSheep = new _sheep__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n            for (let j = 1; j < this.sheep.length; j++) {\n                if (Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"isCollidedWith\"])(newSheep, this.sheep[j])) {\n                    newSheep = new _sheep__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n                    j = 0;\n                }\n            }\n            this.sheep.push(newSheep);\n        }\n    }\n\n    addSheepDog() {\n        let sheepDog = new _sheepdog__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n        for (let i = 0; i < this.sheep.length; i++) {\n            if (Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"isCollidedWith\"])(sheepDog, this.sheep[i])) {\n                sheepDog = new _sheepdog__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n                i = 0;\n            }\n        }\n\n        this.sheepDog = sheepDog;\n    }\n\n    addFences() {\n        const fenceTop = new _fence__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, 100, 0, 10, 225);\n        const fenceBottom = new _fence__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, 100, 350, 10, 225);\n        const fenceBack = new _fence__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, -100, 0, 10, 550);\n        this.fences.push(fenceTop, fenceBottom, fenceBack);\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        this.ctx.fillStyle = \"rgb(149, 223, 114)\";\n        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        this.sheep.forEach(sheep => sheep.draw(this.ctx));\n\n        this.fences.forEach(fence => fence.draw());\n        this.sheepDog.draw();\n    }\n\n    moveObjects() {\n        this.sheep.forEach(sheep => sheep.move());\n        this.sheepDog.move();\n    }\n\n    checkCollision() {\n        for (let i = 0; i < this.sheep.length; i++) {\n            const currentObj = this.sheep[i];\n            for (let j = i + 1; j < this.sheep.length; j++) { // could this be refactor to include all moving objects (i.e. sheepdog?)\n                const compareObj = this.sheep[j];\n\n                if (Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"isCollidedWith\"])(currentObj, compareObj)) {\n                    Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"resolveCollision\"])(currentObj, compareObj);\n                    compareObj.collideWithSheep(currentObj);\n                }\n            }\n\n            if (Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"isCollidedWith\"])(currentObj, this.sheepDog)) {\n                Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"resolveCollision\"])(currentObj, this.sheepDog);\n            }\n            \n            for (let k = 0; k < this.fences.length; k++) {\n                const stationaryObj = this.fences[k];\n                const { collided, direction } = Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"isCollidedWith\"])(currentObj, stationaryObj);\n                if (collided) {\n                    if (direction === \"left\" || direction === \"right\") currentObj.vel[0] = -currentObj.vel[0];\n                    if (direction === \"top\" || direction === \"bottom\") currentObj.vel[1] = -currentObj.vel[1];\n                }\n            }\n        }\n\n        for (let l = 0; l < this.fences.length; l++) {\n            const stationaryObj = this.fences[l];\n            const { collided, direction } = Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"isCollidedWith\"])(this.sheepDog, stationaryObj);\n            if (collided) {\n                if (direction === \"left\") this.sheepDog.pos[0] -= 3;\n                if (direction === \"right\") this.sheepDog.pos[0] += 3;\n                if (direction === \"top\") this.sheepDog.pos[1] -= 3;\n                if (direction === \"bottom\") this.sheepDog.pos[1] += 3;\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n    }\n\n    start() {\n        this.bindKeyboardHandlers();\n\n        setInterval(() => {\n            this.game.moveObjects();\n            this.game.checkCollision();\n            this.game.draw(this.ctx);\n        }, 20);\n    }\n\n    bindKeyboardHandlers() {\n        const sheepDog = this.game.sheepDog;\n        const keyDownHandler = sheepDog.keyDownHandler.bind(sheepDog);\n        const keyUpHandler = sheepDog.keyUpHandler.bind(sheepDog);\n\n        document.addEventListener('keydown', keyDownHandler);\n        document.addEventListener('keyup', keyUpHandler);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

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

/***/ "./src/sheep.js":
/*!**********************!*\
  !*** ./src/sheep.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nconst constants = {\n    COLOR: \"rgb(255, 255, 255)\",\n    RADIUS: 10\n}\n\nclass Sheep {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.radius = constants.RADIUS;\n\n        const xPos = Math.random() * ((this.ctx.canvas.width - this.radius * 2) - 130) + 130;\n        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius\n        this.pos = [xPos, yPos];\n        this.vel = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"randomVec\"])(0.25);\n        this.friction = 0.02;\n\n        this.color = constants.COLOR;\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n\n        ctx.arc(\n            this.pos[0],\n            this.pos[1],\n            this.radius,\n            0,\n            2 * Math.PI,\n            false\n        );\n\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    }\n\n    move() {\n        if (this.pos[0] + this.radius > this.ctx.canvas.width) {\n            this.vel[0] = -this.vel[0];\n        }\n\n        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {\n            this.vel[1] = - this.vel[1];\n        }\n\n        if (Math.abs(this.vel[0]) > 0.25 || Math.abs(this.vel[1]) > 0.25) {\n            if (this.vel[0] > 0) this.vel[0] -= this.friction;\n            if (this.vel[0] < 0) this.vel[0] += this.friction;\n\n            if (this.vel[1] > 0) this.vel[1] -= this.friction;\n            if (this.vel[1] < 0) this.vel[1] += this.friction;\n        }\n\n        this.pos[0] += this.vel[0]\n        this.pos[1] += this.vel[1];\n    }\n\n    collideWithSheep(otherSheep) {\n        this.vel[0] = 0;\n        this.vel[1] = 0;\n\n        let timeoutID = window.setTimeout(() => {\n            this.vel[0] = otherSheep.vel[0];\n            this.vel[1] = otherSheep.vel[1];\n\n        }, 500)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sheep);\n\n//# sourceURL=webpack:///./src/sheep.js?");

/***/ }),

/***/ "./src/sheepdog.js":
/*!*************************!*\
  !*** ./src/sheepdog.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\n    COLOR: \"rgb(46, 46, 46)\",\n    RADIUS: 10\n}\n\nclass SheepDog {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.radius = constants.RADIUS;\n        this.color = constants.COLOR\n\n        const xPos = Math.random() * ((this.ctx.canvas.width - this.radius * 2) - 130) + 130;\n        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius\n        this.pos = [xPos, yPos];\n        this.vel = [0, 0];\n\n        this.rightKey = false;\n        this.leftKey = false;\n        this.upKey = false;\n        this.downKey = false;\n    }\n\n    move() {\n        if (!this.rightKey && !this.leftKey) this.vel[0] = 0;\n\n        if (this.pos[0] + this.radius <= this.ctx.canvas.width) {\n            if (this.rightKey) {\n                this.pos[0] += 3;\n                this.vel[0] = 2;\n            }\n        }\n\n        if (this.leftKey) {\n            this.pos[0] -= 3;\n            this.vel[0] = -2;\n        }\n\n        if (!this.upKey && !this.downKey) this.vel[1] = 0;\n\n        if (this.pos[1] + this.radius <= this.ctx.canvas.height) {\n            if (this.downKey) {\n                this.pos[1] += 3;\n                this.vel[1] = 2;\n            }\n        }\n        \n        if (this.pos[1] - this.radius >= 0) {\n            if (this.upKey) {\n                this.pos[1] -= 3;\n                this.vel[1] = -2;\n            }\n        }\n    }\n\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.arc(\n            this.pos[0],\n            this.pos[1],\n            this.radius,\n            0,\n            2 * Math.PI,\n            false\n        );\n\n        this.ctx.fillStyle = this.color;\n        this.ctx.fill();\n    }\n\n    keyDownHandler(e) {\n        if (e.keyCode === 39) {\n            this.rightKey = true;\n        } else if (e.keyCode === 37) {\n            this.leftKey = true;\n        }\n\n        if (e.keyCode === 40) {\n            this.downKey = true;\n        } else if (e.keyCode === 38) {\n            this.upKey = true;\n        }\n    }\n\n    keyUpHandler(e) {\n        if (e.keyCode === 39) {\n            this.rightKey = false;\n        } else if (e.keyCode === 37) {\n            this.leftKey = false;\n        }\n\n        if (e.keyCode === 40) {\n            this.downKey = false;\n        } else if (e.keyCode === 38) {\n            this.upKey = false;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SheepDog);\n\n//# sourceURL=webpack:///./src/sheepdog.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: randomVec, isCollidedWith, resolveCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomVec\", function() { return randomVec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCollidedWith\", function() { return isCollidedWith; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveCollision\", function() { return resolveCollision; });\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep */ \"./src/sheep.js\");\n/* harmony import */ var _sheepdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheepdog */ \"./src/sheepdog.js\");\n\n\n\nconst randomVec = (length) => {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\nconst scale = (vec, m) => {\n    return [vec[0] * m, vec[1] * m];\n}\n\nconst isCollidedWith = (object1, otherObject) => {\n    if (otherObject instanceof _sheep__WEBPACK_IMPORTED_MODULE_0__[\"default\"] || otherObject instanceof _sheepdog__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        return collideCircles(object1, otherObject);\n    } else {\n        return collideCircleRectangle(object1, otherObject);\n    }\n}\n\nconst collideCircles = (object1, otherObject) => {\n    let radiiSum = object1.radius + otherObject.radius;\n    let distanceBtwn = Math.sqrt(\n        (object1.pos[0] - otherObject.pos[0]) ** 2 + (object1.pos[1] - otherObject.pos[1]) ** 2\n    );\n    \n    if (otherObject instanceof _sheepdog__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) return distanceBtwn < radiiSum + 30;\n    return distanceBtwn < radiiSum + 8;\n}\n\nconst collideCircleRectangle = (object1, otherObject) => {\n    let testX = object1.pos[0];\n    let testY = object1.pos[1];\n    const rx = otherObject.pos[0]\n    const ry = otherObject.pos[1]\n    let collisionDirection;\n\n    if (testX < rx) {\n        testX = rx;\n        collisionDirection = \"left\";\n    }\n    if (testX > rx + otherObject.width) {\n        testX = rx + otherObject.width;\n        collisionDirection = \"right\";\n    }\n\n    if (testY < ry) {\n        testY = ry;\n        collisionDirection = \"top\";\n    }\n    if (testY > ry + otherObject.height) {\n        testY = ry + otherObject.height;\n        collisionDirection = \"bottom\";\n    }\n\n    const distX = object1.pos[0] - testX;\n    const distY = object1.pos[1] - testY;\n    const distance = Math.sqrt((distX * distX) + (distY * distY)) - 5;\n\n    return { collided: distance <= object1.radius, direction: collisionDirection }\n}\n\nconst rotateVelocities = (velocity, angle) => {\n    const rotatedVelocities = {\n        x: velocity[0] * Math.cos(angle) - velocity[1] * Math.sin(angle),\n        y: velocity[0] * Math.sin(angle) + velocity[1] * Math.cos(angle)\n    }\n\n    return rotatedVelocities;\n}\n\nconst resolveCollision = (obj1, obj2) => {\n    const xVelocityDiff = obj1.vel[0] - obj2.vel[0];\n    const yVelocityDiff = obj1.vel[1] - obj2.vel[1];\n\n    const xDist = obj2.pos[0] - obj1.pos[0];\n    const yDist = obj2.pos[1] - obj1.pos[1];\n\n    if ((xVelocityDiff * xDist + yVelocityDiff * yDist) >= 0) {\n        const angle = -Math.atan2(obj2.pos[1] - obj1.pos[1], obj2.pos[0] - obj1.pos[0]);\n\n        const m1 = 1;\n        const m2 = 1;\n\n        const u1 = rotateVelocities(obj1.vel, angle);\n        const u2 = rotateVelocities(obj2.vel, angle);\n\n        const v1 = [(u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2)), u1.y]\n        const v2 = [(u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2)), u2.y]\n\n        const finalV1 = rotateVelocities(v1, -angle);\n        const finalV2 = rotateVelocities(v2, -angle);\n\n        obj1.vel[0] = finalV1.x;\n        obj1.vel[1] = finalV1.y;\n        // obj2.vel[0] = finalV2.x;\n        // obj2.vel[1] = finalV2.y;\n    }\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });