(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["safe-any"] = factory();
	else
		root["safe-any"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SafeAny_1 = __webpack_require__(/*! ./lib/SafeAny */ \"./lib/SafeAny.ts\");\r\nexports.SafeAny = SafeAny_1.SafeAny;\r\n\n\n//# sourceURL=webpack://safe-any/./index.ts?");

/***/ }),

/***/ "./lib/SafeAny.ts":
/*!************************!*\
  !*** ./lib/SafeAny.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Tool_1 = __webpack_require__(/*! ./Tool */ \"./lib/Tool.ts\");\r\nvar Type_1 = __webpack_require__(/*! ./Type */ \"./lib/Type.ts\");\r\n/**\r\n * A wrapper for `any` with a safe access interface.\r\n */\r\nvar SafeAny = /** @class */ (function () {\r\n    // Constructor\r\n    /**\r\n     * Default constructor to create the safe interface to `any`.\r\n     * @param object An object that is the result of a JSON parse or any literal.\r\n     */\r\n    function SafeAny(object) {\r\n        this.raw = object;\r\n        if (Tool_1.Tool.isString(object)) {\r\n            this.type = Type_1.Type.string;\r\n        }\r\n        else if (Tool_1.Tool.isNumber(object)) {\r\n            this.type = Type_1.Type.number;\r\n        }\r\n        else if (Tool_1.Tool.isBoolean(object)) {\r\n            this.type = Type_1.Type.boolean;\r\n        }\r\n        else if (Tool_1.Tool.isArray(object)) {\r\n            this.type = Type_1.Type.array;\r\n        }\r\n        else if (Tool_1.Tool.isDictionary(object)) {\r\n            this.type = Type_1.Type.dictionary;\r\n        }\r\n        else {\r\n            this.type = Type_1.Type.null;\r\n        }\r\n    }\r\n    // Custom initializer\r\n    /**\r\n     * Parses the json literal using `JSON.parse()`.\r\n     *\r\n     * If the JSON failed to parse, a valid `SafeAny` object is still returned.\r\n     * The `type` property of this object has the value `Type.null`.\r\n     *\r\n     * Only use this, if the parse error can be ignored.\r\n     * This function does not throw.\r\n     *\r\n     * @param json A json string literal that should be parsed.\r\n     */\r\n    SafeAny.parseJSON = function (json) {\r\n        try {\r\n            var data = JSON.parse(json);\r\n            return new SafeAny(data);\r\n        }\r\n        catch (_a) {\r\n            return new SafeAny(null);\r\n        }\r\n    };\r\n    // OrNull interface\r\n    /**\r\n     * Tries to parse a string value and returns it.\r\n     *\r\n     * A number is converted to a string using `toString()`.\r\n     *\r\n     * A boolean is converted to a string:\r\n     * - `true`: `\"true\"`\r\n     * - `false`: `\"false\"`\r\n     *\r\n     * @return A string value or `null` if it cannot be converted.\r\n     */\r\n    SafeAny.prototype.stringOrNull = function () {\r\n        switch (this.type) {\r\n            case Type_1.Type.string: {\r\n                return this.raw;\r\n            }\r\n            case Type_1.Type.number: {\r\n                return this.raw.toString();\r\n            }\r\n            case Type_1.Type.boolean: {\r\n                if (this.raw) {\r\n                    return \"true\";\r\n                }\r\n                else {\r\n                    return \"false\";\r\n                }\r\n            }\r\n            case Type_1.Type.dictionary: return null;\r\n            case Type_1.Type.array: return null;\r\n            case Type_1.Type.null: return null;\r\n        }\r\n    };\r\n    /**\r\n     * Tries to parse a number value and returns it.\r\n     *\r\n     * A string is converted to a number using `Number()` constructor.\r\n     * If the result is `NaN`, `null` will be returned.\r\n     *\r\n     * A boolean is converted to a number:\r\n     * - `true`: `1`\r\n     * - `false`: `0`\r\n     *\r\n     * @return A number value or `null` if it cannot be converted.\r\n     */\r\n    SafeAny.prototype.numberOrNull = function () {\r\n        switch (this.type) {\r\n            case Type_1.Type.string: {\r\n                var n = Number(this.raw);\r\n                if (isNaN(n)) {\r\n                    return null;\r\n                }\r\n                else {\r\n                    return n;\r\n                }\r\n            }\r\n            case Type_1.Type.number: {\r\n                return this.raw;\r\n            }\r\n            case Type_1.Type.boolean: {\r\n                if (this.raw) {\r\n                    return 1;\r\n                }\r\n                else {\r\n                    return 0;\r\n                }\r\n            }\r\n            case Type_1.Type.dictionary: return null;\r\n            case Type_1.Type.array: return null;\r\n            case Type_1.Type.null: return null;\r\n        }\r\n    };\r\n    /**\r\n     * Tries to parse a boolean value and returns it.\r\n     *\r\n     * A string is converted to a boolean:\r\n     * - `\"true\"`: `true`\r\n     * - `\"false\"`: `false`\r\n     *\r\n     * A number is converted to a boolean:\r\n     * - `0`: `false`\r\n     * - any other number: `true`\r\n     *\r\n     * @return A number value or `null` if it cannot be converted.\r\n     */\r\n    SafeAny.prototype.booleanOrNull = function () {\r\n        switch (this.type) {\r\n            case Type_1.Type.string: {\r\n                if (this.raw === \"true\") {\r\n                    return true;\r\n                }\r\n                else if (this.raw === \"false\") {\r\n                    return false;\r\n                }\r\n                else {\r\n                    return null;\r\n                }\r\n            }\r\n            case Type_1.Type.number: {\r\n                if (this.raw === 0) {\r\n                    return false;\r\n                }\r\n                else {\r\n                    return true;\r\n                }\r\n            }\r\n            case Type_1.Type.boolean: {\r\n                return this.raw;\r\n            }\r\n            case Type_1.Type.dictionary: return null;\r\n            case Type_1.Type.array: return null;\r\n            case Type_1.Type.null: return null;\r\n        }\r\n    };\r\n    /**\r\n     * Tries to return the given object as a dictionary.\r\n     *\r\n     * @return A dictionary value or `null`.\r\n     */\r\n    SafeAny.prototype.dictionaryOrNull = function () {\r\n        if (this.type === Type_1.Type.dictionary) {\r\n            return Tool_1.Tool.mapValue(this.raw, function (value) {\r\n                return new SafeAny(value);\r\n            });\r\n        }\r\n        else {\r\n            return null;\r\n        }\r\n    };\r\n    /**\r\n     * Tries to return the given object as an array.\r\n     *\r\n     * @return An array value or `null`.\r\n     */\r\n    SafeAny.prototype.arrayOrNull = function () {\r\n        if (this.type === Type_1.Type.array) {\r\n            return this.raw.map(function (value) {\r\n                return new SafeAny(value);\r\n            });\r\n        }\r\n        else {\r\n            return null;\r\n        }\r\n    };\r\n    // Value interface\r\n    /**\r\n     * Tries to return the given object as a string.\r\n     * If the conversion failes, `\"\"` is returned.\r\n     *\r\n     * See [[stringOrNull]] for conversion rules.\r\n     *\r\n     * @returns A string value or `\"\"`.\r\n     */\r\n    SafeAny.prototype.stringValue = function () {\r\n        return this.stringOrDefault(\"\");\r\n    };\r\n    /**\r\n     * Tries to return the given object as a number.\r\n     * If the conversion failes, `0` is returned.\r\n     *\r\n     * See [[numberOrNull]] for conversion rules.\r\n     *\r\n     * @returns A number value or `0`.\r\n     */\r\n    SafeAny.prototype.numberValue = function () {\r\n        return this.numberOrDefault(0);\r\n    };\r\n    /**\r\n     * Tries to return the given object as a boolean.\r\n     * If the conversion failes, `false` is returned.\r\n     *\r\n     * See [[booleanOrNull]] for conversion rules.\r\n     *\r\n     * @returns A boolean value or `false`.\r\n     */\r\n    SafeAny.prototype.booleanValue = function () {\r\n        return this.booleanOrDefault(false);\r\n    };\r\n    /**\r\n     * Tries to return the given object as a native dictionary.\r\n     * If the the object is no dictionary, `{}` is returned.\r\n     *\r\n     * The values are wrapped in `SafeAny`.\r\n     *\r\n     * @returns A valid dictionary.\r\n     */\r\n    SafeAny.prototype.dictionaryValue = function () {\r\n        if (this.type === Type_1.Type.dictionary) {\r\n            return Tool_1.Tool.mapValue(this.raw, function (value) {\r\n                return new SafeAny(value);\r\n            });\r\n        }\r\n        else {\r\n            return {};\r\n        }\r\n    };\r\n    /**\r\n     * Tries to return the given object as a native array.\r\n     * If the the object is no array, `[]` is returned.\r\n     *\r\n     * The values are wrapped in `SafeAny`.\r\n     *\r\n     * @returns A valid array.\r\n     */\r\n    SafeAny.prototype.arrayValue = function () {\r\n        if (this.type === Type_1.Type.array) {\r\n            return this.raw.map(function (value) {\r\n                return new SafeAny(value);\r\n            });\r\n        }\r\n        else {\r\n            return [];\r\n        }\r\n    };\r\n    // OrDefault interface\r\n    /**\r\n     * Tries to convert the object to a string value.\r\n     * If the conversion failed, the default value `value` will be returned.\r\n     *\r\n     * See [[stringOrNull]] for conversion rules.\r\n     *\r\n     * @param value The fallback value that will be returned if conversion failed.\r\n     */\r\n    SafeAny.prototype.stringOrDefault = function (value) {\r\n        var s = this.stringOrNull();\r\n        if (s === null) {\r\n            return value;\r\n        }\r\n        else {\r\n            return s;\r\n        }\r\n    };\r\n    /**\r\n     * Tries to convert the object to a number value.\r\n     * If the conversion failed, the default value `value` will be returned.\r\n     *\r\n     * See [[numberOrNull]] for conversion rules.\r\n     *\r\n     * @param value The fallback value that will be returned if conversion failed.\r\n     */\r\n    SafeAny.prototype.numberOrDefault = function (value) {\r\n        var n = this.numberOrNull();\r\n        if (n === null) {\r\n            return value;\r\n        }\r\n        else {\r\n            return n;\r\n        }\r\n    };\r\n    /**\r\n     * Tries to convert the object to a boolean value.\r\n     * If the conversion failed, the default value `value` will be returned.\r\n     *\r\n     * See [[booleanOrNull]] for conversion rules.\r\n     *\r\n     * @param value The fallback value that will be returned if conversion failed.\r\n     */\r\n    SafeAny.prototype.booleanOrDefault = function (value) {\r\n        var b = this.booleanOrNull();\r\n        if (b === null) {\r\n            return value;\r\n        }\r\n        else {\r\n            return b;\r\n        }\r\n    };\r\n    // Direct dictionary access\r\n    /**\r\n     * This function will try to return a wrapped child object.\r\n     * Use this function if the object is assumed to be a dictionary or an array.\r\n     * If `key` is a string, the root object is considered to be a dictionary and object at that key is beeing wrapped\r\n     * and returned.\r\n     * If `key` is a number, the root object is considered to be an array and the value at that index is beeing wrapped\r\n     * and returned.\r\n     *\r\n     * `SafeAny(null)` will be returned if the child cannot be accessed, or the type of `key` is not compatible with\r\n     * the subscript signature of the root object.\r\n     *\r\n     * @param key The key that should be used to access the child object.\r\n     */\r\n    SafeAny.prototype.get = function (key) {\r\n        if (Tool_1.Tool.isString(key)) {\r\n            if (this.type === Type_1.Type.dictionary) {\r\n                return new SafeAny(this.raw[key]);\r\n            }\r\n            else {\r\n                return new SafeAny(null);\r\n            }\r\n        }\r\n        else if (Tool_1.Tool.isNumber(key)) {\r\n            if (this.type === Type_1.Type.array) {\r\n                return new SafeAny(this.raw[key]);\r\n            }\r\n            else {\r\n                return new SafeAny(null);\r\n            }\r\n        }\r\n        else {\r\n            return new SafeAny(null);\r\n        }\r\n    };\r\n    // Other\r\n    /**\r\n     * If the object is a string, this operator treats the value as a JSON string and tries to re-parse it into an\r\n     * object and returns it.\r\n     * If the object is no string or the parsing failed, the current object will be returned without change.\r\n     *\r\n     * It replaces the unhandy manual approach of breaking the operator chain.\r\n     * ```typescript\r\n     * // Instead of\r\n     * SafeAny.parsedJSON(safeObject.get(\"jsonString\").stringValue()).get(0)\r\n     * // Do this\r\n     * safeObject.get(\"jsonString\").parsed().get(0)\r\n     * ```\r\n     */\r\n    SafeAny.prototype.parsed = function () {\r\n        if (this.type === Type_1.Type.string) {\r\n            try {\r\n                var parsed = JSON.parse(this.raw);\r\n                return new SafeAny(parsed);\r\n            }\r\n            catch (_a) {\r\n                return this;\r\n            }\r\n        }\r\n        else {\r\n            return this;\r\n        }\r\n    };\r\n    /**\r\n     * @returns The internal storage object, which is of type any.\r\n     * Use with caution.\r\n     */\r\n    SafeAny.prototype.native = function () {\r\n        return this.raw;\r\n    };\r\n    return SafeAny;\r\n}());\r\nexports.SafeAny = SafeAny;\r\n\n\n//# sourceURL=webpack://safe-any/./lib/SafeAny.ts?");

