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
eval("__webpack_require__.r(__webpack_exports__);\nclass FenceBox {\n    constructor(ctx, x, y, width, height) {\n        this.ctx = ctx;\n        this.pos = [x, y];\n        this.width = width;\n        this.height = height;\n    }\n\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0] + 5, this.pos[1], 8, this.height);\n        this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.rect(this.pos[0] + 22, this.pos[1], 8, this.height);\n        this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        let offset = 20;\n        for (let i = 0; i < 6; i++) {\n            this.ctx.beginPath();\n            this.ctx.rect(this.pos[0], this.pos[1] + offset, this.width, 5);\n            this.ctx.fillStyle = \"rgb(125, 106, 62)\";\n            this.ctx.fill();\n            this.ctx.closePath();\n\n            offset += (this.height / 6);\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FenceBox);\n\n//# sourceURL=webpack:///./src/fence.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep */ \"./src/sheep.js\");\n/* harmony import */ var _sheepdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheepdog */ \"./src/sheepdog.js\");\n/* harmony import */ var _fence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fence */ \"./src/fence.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n/* harmony import */ var _hay_bales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hay_bales */ \"./src/hay_bales.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\n\n\nconst levelData = {\n    1: {\n        numSheep: 1,\n        sheepSpeed: 0.25,\n        timeRemaining: \"1:30\",\n        numHayBales: 0\n    },\n    2: {\n        numSheep: 1,\n        sheepSpeed: 0.6,\n        timeRemaining: \"2:00\",\n        numHayBales: 0\n    },\n    3: {\n        numSheep: 10,\n        sheepSpeed: 0.5,\n        timeRemaining: \"2:00\",\n        numHayBales: 5\n    }\n}\n\nclass Game {\n    constructor(ctx, levelNum) {\n        this.currentLevel = levelData[levelNum];\n        this.numSheep = this.currentLevel.numSheep;\n        this.sheep = [];\n        this.stationaryObjects = [];\n        this.ctx = ctx;\n        this.addFences();\n        this.addTimer();\n        this.addHayBales(this.currentLevel.numHayBales);\n        this.addSheep();\n        this.addSheepDog();\n    }\n\n    ensureNewObjectPosition(newObject) {\n        const objects = this.allObjects();\n        for (let i = 0; i < objects.length; i++) {\n            const collided = Object(_util__WEBPACK_IMPORTED_MODULE_5__[\"isCollidedWith\"])(newObject, objects[i]);\n            if (collided === true || collided.collided === true) {\n                newObject.pos = newObject.generateRandomPosition();\n                i = 0;\n            }\n        }\n    }\n    \n    addSheep() {\n        let sheepImg = new Image();\n        sheepImg.src = \"assets/images/sheep_walking.png\";\n\n        for (let i = 0; i < this.numSheep; i++) {\n            let newSheep = new _sheep__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, sheepImg, this.currentLevel.sheepSpeed);\n            this.ensureNewObjectPosition(newSheep);\n            this.sheep.push(newSheep);\n        }\n    }\n\n    addSheepDog() {\n        let img = new Image();\n        img.src = \"assets/images/sheepdog.png\";\n        \n        let sheepDog = new _sheepdog__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, img);\n        this.ensureNewObjectPosition(sheepDog);\n        this.sheepDog = sheepDog;\n    }\n\n    addFences() {\n        const fenceTop = new _fence__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, 100, 0, 36, 225);\n        const fenceBottom = new _fence__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, 100, 350, 36, 225);\n        const fenceBack = new _fence__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, -100, 0, 36, 550);\n        this.stationaryObjects.push(fenceTop, fenceBottom, fenceBack);\n    }\n\n    addHayBales(numBales) {\n        for (let i = 0; i < numBales; i++) {\n            let hayBale = new _hay_bales__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.ctx);\n            this.ensureNewObjectPosition(hayBale);\n            this.stationaryObjects.push(hayBale);\n        }\n    }\n    \n    addTimer() {\n        this.timer = new _timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx, this.currentLevel.timeRemaining);\n        this.stationaryObjects.push(this.timer);\n        this.timer.countdown();\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n        this.ctx.fillStyle = \"rgb(126, 200, 80)\";\n        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n\n        // Add objects to canvas\n        this.stationaryObjects.forEach(object => object.draw());\n        this.sheep.forEach(sheep => sheep.draw());\n        this.sheepDog.draw();\n\n        // Sheep remaining counter\n        this.ctx.font = \"19px Roboto\";\n        this.ctx.fillStyle = \"white\";\n        this.ctx.fillText(\"Sheep\", 25, 30);\n\n        this.ctx.font = \"19px Roboto\";\n        this.ctx.fillStyle = \"white\";\n        this.ctx.fillText(\"Remaining\", 5, 55);\n\n        this.ctx.font = '80px Modak';\n        this.ctx.fillStyle = \"white\"\n        this.ctx.strokeStyle = \"rgb(90, 90, 90)\";\n        const sheepLeft = this.sheepRemaining();\n        const countXPos = sheepLeft < 10 ? 30 : 15;\n        this.ctx.fillText(`${sheepLeft}`, countXPos, 120);\n        this.ctx.strokeText(`${sheepLeft}`, countXPos, 120);\n    }\n\n    moveObjects() {\n        this.sheep.forEach(sheep => sheep.move());\n        this.sheepDog.move();\n    }\n\n    allMovingObjects() {\n        return this.sheep.concat(this.sheepDog);\n    }\n\n    allObjects() {\n        const objects = this.sheep.concat(this.stationaryObjects);\n        if (this.sheepDog) objects.push(this.sheepDog);\n        return objects;\n    }\n\n    checkCollision() {\n        const movingObjects = this.allMovingObjects();\n\n        for (let i = 0; i < this.sheep.length; i++) { // Checks whether any sheep has collided with something\n            const sheep = this.sheep[i];\n            for (let j = i + 1; j < movingObjects.length; j++) { // Checking against other moving objects\n                const compareObj = movingObjects[j];\n\n                if (Object(_util__WEBPACK_IMPORTED_MODULE_5__[\"isCollidedWith\"])(sheep, compareObj)) {\n                    Object(_util__WEBPACK_IMPORTED_MODULE_5__[\"resolveCollision\"])(sheep, compareObj); // resets colliding sheep's velocity \n                    compareObj.collideWithSheep(sheep); // handles reaction of other object\n                }\n            }\n            this.checkSheepObstacleCollisions(sheep);\n        }\n        this.checkSheepdogObstacleCollisions();\n    }\n\n    checkSheepObstacleCollisions(sheep) {\n        for (let i = 0; i < this.stationaryObjects.length; i++) {\n            const stationaryObj = this.stationaryObjects[i];\n            const { collided, direction } = Object(_util__WEBPACK_IMPORTED_MODULE_5__[\"isCollidedWith\"])(sheep, stationaryObj);\n            if (collided) sheep.collideWithObstacle(direction);\n        }\n    }\n\n    checkSheepdogObstacleCollisions() {\n        for (let i = 0; i < this.stationaryObjects.length; i++) {\n            const stationaryObj = this.stationaryObjects[i];\n            const { collided, direction } = Object(_util__WEBPACK_IMPORTED_MODULE_5__[\"isCollidedWith\"])(this.sheepDog, stationaryObj);\n            if (collided) this.sheepDog.collideWithObstacle(direction);\n        }\n    }\n    \n    sheepRemaining() {\n        let count = 0;\n        \n        this.sheep.forEach(sheep => {\n            if (sheep.pos[0] > 85) count += 1;\n        })\n        \n        return count;\n    }\n    \n    won() {   \n        return this.sheepRemaining() === 0;\n    }\n\n    lost() {\n        return this.timer.timeRemaining === \"0:00\";\n    }\n\n    gameOver() {\n        return this.won() || this.lost();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.round = 1;\n        this.gameMenu = document.getElementById(\"start-menu\");\n        this.startButton = document.querySelector(\".start-button\");\n        this.menuTitle = document.querySelector(\".menu-title\");\n        this.menuText = document.querySelector(\".menu-text\");\n        this.inProgress = false;\n\n        this.bindMenuHandlers();\n    }\n    \n    start() {\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.round);\n        this.inProgress = true;\n        this.bindGameHandlers();\n        this.gameLoop();\n    }\n\n    gameLoop() {\n        this.game.moveObjects();\n        this.game.checkCollision();\n        this.game.draw(this.ctx);\n\n        if (this.roundOver()) {\n            this.gameMenu.classList.toggle(\"hide\");\n            this.inProgress = false;\n        } else {\n            this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));\n        }\n    }\n\n    roundOver() {\n        if (this.game.won()) {\n            window.cancelAnimationFrame(this.animationRequestId);\n            this.round += 1;\n\n            this.menuTitle.innerHTML = \"Great Job!\";\n            this.startButton.innerHTML = \"Start\";\n\n            if (this.round === 2) {\n                this.menuText.innerHTML = \"It was good while it lasted, but somehow the sheep are out again! This time even more have escaped.\";\n            } else if (this.round === 3) {\n                this.menuText.innerHTML = \"You're becoming an expert! But can you navigate the hay bales to get sheep back in time again?\"\n            }\n\n            return true;\n        } else if (this.game.lost()) {\n            window.cancelAnimationFrame(this.animationRequestId);\n            this.menuTitle.innerHTML = \"Not Quite!\";\n            this.menuText.innerHTML = \"Better luck next time! Give it another shot and hone those herding skills.\"\n            this.startButton.innerHTML = \"Play Again\";\n\n            this.round = 1;\n            return true;\n        }\n\n        return false;\n    }\n\n    bindMenuHandlers() {\n        const startGame = () => {\n            this.gameMenu.classList.toggle(\"hide\");\n            this.start();\n        }\n\n        this.startButton.addEventListener(\"click\", () => {\n            if (!this.inProgress) startGame();\n        });\n\n        window.addEventListener(\"keydown\", (e) => {\n            if (e.keyCode === 13 && !this.inProgress) startGame();\n        });\n    }\n\n    bindGameHandlers() {\n        const sheepDog = this.game.sheepDog;\n        const keyDownHandler = sheepDog.keyDownHandler.bind(sheepDog);\n        const keyUpHandler = sheepDog.keyUpHandler.bind(sheepDog);\n\n        document.addEventListener('keydown', keyDownHandler);\n        document.addEventListener('keyup', keyUpHandler);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/hay_bales.js":
/*!**************************!*\
  !*** ./src/hay_bales.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass HayBale {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.radius = 30;\n        this.height = 60;\n        this.width = 60;\n        this.pos = this.generateRandomPosition();\n    }\n\n    generateRandomPosition() {\n        const xPos = Math.random() * (this.ctx.canvas.width - this.radius * 2 - 175) + 175;\n        const yPos = Math.random() * (this.ctx.canvas.height - this.height * 2) + this.radius;\n        return [xPos, yPos];\n    }\n\n    draw() {\n        const adjustedX = this.pos[0] + this.radius;\n        const adjustedY = this.pos[1] + this.radius;\n\n        this.ctx.beginPath();\n        this.ctx.arc(adjustedX, adjustedY, this.radius, 0, 2 * Math.PI);\n        this.ctx.fillStyle = \"rgb(224, 197, 121)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n\n        // draw inner circles\n        for (let i = 1; i < 4; i++) {\n            this.ctx.beginPath();\n            this.ctx.arc(adjustedX, adjustedY, this.radius - (8 * i), 0, 2 * Math.PI);\n            this.ctx.strokeStyle = \"rgb(201, 177, 109)\";\n            this.ctx.stroke();\n            this.ctx.closePath();\n        }\n\n        for (let i = 0; i < 4; i++) {\n            this.drawGrass((this.pos[0] + 20) + (i * 10), this.pos[1] + this.height)\n        }\n    }\n\n    drawGrass(startX, startY) { // seems too laggy to do it this way. Maybe using image in background would be better. Consider just doing this around objects.\n        let radius = 10;\n        let startAngle = 3;\n        let endAngle = 4;\n\n        this.ctx.beginPath();\n        this.ctx.arc(startX, startY, radius, startAngle, endAngle);\n        this.ctx.strokeStyle = \"green\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.arc(startX, startY, radius / 2, startAngle, endAngle);\n        this.ctx.strokeStyle = \"green\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.arc(startX - 15, startY, radius - 2, 0, 5, true);\n        this.ctx.strokeStyle = \"green\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n\n        this.ctx.beginPath();\n        this.ctx.arc(startX - 10, startY, radius, 0, 5, true);\n        this.ctx.strokeStyle = \"green\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HayBale);\n\n//# sourceURL=webpack:///./src/hay_bales.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 550;\n    canvas.width = 900;\n    \n    const ctx = canvas.getContext('2d');\n    ctx.fillStyle = \"rgb(126, 200, 80)\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sheep.js":
/*!**********************!*\
  !*** ./src/sheep.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nconst constants = {\n    COLOR: \"rgb(255, 255, 255)\",\n    RADIUS: 32,\n}\n\nclass Sheep {\n    constructor(ctx, img, speed) {\n        this.ctx = ctx;\n        this.radius = constants.RADIUS;\n        this.speed = speed\n\n        this.pos = this.generateRandomPosition();\n        this.vel = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"randomVec\"])(this.speed);\n        this.friction = 0.02;\n\n        this.img = img;\n        this.scale = 0.3;\n        this.frameWidth = 160;\n        this.frameHeight = 124;\n        this.scaledWidth = this.scale * this.frameWidth;\n        this.scaledHeight = this.scale * this.frameHeight;\n        this.numCols = 3;\n        this.currentLoop = 0;\n        this.currentRow = 0;\n        this.frameCount = 0;\n    }\n\n    generateRandomPosition() {\n        const xPos = Math.random() * (this.ctx.canvas.width - this.radius * 2 - 175) + 175;\n        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius;\n        return [xPos, yPos];\n    }\n\n    draw() {\n        // Testing\n        // this.ctx.beginPath();\n        // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n        // this.ctx.strokeStyle = \"black\";\n        // this.ctx.stroke();\n        // this.ctx.closePath();\n\n        if (this.vel[0] === 0 && this.vel[1] === 0) {\n            this.frameCount = 0;\n        }\n\n        this.vel[0] <= 0 ? this.currentRow = 0 : this.currentRow = 1;\n\n        this.frameCount++;\n        this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius * 0.8, this.pos[1] - this.radius * 0.6);\n        if (this.frameCount < this.frameRate) {\n            return\n        }\n\n        this.frameCount = 0;\n        this.currentLoop++;\n        if (this.currentLoop === this.numCols) {\n            this.currentLoop = 0;\n        }\n    }\n    \n    drawFrame(frameX, frameY, canvasX, canvasY) {\n        this.ctx.drawImage(\n          this.img,\n          frameX * this.frameWidth,\n          frameY * this.frameHeight,\n          this.frameWidth,\n          this.frameHeight,\n          canvasX,\n          canvasY,\n          this.frameWidth * this.scale,\n          this.frameHeight * this.scale\n        );\n    }\n\n    move() {\n        this.frameRate = 15;\n\n        if (this.pos[0] + this.radius > this.ctx.canvas.width) {\n            this.vel[0] = -this.vel[0];\n        }\n\n        if (this.pos[1] + this.radius > this.ctx.canvas.height || this.pos[1] - this.radius < 0) {\n            this.vel[1] = - this.vel[1];\n        }\n\n        if (Math.abs(this.vel[0]) > this.speed || Math.abs(this.vel[1]) > this.speed) {\n            this.frameRate = 8;\n            if (this.vel[0] > 0) this.vel[0] -= this.friction;\n            if (this.vel[0] < 0) this.vel[0] += this.friction;\n\n            if (this.vel[1] > 0) this.vel[1] -= this.friction;\n            if (this.vel[1] < 0) this.vel[1] += this.friction;\n        }\n\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n\n    collideWithSheep(otherSheep) {\n        this.vel[0] = 0;\n        this.vel[1] = 0;\n        \n        let timeoutID = window.setTimeout(() => {\n            this.vel[0] = otherSheep.vel[0];\n            this.vel[1] = otherSheep.vel[1];\n        }, 200)\n    }\n\n    collideWithObstacle(direction) {\n        if (direction === \"left\" || direction === \"right\") this.vel[0] = -this.vel[0];\n        if (direction === \"top\" || direction === \"bottom\") this.vel[1] = -this.vel[1];\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sheep);\n\n//# sourceURL=webpack:///./src/sheep.js?");

/***/ }),

