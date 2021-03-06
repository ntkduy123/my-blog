(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["Zalo"] = factory();
    else
        root["Zalo"] = factory();
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
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/ 			});
                /******/ 		}
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
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 4);
        /******/ })
    /************************************************************************/
    /******/ ([
        /* 0 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var BASE_URL = "https://graph.zalo.me";
            var OAUTH_URL = "https://oauth.zaloapp.com/v3";

            var Runtime = function () {
                function Runtime() {
                    _classCallCheck(this, Runtime);
                }

                _createClass(Runtime, null, [{
                    key: "getBaseURL",
                    value: function getBaseURL() {
                        return BASE_URL;
                    }
                }, {
                    key: "getOAuthURL",
                    value: function getOAuthURL() {
                        return OAUTH_URL;
                    }
                }]);

                return Runtime;
            }();

            exports.default = Runtime;

            /***/ }),
        /* 1 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var Cookie = function () {
                function Cookie() {
                    _classCallCheck(this, Cookie);
                }

                _createClass(Cookie, null, [{
                    key: "createCookie",
                    value: function createCookie(name, value, days) {
                        if (days) {
                            var date = new Date();
                            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                            var expires = "; expires=" + date.toGMTString();
                        } else var expires = "";
                        document.cookie = name + "=" + value + expires + "; path=/";
                    }
                }, {
                    key: "readCookie",
                    value: function readCookie(name) {
                        var nameEQ = name + "=";
                        var ca = document.cookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') {
                                c = c.substring(1, c.length);
                            }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                        }
                        return null;
                    }
                }, {
                    key: "eraseCookie",
                    value: function eraseCookie(name) {
                        createCookie(name, "", -1);
                    }
                }]);

                return Cookie;
            }();

            exports.default = Cookie;

            /***/ }),
        /* 2 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _wrapFunction = __webpack_require__(7);

            var _wrapFunction2 = _interopRequireDefault(_wrapFunction);

            var _queryString = __webpack_require__(3);

            var _queryString2 = _interopRequireDefault(_queryString);

            var _safelyParseResponse = __webpack_require__(8);

            var _safelyParseResponse2 = _interopRequireDefault(_safelyParseResponse);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function createCORSRequest(method, url) {
                if (!self.XMLHttpRequest) {
                    return null;
                }
                var xhr = new XMLHttpRequest();
                var noop = function noop() {};
                if ('withCredentials' in xhr) {
                    xhr.open(method, url, true);
                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                } else if (self.XDomainRequest) {
                    xhr = new XDomainRequest();

                    try {
                        xhr.open(method, url);
                        xhr.onprogress = xhr.ontimeout = noop;
                    } catch (accessDeniedError) {
                        return null;
                    }
                } else {
                    return null;
                }

                var wrapper = {
                    send: function send(data) {
                        xhr.send(data);
                    }
                };

                var onload = (0, _wrapFunction2.default)(function () {
                    onload = noop;
                    if ('onload' in wrapper) {
                        wrapper.onload(xhr);
                    }
                }, 'entry', 'XMLHttpRequest:load');
                var onerror = (0, _wrapFunction2.default)(function () {
                    onerror = noop;
                    if ('onerror' in wrapper) {
                        wrapper.onerror(xhr);
                    }
                }, 'entry', 'XMLHttpRequest:error');

                xhr.onload = function () {
                    onload();
                };

                xhr.onerror = function () {
                    onerror();
                };

                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            onload();
                        } else {
                            onerror();
                        }
                    }
                };

                return wrapper;
            }

            function execute(url, method, params, cb) {
                params.suppress_http_code = 1;
                var data = _queryString2.default.encode(params);

                if (method != 'post') {
                    url = _queryString2.default.appendToUrl(url, data);
                    data = '';
                }

                var request = createCORSRequest(method, url);
                if (!request) {
                    return false;
                }

                request.onload = function (xhr) {
                    cb((0, _safelyParseResponse2.default)(xhr.responseText));
                };

                request.onerror = function (xhr) {
                    if (xhr.responseText) {
                        cb((0, _safelyParseResponse2.default)(xhr.responseText));
                    } else {
                        cb({
                            error: {
                                code: 1,
                                error_subcode: 1357045,
                                message: 'unknown error (empty response)',
                                status: xhr.status,
                                type: 'http'
                            }
                        });
                    }
                };
                request.send(data);
                return true;
            }

            var CORSRequest = {
                execute: execute
            };

            exports.default = CORSRequest;

            /***/ }),
        /* 3 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            function encode(bag) {
                var pairs = [];

                for (var key in bag) {
                    if (bag.hasOwnProperty(key)) {
                        var value = bag[key];
                        if (typeof value === 'undefined') {
                            return;
                        }

                        if (value === null) {
                            pairs.push(key);
                            return;
                        }

                        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
                    }
                }

                return pairs.join('&');
            }

            function decode(str, strict) {
                var data = {};
                if (str === '') {
                    return data;
                }

                var pairs = str.split('&');
                for (var i = 0; i < pairs.length; i++) {
                    var pair = pairs[i].split('=', 2);
                    var key = decodeURIComponent(pair[0]);
                    if (strict && Object.prototype.hasOwnProperty.call(data, key)) {
                        throw new URIError('Duplicate key: ' + key);
                    }
                    data[key] = pair.length === 2 ? decodeURIComponent(pair[1]) : null;
                }
                return data;
            }

            function appendToUrl(url, params) {
                return url + (url.indexOf("?") !== -1 ? '&' : '?') + (typeof params === 'string' ? params : QueryString.encode(params));
            }

            function getParameterByName(name, url) {
                if (!url) {
                    url = window.location.href;
                }
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }

            var QueryString = {
                encode: encode,
                decode: decode,
                appendToUrl: appendToUrl,
                getParameterByName: getParameterByName
            };

            module.exports = QueryString;

            /***/ }),
        /* 4 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            var _apiClient = __webpack_require__(5);

            var _apiClient2 = _interopRequireDefault(_apiClient);

            var _runtime = __webpack_require__(0);

            var _runtime2 = _interopRequireDefault(_runtime);

            var _corsRequest = __webpack_require__(2);

            var _corsRequest2 = _interopRequireDefault(_corsRequest);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var Zalo = function () {
                function Zalo() {
                    _classCallCheck(this, Zalo);
                }

                _createClass(Zalo, null, [{
                    key: 'init',
                    value: function init(options) {
                        this.options = options;
                        this.apiClient = new _apiClient2.default(options.appId, options.redirectUrl);
                    }
                }, {
                    key: 'api',
                    value: function api(path, method, params, successFunc, errorFunc) {
                        method = method.toLowerCase();
                        var uri = _runtime2.default.getBaseURL() + '/v' + this.options.version + path;
                        params.access_token = this.apiClient.accessToken;

                        // Request to OpenAPI
                        return _corsRequest2.default.execute(uri, method, params, successFunc);
                    }
                }, {
                    key: 'getLoginStatus',
                    value: function getLoginStatus(callback) {
                        return this.apiClient.getLoginStatus(callback);
                    }
                }, {
                    key: 'getAccessToken',
                    value: function getAccessToken() {
                        return this.apiClient.accessToken;
                    }
                }, {
                    key: 'login',
                    value: function login() {
                        return this.apiClient.login();
                    }
                }, {
                    key: 'logout',
                    value: function logout() {
                        return this.apiClient.logout();
                    }
                }]);

                return Zalo;
            }();

            module.exports = Zalo;

            /***/ }),
        /* 5 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// Utils


            var _runtime = __webpack_require__(0);

            var _runtime2 = _interopRequireDefault(_runtime);

            var _auth = __webpack_require__(6);

            var _auth2 = _interopRequireDefault(_auth);

            var _corsRequest = __webpack_require__(2);

            var _corsRequest2 = _interopRequireDefault(_corsRequest);

            var _localStorage = __webpack_require__(9);

            var _localStorage2 = _interopRequireDefault(_localStorage);

            var _queryString = __webpack_require__(3);

            var _queryString2 = _interopRequireDefault(_queryString);

            var _cookie = __webpack_require__(1);

            var _cookie2 = _interopRequireDefault(_cookie);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var ACCESS_TOKEN_KEY = location.hostname + '_zaccesstoken';
            var ACCESS_TOKEN_VALIDTIME_KEY = location.hostname + '_zaccesstoken_validtime';

            var ApiClient = function () {
                function ApiClient(appId, redirectUri) {
                    _classCallCheck(this, ApiClient);

                    this._appId = appId;
                    this._redirectUri = redirectUri;
                }

                _createClass(ApiClient, [{
                    key: 'parseAccessTokenFromLocal',
                    value: function parseAccessTokenFromLocal() {
                        var accessToken = _localStorage2.default.get(ACCESS_TOKEN_KEY);

                        if (accessToken) {
                            var validTime = parseInt(_localStorage2.default.get(ACCESS_TOKEN_VALIDTIME_KEY));
                            if (validTime && new Date().getTime() < validTime) {
                                this.accessToken = accessToken;
                            }
                        }
                    }
                }, {
                    key: 'getLoginStatus',
                    value: function getLoginStatus(callback) {
                        this.parseAuthenticationCode();
                        this.parseAccessTokenFromLocal();

                        if (this.authenticationCode && this.authenticationCode != null) {
                            _auth2.default.setAuthenticationCode(this.authenticationCode);
                            this.getAccessToken(function () {
                                callback && callback({ status: 'connected' });
                            }, function (res) {
                                callback && callback(res);
                            });
                        } else {
                            callback && callback({ status: 'not_connected' });
                        }
                    }
                }, {
                    key: 'parseAuthenticationCode',
                    value: function parseAuthenticationCode() {
                        // Parse authentication code from cookie
                        this.authenticationCode = _auth2.default.parseAuthenticationCode();
                        // Authentication code is not available in Cookie, get from URL parameter
                        if (!this.authenticationCode) {
                            this.authenticationCode = _queryString2.default.getParameterByName('code');
                            this.cleanURI();
                        }
                    }
                }, {
                    key: 'cleanURI',
                    value: function cleanURI() {
                        var uri = window.location.toString();
                        if (uri.indexOf("?") > 0) {
                            var clean_uri = uri.substring(0, uri.indexOf("?"));
                            window.history.replaceState({}, document.title, clean_uri);
                        }
                    }
                }, {
                    key: 'login',
                    value: function login() {
                        window.location = _runtime2.default.getOAuthURL() + '/auth?app_id=' + this._appId + '&redirect_uri=' + this._redirectUri;
                    }
                }, {
                    key: 'logout',
                    value: function logout() {
                        _auth2.default.setAuthenticationCode('', -1);
                        _localStorage2.default.set(ACCESS_TOKEN_KEY, '');
                        _localStorage2.default.set(ACCESS_TOKEN_VALIDTIME_KEY, '');
                        this._accessToken = '';
                    }
                }, {
                    key: 'getAccessToken',
                    value: function getAccessToken(successFunc, errorFunc) {
                        var _this = this;

                        if (this.accessToken) {
                            successFunc && successFunc();
                        } else {
                            _corsRequest2.default.execute(_runtime2.default.getOAuthURL() + '/access_token', 'get', {
                                app_id: this._appId,
                                redirect_uri: this._redirectUri,
                                code: this.authenticationCode,
                                isSDK: true
                            }, function (response) {
                                if (response) {
                                    if (response.access_token) {
                                        _this._accessToken = response.access_token;
                                        var expiredIn = parseInt(response.expires_in) * 1000;

                                        _localStorage2.default.set(ACCESS_TOKEN_KEY, response.access_token);
                                        _localStorage2.default.set(ACCESS_TOKEN_VALIDTIME_KEY, new Date().getTime() + expiredIn);

                                        // Auto get new Access Token after expired time
                                        setTimeout(function () {
                                            _this._accessToken = "";
                                            _this.getAccessToken();
                                        }, expiredIn);
                                    }
                                    if (successFunc && _this._accessToken) {
                                        successFunc && successFunc();
                                    } else {
                                        //Clear OAuth Code
                                        _cookie2.default.eraseCookie(_auth2.default.getKey());
                                        errorFunc && errorFunc(response);
                                    }
                                }
                            });
                        }
                    }
                }, {
                    key: 'appId',
                    get: function get() {
                        return this._appId;
                    },
                    set: function set(value) {
                        if (value) {
                            this._appId = value;
                        }
                    }
                }, {
                    key: 'redirectUri',
                    get: function get() {
                        return this._redirectUri;
                    },
                    set: function set(value) {
                        if (value) {
                            this._redirectUri = value;
                        }
                    }
                }, {
                    key: 'accessToken',
                    get: function get() {
                        return this._accessToken;
                    },
                    set: function set(value) {
                        if (value) {
                            this._accessToken = value;
                        }
                    }
                }]);

                return ApiClient;
            }();

            exports.default = ApiClient;

            /***/ }),
        /* 6 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            var _cookie = __webpack_require__(1);

            var _cookie2 = _interopRequireDefault(_cookie);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var Authentication = function () {
                function Authentication() {
                    _classCallCheck(this, Authentication);
                }

                _createClass(Authentication, null, [{
                    key: "getKey",
                    value: function getKey() {
                        return location.hostname + "_zoauth";
                    }
                }, {
                    key: "parseAuthenticationCode",
                    value: function parseAuthenticationCode() {
                        return _cookie2.default.readCookie(Authentication.getKey());
                    }
                }, {
                    key: "setAuthenticationCode",
                    value: function setAuthenticationCode(value, time) {
                        if (time) {
                            _cookie2.default.createCookie(Authentication.getKey(), value);
                        } else {
                            _cookie2.default.createCookie(Authentication.getKey(), value, time);
                        }
                    }
                }]);

                return Authentication;
            }();

            exports.default = Authentication;

            /***/ }),
        /* 7 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            var wrappers = {};

            var wrapFunction = function wrapFunction(fn, type, source) {
                var t = type || 'default';
                return function () {
                    var callee = t in wrappers ? wrappers[t](fn, source) : fn;
                    return callee.apply(this, arguments);
                };
            };

            wrapFunction.setWrapper = function (fn) {
                var type = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
                wrappers[type] = fn;
            };

            module.exports = wrapFunction;

            /***/ }),
        /* 8 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            function safelyParseResponse(rawResponse) {
                try {
                    return rawResponse === null ? ERROR : JSON.parse(rawResponse);
                } catch (ex) {
                    return ERROR;
                }
            }

            var ERROR = {
                error: {
                    code: 1,
                    error_subcode: 1357046,
                    message: 'Received Invalid JSON reply.',
                    type: 'http'
                }
            };

            safelyParseResponse.ERROR = ERROR;

            module.exports = safelyParseResponse;

            /***/ }),
        /* 9 */
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var LocalStorage = function () {
                function LocalStorage() {
                    _classCallCheck(this, LocalStorage);
                }

                _createClass(LocalStorage, null, [{
                    key: "set",
                    value: function set(key, value) {
                        window.localStorage.setItem(key, value);
                    }
                }, {
                    key: "get",
                    value: function get(key) {
                        if (key) {
                            return window.localStorage.getItem(key);
                        } else {
                            return null;
                        }
                    }
                }]);

                return LocalStorage;
            }();

            exports.default = LocalStorage;

            /***/ })
        /******/ ]);
});