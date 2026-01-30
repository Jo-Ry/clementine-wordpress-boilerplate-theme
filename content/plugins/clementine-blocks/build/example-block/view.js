(globalThis["webpackChunkclementine_blocks"] = globalThis["webpackChunkclementine_blocks"] || []).push([["example-block/view"],{

/***/ "../../../node_modules/webpack/hot/log.js":
/*!************************************************!*\
  !*** ../../../node_modules/webpack/hot/log.js ***!
  \************************************************/
/***/ ((module) => {

/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = "info";

function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	}
	return stack;
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=localhost&port=8887&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=localhost&port=8887&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=localhost&port=8887&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "../../../node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/stripAnsi.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/parseURL.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './socket.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './overlay.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/reloadApp.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/createSocketURL.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />










/**
 * @typedef {Object} OverlayOptions
 * @property {boolean | (error: Error) => boolean} [warnings]
 * @property {boolean | (error: Error) => boolean} [errors]
 * @property {boolean | (error: Error) => boolean} [runtimeErrors]
 * @property {string} [trustedTypesPolicyName]
 */

/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | OverlayOptions} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions
 */
var decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {
  if (typeof overlayOptions === "object") {
    ["warnings", "errors", "runtimeErrors"].forEach(function (property) {
      if (typeof overlayOptions[property] === "string") {
        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);

        // eslint-disable-next-line no-new-func
        var overlayFilterFunction = new Function("message", "var callback = ".concat(overlayFilterFunctionString, "\n        return callback(message)"));
        overlayOptions[property] = overlayFilterFunction;
      }
    });
  }
};

/**
 * @type {Status}
 */
var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};

/** @type {Options} */
var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/parseURL.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(__resourceQuery);
var enabledFeatures = {
  "Hot Module Replacement": false,
  "Live Reloading": false,
  Progress: false,
  Overlay: false
};
if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  enabledFeatures["Hot Module Replacement"] = true;
}
if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  enabledFeatures["Live Reloading"] = true;
}
if (parsedResourceQuery.progress === "true") {
  options.progress = true;
  enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
  try {
    options.overlay = JSON.parse(parsedResourceQuery.overlay);
  } catch (e) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).error("Error parsing overlay options from resource query:", e);
  }

  // Fill in default "true" params for partially-specified objects.
  if (typeof options.overlay === "object") {
    options.overlay = _objectSpread({
      errors: true,
      warnings: true,
      runtimeErrors: true
    }, options.overlay);
    decodeOverlayOptions(options.overlay);
  }
  enabledFeatures.Overlay = true;
}
if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}

/**
 * @param {string} level
 */
function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(level);
}
if (options.logging) {
  setAllLogLevel(options.logging);
}
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(enabledFeatures);
self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var overlay = typeof window !== "undefined" ? Object(function webpackMissingModule() { var e = new Error("Cannot find module './overlay.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(typeof options.overlay === "object" ? {
  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,
  catchRuntimeError: options.overlay.runtimeErrors
} : {
  trustedTypesPolicyName: false,
  catchRuntimeError: options.overlay
}) : {
  send: function send() {}
};
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }
    options.hot = true;
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }
    options.liveReload = true;
  },
  invalid: function invalid() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).info("App updated. Recompiling...");

    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Invalid");
  },
  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,
  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }
    options.overlay = value;
    decodeOverlayOptions(options.overlay);
  },
  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }
    options.reconnect = value;
  },
  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },
  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Progress", data);
  },
  "still-ok": function stillOk() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).info("Nothing changed.");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("StillOk");
  },
  ok: function ok() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Ok");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/reloadApp.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'
  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).warn("Warnings while compiling.");
    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = Object(function webpackMissingModule() { var e = new Error("Cannot find module './overlay.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("warning", error),
        header = _formatProblem.header,
        body = _formatProblem.body;
      return "".concat(header, "\n").concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/stripAnsi.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(body));
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Warnings", printableWarnings);
    for (var i = 0; i < printableWarnings.length; i++) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).warn(printableWarnings[i]);
    }
    var overlayWarningsSetting = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;
    if (overlayWarningsSetting) {
      var warningsToDisplay = typeof overlayWarningsSetting === "function" ? _warnings.filter(overlayWarningsSetting) : _warnings;
      if (warningsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "warning",
          messages: _warnings
        });
      }
    }
    if (params && params.preventReloading) {
      return;
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/reloadApp.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(options, status);
  },
  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).error("Errors while compiling. Reload prevented.");
    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = Object(function webpackMissingModule() { var e = new Error("Cannot find module './overlay.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("error", error),
        header = _formatProblem2.header,
        body = _formatProblem2.body;
      return "".concat(header, "\n").concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/stripAnsi.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(body));
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Errors", printableErrors);
    for (var i = 0; i < printableErrors.length; i++) {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).error(printableErrors[i]);
    }
    var overlayErrorsSettings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;
    if (overlayErrorsSettings) {
      var errorsToDisplay = typeof overlayErrorsSettings === "function" ? _errors.filter(overlayErrorsSettings) : _errors;
      if (errorsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "error",
          messages: _errors
        });
      }
    }
  },
  /**
   * @param {Error} error
   */
  error: function error(_error) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).error(_error);
  },
  close: function close() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/log.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).info("Disconnected!");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/sendMessage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Close");
  }
};
var socketURL = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils/createSocketURL.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(parsedResourceQuery);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './socket.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(socketURL, onSocketMessage, options.reconnect);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=localhost&port=8887&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true"));
/******/ }
]);
//# sourceMappingURL=view.js.map