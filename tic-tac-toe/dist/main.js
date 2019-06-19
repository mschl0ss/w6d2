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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/game.js":
/*!**********************!*\
  !*** ../src/game.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  //holds taken moves? Use .length to determine #current player?\n\n  //hold onto current player\n  constructor () {\n    this.turnCounter = 0;\n    this.winningCombo = [];\n  }\n\n  currentPlayer () {\n    if ( this.turnCounter % 2 === 0 ) return 'x';\n    else return 'o';\n  }\n  //\n\n  isGameOver () {\n\n    const winSeqs = [\n      //horizontals\n      [ 1,2,3 ],\n      [ 4,5,6 ],\n      [ 7,8,9 ],\n\n      //verticals\n      [ 1,4,7 ],\n      [ 2,5,8 ],\n      [ 3,6,9 ],\n\n      //diagonals\n      [ 1,5,9 ],\n      [ 3,5,7 ]\n\n    ];\n\n    //declare some stuff we'll need\n    let $lis = $('li');\n    const x = [], o = [];\n    let winner = 'none';\n\n    if (this.turnCounter >= 8) winner = 'tied';\n\n    //loop through the game lis\n    //if the given li has a class, push it's gridPos into the right array\n    for (let i = 0; i < $lis.length; i++) {\n      const li = $lis.eq(i);\n      if ( li.attr('class') === 'x' ) x.push( li.data('gridPos') );\n      else if ( li.attr('class') === 'o' ) o.push( li.data('gridPos') );\n    }\n\n    //for each win sequence, if every element in the sequence is present\n    // in the x or o array, that player wins.\n    winSeqs.forEach ( seq => {\n      if ( seq.every( el => x.includes(el) ) ) {\n        winner = 'x';\n        this.winningCombo = seq;\n      }\n      if ( seq.every( el => o.includes(el) ) ) {\n        winner = 'o';\n        this.winningCombo = seq;\n      }\n    });\n  \n    \n    return winner;\n  }\n\n}\n\n// create Game.prototype.playMove - regiseters their move\n\n\nmodule.exports = Game;\n\n\n\n\n//# sourceURL=webpack:///../src/game.js?");

/***/ }),

/***/ "../src/index.js":
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst View = __webpack_require__(/*! ./ttt-view.js */ \"../src/ttt-view.js\"); // require appropriate file\nconst Game = __webpack_require__(/*! ./game.js */ \"../src/game.js\"); // require appropriate file\n\n  $(() => {\n    // Your code here\n    let $root = $('figure.ttt');\n    const game = new Game();\n    new View(game, $root);\n  });\n\n\n  \n\n//# sourceURL=webpack:///../src/index.js?");

/***/ }),

/***/ "../src/ttt-view.js":
/*!**************************!*\
  !*** ../src/ttt-view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\n  constructor(game, $root) {\n    this.game = game;\n    this.$root = $root;\n    this.gameOver = false;\n\n    this.setupBoard();\n    this.bindEvents();\n  }\n\n  bindEvents() {\n\n    let $squares = $('li');\n    for (let i = 0; i < $squares.length; i++) {\n      $squares.eq(i).on('click', e => {\n        const square = $(e.target);\n        this.makeMove(square);\n      });\n    }\n  }\n\n  makeMove($square) {\n    //call Game.prototype.playMove\n    if ( this.gameOver ) { alert('it\\s done bro.  walk away.')}\n    else {\n      let player = this.game.currentPlayer();\n\n      if ( !$square.attr('class') ) {\n\n        $square.addClass(player);\n\n        const outcome = this.game.isGameOver();\n        console.log(outcome);\n\n        if ( outcome !== 'none' ) {\n          this.gameOver = true;\n          this.throwAParade(outcome);\n        }\n        else {\n          this.game.turnCounter += 1;\n        }\n      }\n      else {\n        alert('feck off');\n      }\n    }\n\n  }\n\n  setupBoard() {\n    const $board = $(\"<ul>\");\n    $board.attr('id', 'board');\n\n    for (let i = 1; i < 10; i++) {\n      let $square = $(\"<li>\");\n      $square.data('gridPos', i);\n      $square.attr('id', i);\n      $board.append($square);\n    }\n\n    this.$root.append($board);\n  }\n\n  throwAParade (winningClass) {\n \n    // $(`li.${winningClass}`).css('background','green');\n    // $(`li.${winningClass}`).css('color','white');\n\n    let $lis = $('li');\n\n    for (let i = 0; i < $lis.length; i++) {\n      const $li = $lis.eq(i);\n      if (this.game.winningCombo.includes($li.data('gridPos'))) {\n        $li.css('background', 'green');\n        $li.css('color', 'white');\n      }\n      else {\n        $li.attr('id', \"loser-square\");\n        $li.removeClass();\n        \n      }\n\n    }\n\n    $('body').attr('class','bender');\n    $('h1').css('color', 'white');\n    \n    \n    setTimeout(() => alert('Congrats ' + winningClass), 0);\n\n  }\n\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///../src/ttt-view.js?");

/***/ })

/******/ });