/***/ "./src/sheepdog.js":
/*!*************************!*\
  !*** ./src/sheepdog.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\n    COLOR: \"rgb(46, 46, 46)\",\n    RADIUS: 23,\n    SPEED: 3\n}\n\nclass SheepDog {\n    constructor(ctx, img) {\n        this.ctx = ctx;\n        this.radius = constants.RADIUS;\n        this.color = constants.COLOR\n\n        this.pos = this.generateRandomPosition();\n        this.vel = [0, 0];\n\n        this.rightKey = false;\n        this.leftKey = false;\n        this.upKey = false;\n        this.downKey = false;\n        this.facingRight = false;\n\n        this.img = img;\n        this.scale = 0.25;\n        this.frameWidth = 200;\n        this.frameHeight = 150;\n        this.scaledWidth = this.scale * this.frameWidth;\n        this.scaledHeight = this.scale * this.frameHeight;\n        this.numCols = 8;\n        this.currentLoop = 0;\n        this.currentRow = 0;\n        this.frameCount = 0;\n    }\n\n    generateRandomPosition() {\n        const xPos = Math.random() * (this.ctx.canvas.width - this.radius * 2 - 130) + 130;\n        const yPos = Math.random() * (this.ctx.canvas.height - this.radius * 2) + this.radius;\n        return [xPos, yPos];\n    }\n\n    move() {\n        this.frameRate = 5;\n        \n        if (!this.rightKey && !this.leftKey) this.vel[0] = 0;\n\n        if (this.pos[0] + this.radius <= this.ctx.canvas.width) {\n            if (this.rightKey) {\n                this.pos[0] += constants.SPEED;\n                this.vel[0] = constants.SPEED - 1;\n            }\n        }\n\n        if (this.leftKey) {\n            this.pos[0] -= constants.SPEED;\n            this.vel[0] = -(constants.SPEED - 1);\n        }\n\n        if (!this.upKey && !this.downKey) this.vel[1] = 0;\n\n        if (this.pos[1] + this.radius <= this.ctx.canvas.height) {\n            if (this.downKey) {\n                this.pos[1] += constants.SPEED;\n                this.vel[1] = constants.SPEED - 1;\n            }\n        }\n        \n        if (this.pos[1] - this.radius >= 0) {\n            if (this.upKey) {\n                this.pos[1] -= constants.SPEED;\n                this.vel[1] = -(constants.SPEED - 1);\n            }\n        }\n    }\n\n    draw() {\n        // Testing\n        // this.ctx.beginPath();\n        // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n        // this.ctx.strokeStyle = \"black\";\n        // this.ctx.stroke();\n        // this.ctx.closePath();\n\n        if (this.vel[0] === 0 && this.vel[1] === 0) {\n            this.frameCount = 0;\n            this.currentLoop = 0;\n            this.facingRight ? this.currentRow = 1 : this.currentRow = 0;\n        }\n\n        if (this.vel[0] < 0) {\n            this.currentRow = 0;\n        } else if (this.vel[0] > 0) {\n            this.currentRow = 1;\n        }\n\n        this.frameCount++;\n        this.drawFrame(this.currentLoop, this.currentRow, this.pos[0] - this.radius, this.pos[1] - this.radius);\n        if (this.frameCount < this.frameRate) {\n            return // don't update animate unless specific # of frames have past\n        }\n\n        this.frameCount = 0;\n        this.currentLoop++;\n        if (this.currentLoop === this.numCols) {\n            this.currentLoop = 0;\n        }\n    }\n\n    drawFrame(frameX, frameY, canvasX, canvasY) {\n        this.ctx.drawImage(\n          this.img,\n          frameX * this.frameWidth,\n          frameY * this.frameHeight,\n          this.frameWidth,\n          this.frameHeight,\n          canvasX,\n          canvasY,\n          this.frameWidth * this.scale,\n          this.frameHeight * this.scale\n        );\n    }\n\n    keyDownHandler(e) {\n        if (e.keyCode === 39) {\n            this.rightKey = true;\n            this.facingRight = true;\n        } else if (e.keyCode === 37) {\n            this.leftKey = true;\n            this.facingRight = false;\n        }\n\n        if (e.keyCode === 40) {\n            this.downKey = true;\n        } else if (e.keyCode === 38) {\n            this.upKey = true;\n        }\n    }\n\n    keyUpHandler(e) {\n        if (e.keyCode === 39) {\n            this.rightKey = false;\n        } else if (e.keyCode === 37) {\n            this.leftKey = false;\n        }\n\n        if (e.keyCode === 40) {\n            this.downKey = false;\n        } else if (e.keyCode === 38) {\n            this.upKey = false;\n        }\n    }\n\n    collideWithSheep() {\n        if (this.vel[0] < 0) this.pos[0] += constants.SPEED; \n        if (this.vel[0] > 0) this.pos[0] -= constants.SPEED; \n        if (this.vel[1] < 0) this.pos[1] += constants.SPEED; \n        if (this.vel[1] > 0) this.pos[1] -= constants.SPEED; \n    }\n\n    collideWithObstacle(direction) {\n        if (direction === \"left\") this.pos[0] -= constants.SPEED;\n        if (direction === \"right\") this.pos[0] += constants.SPEED;\n        if (direction === \"top\") this.pos[1] -= constants.SPEED;\n        if (direction === \"bottom\") this.pos[1] += constants.SPEED;   \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SheepDog);\n\n//# sourceURL=webpack:///./src/sheepdog.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Timer {\n    constructor(ctx, timeRemaining) {\n        this.ctx = ctx;\n        this.height = 80;\n        this.width = 190;\n        this.pos = [710, 0];\n        this.timeRemaining = timeRemaining;\n    }\n\n    draw() {\n        this.ctx.font = \"80px Modak\";\n        this.ctx.fillStyle = \"white\";\n        this.ctx.strokeStyle = \"rgb(90, 90, 90)\";\n        this.ctx.fillText(`${this.timeRemaining}`, 725, 70);\n        this.ctx.strokeText(`${this.timeRemaining}`, 725, 70);\n    }\n\n    countdown() {\n        const timeParts = this.timeRemaining.split(\":\");\n        let minutes = parseInt(timeParts[0]);\n        let seconds = parseInt(timeParts[1]);\n\n        const intervalId = window.setInterval(() => {\n        if (seconds === 0) {\n            minutes -= 1;\n            seconds = 59;\n        } else {\n            seconds -= 1;\n        }\n\n        const displayMinutes = minutes < 10 ? `${minutes}` : minutes;\n        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;\n        this.timeRemaining = `${displayMinutes}:${displaySeconds}`;\n        }, 1000);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: randomVec, isCollidedWith, resolveCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomVec\", function() { return randomVec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCollidedWith\", function() { return isCollidedWith; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveCollision\", function() { return resolveCollision; });\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sheep */ \"./src/sheep.js\");\n/* harmony import */ var _sheepdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheepdog */ \"./src/sheepdog.js\");\n\n\n\nconst randomVec = (length) => {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\nconst scale = (vec, m) => {\n    return [vec[0] * m, vec[1] * m];\n}\n\nconst isCollidedWith = (object1, otherObject) => {\n    if (otherObject instanceof _sheep__WEBPACK_IMPORTED_MODULE_0__[\"default\"] || otherObject instanceof _sheepdog__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        return collideCircles(object1, otherObject);\n    } else {\n        return collideCircleRectangle(object1, otherObject);\n    }\n}\n\nconst collideCircles = (object1, otherObject) => {\n    let radiiSum = object1.radius + otherObject.radius;\n    let distanceBtwn = Math.sqrt(\n        (object1.pos[0] - otherObject.pos[0]) ** 2 + (object1.pos[1] - otherObject.pos[1]) ** 2\n    );\n    \n    if (otherObject instanceof _sheepdog__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) return distanceBtwn < radiiSum + 30;\n    return distanceBtwn < radiiSum;\n}\n\nconst collideCircleRectangle = (object1, otherObject) => {\n    let testX = object1.pos[0];\n    let testY = object1.pos[1];\n    const rx = otherObject.pos[0]\n    const ry = otherObject.pos[1]\n    let collisionDirection;\n\n    if (testX < rx) {\n        testX = rx;\n        collisionDirection = \"left\";\n    }\n    if (testX > rx + otherObject.width) {\n        testX = rx + otherObject.width;\n        collisionDirection = \"right\";\n    }\n\n    if (testY < ry) {\n        testY = ry;\n        collisionDirection = \"top\";\n    }\n    if (testY > ry + otherObject.height) {\n        testY = ry + otherObject.height;\n        collisionDirection = \"bottom\";\n    }\n\n    const distX = object1.pos[0] - testX;\n    const distY = object1.pos[1] - testY;\n    const distance = Math.sqrt((distX * distX) + (distY * distY)) - 5;\n\n    return { collided: distance <= object1.radius, direction: collisionDirection }\n}\n\nconst rotateVelocities = (velocity, angle) => {\n    const rotatedVelocities = {\n        x: velocity[0] * Math.cos(angle) - velocity[1] * Math.sin(angle),\n        y: velocity[0] * Math.sin(angle) + velocity[1] * Math.cos(angle)\n    }\n\n    return rotatedVelocities;\n}\n\nconst resolveCollision = (obj1, obj2) => {\n    const xVelocityDiff = obj1.vel[0] - obj2.vel[0];\n    const yVelocityDiff = obj1.vel[1] - obj2.vel[1];\n\n    const xDist = obj2.pos[0] - obj1.pos[0];\n    const yDist = obj2.pos[1] - obj1.pos[1];\n\n    if ((xVelocityDiff * xDist + yVelocityDiff * yDist) >= 0) {\n        const angle = -Math.atan2(obj2.pos[1] - obj1.pos[1], obj2.pos[0] - obj1.pos[0]);\n\n        const m1 = 1;\n        const m2 = 1;\n\n        const u1 = rotateVelocities(obj1.vel, angle);\n        const u2 = rotateVelocities(obj2.vel, angle);\n\n        const v1 = [(u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2)), u1.y]\n\n        const finalV1 = rotateVelocities(v1, -angle);\n        \n        obj1.vel[0] = finalV1.x;\n        obj1.vel[1] = finalV1.y;\n    }\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });