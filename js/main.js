/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module) => {

eval("// Module\nvar code = \"<html lang=\\\"en\\\">\\r\\n<head>\\r\\n  <meta charset=\\\"utf-8\\\">\\r\\n\\r\\n  <title>Calendar</title>\\r\\n  <meta name=\\\"description\\\" content=\\\"The HTML5 Herald\\\">\\r\\n  <meta name=\\\"author\\\" content=\\\"SitePoint\\\">\\r\\n\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"/src/main.scss\\\">\\r\\n\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <script src=\\\"/src/js/main.js\\\"></script>\\r\\n\\r\\n  <div class=\\\"container\\\">\\r\\n    <form id=\\\"new_event\\\">\\r\\n      <div class=\\\"item\\\">\\r\\n        <label>Name of the event:</label>\\r\\n        <div class=\\\"buttons\\\"><input type=\\\"text\\\" id=\\\"event_name\\\"/></div>\\r\\n      </div>\\r\\n      <div class=\\\"item\\\">\\r\\n        <label>Participants:</label>\\r\\n        <div class=\\\"buttons\\\">\\r\\n          <select name=\\\"participants\\\" id=\\\"members\\\">\\r\\n            <option value=\\\"All\\\">Maria, Bob, Alex</option>\\r\\n            <option value=\\\"Maria\\\">Maria</option>\\r\\n            <option value=\\\"Bob\\\">Bob</option>\\r\\n            <option value=\\\"Alex\\\">Alex</option>\\r\\n          </select>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"item\\\">\\r\\n        <label>Day:</label>\\r\\n        <div class=\\\"buttons\\\">\\r\\n          <select name=\\\"days\\\" id=\\\"days\\\">\\r\\n            <option value=\\\"Monday\\\">Monday</option>\\r\\n            <option value=\\\"Tuesday\\\">Tuesday</option>\\r\\n            <option value=\\\"Wednesday\\\">Wednesday</option>\\r\\n            <option value=\\\"Thursday\\\">Thursday</option>\\r\\n            <option value=\\\"Friday\\\">Friday</option>\\r\\n          </select>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"item\\\">\\r\\n        <label>Time:</label>\\r\\n        <div class=\\\"buttons\\\">\\r\\n          <select name=\\\"time\\\" id=\\\"time\\\">\\r\\n            <option value=\\\"10:00\\\">10:00</option>\\r\\n            <option value=\\\"11:00\\\">11:00</option>\\r\\n            <option value=\\\"12:00\\\">12:00</option>\\r\\n            <option value=\\\"13:00\\\">13:00</option>\\r\\n            <option value=\\\"14:00\\\">14:00</option>\\r\\n            <option value=\\\"15:00\\\">15:00</option>\\r\\n            <option value=\\\"16:00\\\">16:00</option>\\r\\n            <option value=\\\"17:00\\\">17:00</option>\\r\\n            <option value=\\\"18:00\\\">18:00</option>\\r\\n          </select>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"buttons form\\\">\\r\\n        <button type=\\\"reset\\\" onclick=\\\"newEvent()\\\">Cancel</button>\\r\\n        <button type=\\\"reset\\\" onclick=\\\"getData()\\\">Create</button>\\r\\n      </div>\\r\\n    </form>\\r\\n    <div id=\\\"schedule\\\" class=\\\"calendar\\\">\\r\\n      <div class=\\\"title\\\">\\r\\n        <h2>Calendar</h2>\\r\\n        <div class=\\\"buttons\\\">\\r\\n          <select name=\\\"team\\\" id=\\\"members_pick\\\" onclick=\\\"onSelect()\\\">\\r\\n            <option value=\\\"All\\\">All members</option>\\r\\n            <option value=\\\"Maria\\\">Maria</option>\\r\\n            <option value=\\\"Bob\\\">Bob</option>\\r\\n            <option value=\\\"Alex\\\">Alex</option>\\r\\n          </select>\\r\\n          <button id=\\\"event_button\\\" type=\\\"button\\\" onclick=\\\"newEvent()\\\">\\r\\n            New event +\\r\\n          </button>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"grid\\\">\\r\\n        <table>\\r\\n          <tbody>\\r\\n            <tr>\\r\\n              <th>Name</th>\\r\\n              <th>Mon</th>\\r\\n              <th>Tue</th>\\r\\n              <th>Wed</th>\\r\\n              <th>Thu</th>\\r\\n              <th>Fri</th>\\r\\n            </tr>\\r\\n            <tr id=\\\"10:00\\\">\\r\\n              <td>10:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"11:00\\\">\\r\\n              <td>11:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"12:00\\\">\\r\\n              <td>12:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"13:00\\\">\\r\\n              <td>13:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"14:00\\\">\\r\\n              <td>14:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"15:00\\\">\\r\\n              <td>15:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"16:00\\\">\\r\\n              <td>16:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"17:00\\\">\\r\\n              <td>17:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n            <tr id=\\\"18:00\\\">\\r\\n              <td>18:00</td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n              <td></td>\\r\\n            </tr>\\r\\n          </tbody>\\r\\n        </table>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</body>\\r\\n</html>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./main.scss?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./main.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass eventClass {\r\n    constructor(event_name, member_name, event_day, event_time, event_id) {\r\n        this.event_name = event_name;\r\n        this.member_name = member_name;\r\n        this.event_day = event_day;\r\n        this.event_time = event_time;\r\n        this.event_id = event_id;\r\n    }\r\n}\r\n\r\nvar counter = -1;\r\nvar arr = []\r\nvar check = false;\r\n\r\nwindow.newEvent = function () {\r\n    let el = document.getElementById(\"new_event\");\r\n    let cal = document.getElementById(\"schedule\");\r\n\r\n    if (el.style.display == \"none\") {\r\n        el.style.display = \"flex\";\r\n        cal.style.display = \"none\";\r\n    } else {\r\n        el.style.display = \"none\";\r\n        cal.style.display = \"block\"\r\n    }\r\n}\r\n\r\nwindow.onSelect = function () {\r\n    let member_choose = document.getElementById(\"members_pick\").value;\r\n    if (member_choose !== \"All\") {\r\n        let new_arr = arr.filter(item => { return item.member_name !== member_choose })\r\n        let needed_arr = arr.filter(item => { return item.member_name == member_choose })\r\n        console.log(new_arr)\r\n        for (let i = 0; i < new_arr.length; i++) {\r\n            let el = document.getElementById(`cell_id_${new_arr[i].event_id}`);\r\n            el.style.visibility = \"hidden\"\r\n            el.parentNode.style.color = \"white\"\r\n            el.parentNode.style.backgroundColor = \"white\"\r\n        }\r\n        for (let i = 0; i < needed_arr.length; i++) {\r\n            let el = document.getElementById(`cell_id_${needed_arr[i].event_id}`);\r\n            el.style.visibility = \"visible\"\r\n            el.parentNode.style.color = \"black\"\r\n            el.parentNode.style.backgroundColor = \"#d9f3bb\"\r\n        }\r\n    } else {\r\n        console.log(arr)\r\n        for (let i = 0; i < arr.length; i++) {\r\n            let el = document.getElementById(`cell_id_${arr[i].event_id}`);\r\n            el.style.visibility = \"visible\"\r\n            el.parentNode.style.color = \"black\"\r\n            el.parentNode.style.backgroundColor = \"#d9f3bb\"\r\n            el.parentNode.parentNode.border = \"2px solid #c4c4c4\"\r\n        }\r\n    }\r\n}\r\n\r\nwindow.deleteCell = function (id) {\r\n    let el = document.getElementById(`cell_id_${id}`);\r\n    let event_name = el.getAttribute(\"name\");\r\n    if (confirm(`Are you sure you want to delete \"${event_name}\" event?`)) {\r\n        for (let i = 0; i < arr.length; i++) {\r\n            console.log(arr[i].event_id, id)\r\n            if (arr[i].event_id == id) {\r\n                arr.splice(i, 1);\r\n                el.parentNode.style.backgroundColor = \"#fff\";\r\n                el.parentNode.outerHTML = \"<td></td>\";\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nwindow.getData = function () {\r\n    const days_map = new Map();\r\n    days_map.set(\"Monday\", 1);\r\n    days_map.set(\"Tuesday\", 2);\r\n    days_map.set(\"Wednesday\", 3);\r\n    days_map.set(\"Thursday\", 4);\r\n    days_map.set(\"Friday\", 5);\r\n\r\n    console.log();\r\n\r\n    let get_event_name = document.getElementById(\"event_name\").value;\r\n    let get_members = document.getElementById(\"members\").value;\r\n    let get_days = document.getElementById(\"days\").value;\r\n    let get_time = document.getElementById(\"time\").value;\r\n\r\n    let get_row = document.getElementById(get_time);\r\n    let cell_number = days_map.get(get_days);\r\n\r\n    counter++;\r\n    console.log(counter)\r\n    let created_event = new eventClass(get_event_name, get_members, get_days, get_time, counter);\r\n\r\n    if (arr.length == 0) {\r\n        arr.push(created_event);\r\n        get_row.children[cell_number].style.backgroundColor = \"#d9f3bb\";\r\n        get_row.children[cell_number].innerHTML =\r\n            get_event_name +\r\n            `<span class=\"close\" name=\"${get_event_name}\" id=\"cell_id_${counter}\" onclick=\"deleteCell(${counter})\">x</span>`;\r\n        newEvent();\r\n    }\r\n    else {\r\n\r\n        check = false;\r\n\r\n        for (let i = 0; i < arr.length; i++) {\r\n            if (arr[i].event_day == created_event.event_day && arr[i].event_time == created_event.event_time) {\r\n                alert(\"cant create, the event on this is already booked\");\r\n                newEvent();\r\n                check = true;\r\n                break;\r\n            }\r\n        }\r\n\r\n        console.log(check)\r\n        if (check != true) {\r\n            console.log(\"we are in else\");\r\n            arr.push(created_event);\r\n            get_row.children[cell_number].style.backgroundColor = \"#d9f3bb\";\r\n            get_row.children[cell_number].innerHTML =\r\n                get_event_name +\r\n                `<span class=\"close\" name=\"${get_event_name}\" id=\"cell_id_${counter}\" onclick=\"deleteCell(${counter})\">x</span>`;\r\n\r\n            newEvent();\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;