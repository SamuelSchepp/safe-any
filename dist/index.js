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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar SafeAny_1 = __webpack_require__(/*! ./lib/SafeAny */ \"./lib/SafeAny.ts\");\nexports.SafeAny = SafeAny_1.SafeAny;\n\n\n//# sourceURL=webpack://safe-any/./index.ts?");

/***/ }),

/***/ "./lib/SafeAny.ts":
/*!************************!*\
  !*** ./lib/SafeAny.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tool_1 = __webpack_require__(/*! ./Tool */ \"./lib/Tool.ts\");\nvar Type_1 = __webpack_require__(/*! ./Type */ \"./lib/Type.ts\");\n/**\n * A wrapper for `any` with a safe access interface.\n */\nvar SafeAny = /** @class */ (function () {\n    // Constructor\n    /**\n     * Default constructor to create the safe interface to `any`.\n     * @param object An object that is the result of a JSON parse or any literal.\n     */\n    function SafeAny(object) {\n        this.raw = object;\n        if (Tool_1.Tool.isString(object)) {\n            this.type = Type_1.Type.string;\n        }\n        else if (Tool_1.Tool.isNumber(object)) {\n            this.type = Type_1.Type.number;\n        }\n        else if (Tool_1.Tool.isBoolean(object)) {\n            this.type = Type_1.Type.boolean;\n        }\n        else if (Tool_1.Tool.isArray(object)) {\n            this.type = Type_1.Type.array;\n        }\n        else if (Tool_1.Tool.isDictionary(object)) {\n            this.type = Type_1.Type.dictionary;\n        }\n        else {\n            this.type = Type_1.Type.null;\n        }\n    }\n    // Custom initializer\n    /**\n     * Parses the json literal using `JSON.parse()`.\n     *\n     * If the JSON failed to parse, a valid `SafeAny` object is still returned.\n     * The `type` property of this object has the value `Type.null`.\n     *\n     * Only use this, if the parse error can be ignored.\n     * This function does not throw.\n     *\n     * @param json A json string literal that should be parsed.\n     */\n    SafeAny.parseJSON = function (json) {\n        try {\n            var data = JSON.parse(json);\n            return new SafeAny(data);\n        }\n        catch (_a) {\n            return new SafeAny(null);\n        }\n    };\n    // OrNull interface\n    /**\n     * Tries to parse a string value and returns it.\n     *\n     * A number is converted to a string using `toString()`.\n     *\n     * A boolean is converted to a string:\n     * - `true`: `\"true\"`\n     * - `false`: `\"false\"`\n     *\n     * @return A string value or `null` if it cannot be converted.\n     */\n    SafeAny.prototype.stringOrNull = function () {\n        switch (this.type) {\n            case Type_1.Type.string: {\n                return this.raw;\n            }\n            case Type_1.Type.number: {\n                return this.raw.toString();\n            }\n            case Type_1.Type.boolean: {\n                if (this.raw) {\n                    return \"true\";\n                }\n                else {\n                    return \"false\";\n                }\n            }\n            case Type_1.Type.dictionary: return null;\n            case Type_1.Type.array: return null;\n            case Type_1.Type.null: return null;\n        }\n    };\n    /**\n     * Tries to parse a number value and returns it.\n     *\n     * A string is converted to a number using `Number()` constructor.\n     * If the result is `NaN`, `null` will be returned.\n     *\n     * A boolean is converted to a number:\n     * - `true`: `1`\n     * - `false`: `0`\n     *\n     * @return A number value or `null` if it cannot be converted.\n     */\n    SafeAny.prototype.numberOrNull = function () {\n        switch (this.type) {\n            case Type_1.Type.string: {\n                var n = Number(this.raw);\n                if (isNaN(n)) {\n                    return null;\n                }\n                else {\n                    return n;\n                }\n            }\n            case Type_1.Type.number: {\n                return this.raw;\n            }\n            case Type_1.Type.boolean: {\n                if (this.raw) {\n                    return 1;\n                }\n                else {\n                    return 0;\n                }\n            }\n            case Type_1.Type.dictionary: return null;\n            case Type_1.Type.array: return null;\n            case Type_1.Type.null: return null;\n        }\n    };\n    /**\n     * Tries to parse a boolean value and returns it.\n     *\n     * A string is converted to a boolean:\n     * - `\"true\"`: `true`\n     * - `\"false\"`: `false`\n     *\n     * A number is converted to a boolean:\n     * - `0`: `false`\n     * - any other number: `true`\n     *\n     * @return A number value or `null` if it cannot be converted.\n     */\n    SafeAny.prototype.booleanOrNull = function () {\n        switch (this.type) {\n            case Type_1.Type.string: {\n                if (this.raw === \"true\") {\n                    return true;\n                }\n                else if (this.raw === \"false\") {\n                    return false;\n                }\n                else {\n                    return null;\n                }\n            }\n            case Type_1.Type.number: {\n                if (this.raw === 0) {\n                    return false;\n                }\n                else {\n                    return true;\n                }\n            }\n            case Type_1.Type.boolean: {\n                return this.raw;\n            }\n            case Type_1.Type.dictionary: return null;\n            case Type_1.Type.array: return null;\n            case Type_1.Type.null: return null;\n        }\n    };\n    /**\n     * Tries to return the given object as a dictionary.\n     *\n     * @return A dictionary value or `null`.\n     */\n    SafeAny.prototype.dictionaryOrNull = function () {\n        if (this.type === Type_1.Type.dictionary) {\n            return Tool_1.Tool.mapValue(this.raw, function (value) {\n                return new SafeAny(value);\n            });\n        }\n        else {\n            return null;\n        }\n    };\n    /**\n     * Tries to return the given object as an array.\n     *\n     * @return An array value or `null`.\n     */\n    SafeAny.prototype.arrayOrNull = function () {\n        if (this.type === Type_1.Type.array) {\n            return this.raw.map(function (value) {\n                return new SafeAny(value);\n            });\n        }\n        else {\n            return null;\n        }\n    };\n    // Value interface\n    /**\n     * Tries to return the given object as a string.\n     * If the conversion failes, `\"\"` is returned.\n     *\n     * See [[stringOrNull]] for conversion rules.\n     *\n     * @returns A string value or `\"\"`.\n     */\n    SafeAny.prototype.stringValue = function () {\n        return this.stringOrDefault(\"\");\n    };\n    /**\n     * Tries to return the given object as a number.\n     * If the conversion failes, `0` is returned.\n     *\n     * See [[numberOrNull]] for conversion rules.\n     *\n     * @returns A number value or `0`.\n     */\n    SafeAny.prototype.numberValue = function () {\n        return this.numberOrDefault(0);\n    };\n    /**\n     * Tries to return the given object as a boolean.\n     * If the conversion failes, `false` is returned.\n     *\n     * See [[booleanOrNull]] for conversion rules.\n     *\n     * @returns A boolean value or `false`.\n     */\n    SafeAny.prototype.booleanValue = function () {\n        return this.booleanOrDefault(false);\n    };\n    /**\n     * Tries to return the given object as a native dictionary.\n     * If the the object is no dictionary, `{}` is returned.\n     *\n     * The values are wrapped in `SafeAny`.\n     *\n     * @returns A valid dictionary.\n     */\n    SafeAny.prototype.dictionaryValue = function () {\n        if (this.type === Type_1.Type.dictionary) {\n            return Tool_1.Tool.mapValue(this.raw, function (value) {\n                return new SafeAny(value);\n            });\n        }\n        else {\n            return {};\n        }\n    };\n    /**\n     * Tries to return the given object as a native array.\n     * If the the object is no array, `[]` is returned.\n     *\n     * The values are wrapped in `SafeAny`.\n     *\n     * @returns A valid array.\n     */\n    SafeAny.prototype.arrayValue = function () {\n        if (this.type === Type_1.Type.array) {\n            return this.raw.map(function (value) {\n                return new SafeAny(value);\n            });\n        }\n        else {\n            return [];\n        }\n    };\n    // OrDefault interface\n    /**\n     * Tries to convert the object to a string value.\n     * If the conversion failed, the default value `value` will be returned.\n     *\n     * See [[stringOrNull]] for conversion rules.\n     *\n     * @param value The fallback value that will be returned if conversion failed.\n     */\n    SafeAny.prototype.stringOrDefault = function (value) {\n        var s = this.stringOrNull();\n        if (s === null) {\n            return value;\n        }\n        else {\n            return s;\n        }\n    };\n    /**\n     * Tries to convert the object to a number value.\n     * If the conversion failed, the default value `value` will be returned.\n     *\n     * See [[numberOrNull]] for conversion rules.\n     *\n     * @param value The fallback value that will be returned if conversion failed.\n     */\n    SafeAny.prototype.numberOrDefault = function (value) {\n        var n = this.numberOrNull();\n        if (n === null) {\n            return value;\n        }\n        else {\n            return n;\n        }\n    };\n    /**\n     * Tries to convert the object to a boolean value.\n     * If the conversion failed, the default value `value` will be returned.\n     *\n     * See [[booleanOrNull]] for conversion rules.\n     *\n     * @param value The fallback value that will be returned if conversion failed.\n     */\n    SafeAny.prototype.booleanOrDefault = function (value) {\n        var b = this.booleanOrNull();\n        if (b === null) {\n            return value;\n        }\n        else {\n            return b;\n        }\n    };\n    // Direct dictionary access\n    /**\n     * This function will try to return a wrapped child object.\n     * Use this function if the object is assumed to be a dictionary or an array.\n     * If `key` is a string, the root object is considered to be a dictionary and object at that key is beeing wrapped\n     * and returned.\n     * If `key` is a number, the root object is considered to be an array and the value at that index is beeing wrapped\n     * and returned.\n     *\n     * `SafeAny(null)` will be returned if the child cannot be accessed, or the type of `key` is not compatible with\n     * the subscript signature of the root object.\n     *\n     * @param key The key that should be used to access the child object.\n     */\n    SafeAny.prototype.get = function (key) {\n        if (Tool_1.Tool.isString(key)) {\n            if (this.type === Type_1.Type.dictionary) {\n                return new SafeAny(this.raw[key]);\n            }\n            else {\n                return new SafeAny(null);\n            }\n        }\n        else if (Tool_1.Tool.isNumber(key)) {\n            if (this.type === Type_1.Type.array) {\n                return new SafeAny(this.raw[key]);\n            }\n            else {\n                return new SafeAny(null);\n            }\n        }\n        else {\n            return new SafeAny(null);\n        }\n    };\n    // Other\n    /**\n     * If the object is a string, this operator treats the value as a JSON string and tries to re-parse it into an\n     * object and returns it.\n     * If the object is no string or the parsing failed, the current object will be returned without change.\n     *\n     * It replaces the unhandy manual approach of breaking the operator chain.\n     * ```typescript\n     * // Instead of\n     * SafeAny.parsedJSON(safeObject.get(\"jsonString\").stringValue()).get(0)\n     * // Do this\n     * safeObject.get(\"jsonString\").parsed().get(0)\n     * ```\n     */\n    SafeAny.prototype.parsed = function () {\n        if (this.type === Type_1.Type.string) {\n            try {\n                var parsed = JSON.parse(this.raw);\n                return new SafeAny(parsed);\n            }\n            catch (_a) {\n                return this;\n            }\n        }\n        else {\n            return this;\n        }\n    };\n    return SafeAny;\n}());\nexports.SafeAny = SafeAny;\n\n\n//# sourceURL=webpack://safe-any/./lib/SafeAny.ts?");