/***/ }),

/***/ "./lib/Tool.ts":
/*!*********************!*\
  !*** ./lib/Tool.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Tool = /** @class */ (function () {\r\n    function Tool() {\r\n    }\r\n    /**\r\n     * Returns true, if the given value is a native string.\r\n     * @param value The value to check.\r\n     */\r\n    Tool.isString = function (value) {\r\n        return typeof value === \"string\" || value instanceof String;\r\n    };\r\n    /**\r\n     * Returns true, if the given value is a native number.\r\n     * @param value The value to check.\r\n     */\r\n    Tool.isNumber = function (value) {\r\n        return typeof value === \"number\" && isFinite(value);\r\n    };\r\n    /**\r\n     * Returns true, if the given value is a native boolean.\r\n     * @param value The value to check.\r\n     */\r\n    Tool.isBoolean = function (value) {\r\n        return typeof value === \"boolean\";\r\n    };\r\n    /**\r\n     * Returns true, if the given value is a native array.\r\n     * @param value The value to check.\r\n     */\r\n    Tool.isArray = function (value) {\r\n        return value != null && typeof value === \"object\" && value.constructor === Array;\r\n    };\r\n    /**\r\n     * Returns true, if the given value is a native dictionary.\r\n     * @param value The value to check.\r\n     */\r\n    Tool.isDictionary = function (value) {\r\n        return value != null && typeof value === \"object\" && value.constructor !== Array;\r\n    };\r\n    /**\r\n     * Maps every value of a dictionary.\r\n     *\r\n     * @param dict The dictionary whose values to map.\r\n     * @param map The function that will be applied to every value of the dictionary,\r\n     */\r\n    Tool.mapValue = function (dict, map) {\r\n        var akku = {};\r\n        Object.keys(dict).forEach(function (key) {\r\n            akku[key] = map(dict[key]);\r\n        });\r\n        return akku;\r\n    };\r\n    return Tool;\r\n}());\r\nexports.Tool = Tool;\r\n\n\n//# sourceURL=webpack://safe-any/./lib/Tool.ts?");

/***/ }),

/***/ "./lib/Type.ts":
/*!*********************!*\
  !*** ./lib/Type.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * An enum that represents the various types of a JSON object.\r\n */\r\nvar Type;\r\n(function (Type) {\r\n    Type[Type[\"string\"] = 0] = \"string\";\r\n    Type[Type[\"number\"] = 1] = \"number\";\r\n    Type[Type[\"boolean\"] = 2] = \"boolean\";\r\n    Type[Type[\"dictionary\"] = 3] = \"dictionary\";\r\n    Type[Type[\"array\"] = 4] = \"array\";\r\n    Type[Type[\"null\"] = 5] = \"null\";\r\n})(Type = exports.Type || (exports.Type = {}));\r\n\n\n//# sourceURL=webpack://safe-any/./lib/Type.ts?");

/***/ })

/******/ });
});