/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/index/controller/controllerManager.ts":
/*!**********************************************************!*\
  !*** ./src/public/index/controller/controllerManager.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControllerManager = void 0;
var viewManager_1 = __webpack_require__(/*! ../view/viewManager */ "./src/public/index/view/viewManager.ts");
var ControllerManager = /** @class */ (function () {
    function ControllerManager() {
        this._viewManager = new viewManager_1.ViewManager();
    }
    ControllerManager.prototype.resize = function () {
        this._viewManager.resize();
    };
    return ControllerManager;
}());
exports.ControllerManager = ControllerManager;


/***/ }),

/***/ "./src/public/index/view/viewManager.ts":
/*!**********************************************!*\
  !*** ./src/public/index/view/viewManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewManager = void 0;
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var ViewManager = /** @class */ (function () {
    function ViewManager() {
        var canvas = document.getElementById("main");
        this._app = new PIXI.Application({
            width: ViewManager.STAGE_WIDTH,
            height: ViewManager.STAGE_HEIGHT,
            backgroundColor: 0xCCCCCC, resolution: window.devicePixelRatio || 1,
            antialias: true,
            view: canvas
        });
        var stage = this._app.stage;
        var options = {
            resourceOptions: {
                autoPlay: false
            }
        };
        var videoSprite = PIXI.Sprite.from("./movie/movie.mp4", options);
        stage.addChild(videoSprite);
        var sprite = new PIXI.Sprite();
        stage.addChild(sprite);
        var g = new PIXI.Graphics();
        g.beginFill(0xFF0000);
        g.drawCircle(0, 0, 50);
        sprite.addChild(g);
        sprite.x = 100;
        sprite.y = 100;
        sprite.interactive = true;
        sprite.buttonMode = true;
        sprite.on("click", function () {
            var resource = videoSprite.texture.baseTexture.resource;
            resource.source.play();
        });
        this.resize();
    }
    ViewManager.prototype.resize = function () {
        var scale = document.body.clientWidth / ViewManager.STAGE_WIDTH;
        var w = ViewManager.STAGE_WIDTH * scale;
        var h = ViewManager.STAGE_HEIGHT * scale;
        this._app.renderer.view.style.width = w + "px";
        this._app.renderer.view.style.height = h + "px";
    };
    ViewManager.STAGE_WIDTH = 1920;
    ViewManager.STAGE_HEIGHT = 1080;
    return ViewManager;
}());
exports.ViewManager = ViewManager;


/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/***/ ((module) => {

module.exports = PIXI;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./src/public/index/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var controllerManager_1 = __webpack_require__(/*! ./controller/controllerManager */ "./src/public/index/controller/controllerManager.ts");
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.resizeHandler = function () {
            _this._controllerManager.resize();
        };
        var resize = function () {
            _this.resizeHandler();
        };
        this._controllerManager = new controllerManager_1.ControllerManager();
        window.addEventListener("resize", function (e) {
            resize();
        });
    }
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map