/***/ }),

/***/ "./lib/Tool.ts":
/*!*********************!*\
  !*** ./lib/Tool.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tool = /** @class */ (function () {\n    function Tool() {\n    }\n    /**\n     * Returns true, if the given value is a native string.\n     * @param value The value to check.\n     */\n    Tool.isString = function (value) {\n        return typeof value === \"string\" || value instanceof String;\n    };\n    /**\n     * Returns true, if the given value is a native number.\n     * @param value The value to check.\n     */\n    Tool.isNumber = function (value) {\n        return typeof value === \"number\" && isFinite(value);\n    };\n    /**\n     * Returns true, if the given value is a native boolean.\n     * @param value The value to check.\n     */\n    Tool.isBoolean = function (value) {\n        return typeof value === \"boolean\";\n    };\n    /**\n     * Returns true, if the given value is a native array.\n     * @param value The value to check.\n     */\n    Tool.isArray = function (value) {\n        return value != null && typeof value === \"object\" && value.constructor === Array;\n    };\n    /**\n     * Returns true, if the given value is a native dictionary.\n     * @param value The value to check.\n     */\n    Tool.isDictionary = function (value) {\n        return value != null && typeof value === \"object\" && value.constructor === Object;\n    };\n    /**\n     * Maps every value of a dictionary.\n     *\n     * @param dict The dictionary whose values to map.\n     * @param map The function that will be applied to every value of the dictionary,\n     */\n    Tool.mapValue = function (dict, map) {\n        var akku = {};\n        Object.keys(dict).forEach(function (key) {\n            akku[key] = map(dict[key]);\n        });\n        return akku;\n    };\n    return Tool;\n}());\nexports.Tool = Tool;\n\n\n//# sourceURL=webpack://safe-any/./lib/Tool.ts?");

/***/ }),

/***/ "./lib/Type.ts":
/*!*********************!*\
  !*** ./lib/Type.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * An enum that represents the various types of a JSON object.\n */\nvar Type;\n(function (Type) {\n    Type[Type[\"string\"] = 0] = \"string\";\n    Type[Type[\"number\"] = 1] = \"number\";\n    Type[Type[\"boolean\"] = 2] = \"boolean\";\n    Type[Type[\"dictionary\"] = 3] = \"dictionary\";\n    Type[Type[\"array\"] = 4] = \"array\";\n    Type[Type[\"null\"] = 5] = \"null\";\n})(Type = exports.Type || (exports.Type = {}));\n\n\n//# sourceURL=webpack://safe-any/./lib/Type.ts?");

/***/ })

/******/ });
});