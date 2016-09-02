/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var v = new _vue2.default({
	  data: {
	    a: 1
	  }
	});

	v.$watch('a', function () {
	  console.log('我看到你们了');
	});

	setTimeout(function () {
	  v.a = 45;
	}, 1000);

	setTimeout(function () {
	  v.b = {};
	}, 1000);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vue;

	var _watcher = __webpack_require__(2);

	var _watcher2 = _interopRequireDefault(_watcher);

	var _observer = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Vue(options) {
	  this.$options = options;
	  this._initState();
	}

	Vue.prototype._initState = function () {
	  var _this = this;

	  var data = this._data = this.$options.data;
	  Object.keys(data).forEach(function (key) {
	    return _this._proxy(key);
	  });
	  (0, _observer.observe)(data, this);
	};

	Vue.prototype.$watch = function (expOrFn, fn, options) {
	  new _watcher2.default(this, expOrFn, fn);
	};

	Vue.prototype._proxy = function (key) {
	  var self = this;
	  Object.defineProperty(self, key, {
	    enumerable: true,
	    configurable: true,
	    get: function proxyGetter() {
	      return self._data[key];
	    },
	    set: function proxySetter(val) {
	      console.log(val);
	      self._data[key] = val;
	    }
	  });
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;

	var _dep = __webpack_require__(3);

	var _dep2 = _interopRequireDefault(_dep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uid = 0;

	function Watcher(vm, expOrFn, cb) {
	  this.cb = cb;
	  this.vm = vm;
	  this.id = uid++;
	  this.expOrFn = expOrFn;
	  this.value = this.get();
	}

	Watcher.prototype.update = function () {
	  var value = this.get();
	  if (value != this.value) {
	    this.value = value;
	    this.cb.call(this.vm);
	  }
	};

	Watcher.prototype.addDep = function (dep) {
	  dep.addSub(this);
	};

	Watcher.prototype.get = function () {
	  _dep2.default.target = this;
	  var value = this.vm._data[this.expOrFn];
	  // after get value, set null
	  _dep2.default.target = null;
	  // console.log(this.vm._data)
	  return value;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	var uid = 0;

	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}

	// type: watcher
	Dep.target = null;

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	Dep.prototype.notify = function () {
	  this.subs.forEach(function (sub) {
	    return sub.update();
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.Observer = Observer;
	exports.defineReactive = defineReactive;
	exports.observe = observe;

	var _dep = __webpack_require__(3);

	var _dep2 = _interopRequireDefault(_dep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Observer(value) {

	  this.dep = new _dep2.default();
	  this.value = value;
	  // if isArray do some....
	  this.walk(value);
	}

	Observer.prototype.walk = function (obj) {
	  var _this = this;

	  Object.keys(obj).forEach(function (key) {
	    return _this.convert(key, obj[key]);
	  });
	};

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  // 是否允许修改
	  if (property && property.configurable === false) {
	    return;
	  }

	  // 获取预先定义好的 get set 函数 (作者真机智)
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function get() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2.default.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        // if isArray do some....
	      }
	      return value;
	    },
	    set: function set(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (value === newVal) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	// 进行观察
	function observe(val) {

	  if (!val || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
	    return;
	  }
	  // console.log(val);
	  return new Observer(val);
	}

/***/ }
/******/ ]);