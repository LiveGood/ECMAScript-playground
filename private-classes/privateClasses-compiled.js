"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"]
});

var _bothResults = new WeakMap();

var _setBothResults = new WeakMap();

var _str = new WeakMap();

var _str2 = new WeakMap();

var _getStringResult = new WeakMap();

var _getCountString = new WeakMap();

var RemainderPrinter = /*#__PURE__*/function () {
  _createClass(RemainderPrinter, [{
    key: "bothResults",

    /* PRIVATE STATIC FIELDS*/

    /* PRIVATE INSTANCE FIELDS with public getter and private setter*/
    get: function get() {
      return _classPrivateFieldGet(this, _bothResults);
    }
  }, {
    key: "str1",
    get: function get() {
      return _classPrivateFieldGet(this, _str);
    },
    set: function set(newStr) {
      _classPrivateFieldSet(this, _setBothResults, {
        str1: newStr,
        str2: this.str2
      });

      _classPrivateFieldSet(this, _str, newStr);
    }
  }, {
    key: "str2",
    get: function get() {
      return _classPrivateFieldGet(this, _str2);
    },
    set: function set(newStr) {
      _classPrivateFieldSet(this, _setBothResults, {
        str1: this.str1,
        str2: newStr
      });

      _classPrivateFieldSet(this, _str2, newStr);
    }
  }]);

  function RemainderPrinter(_ref) {
    var _str3 = _ref.str1,
        _str4 = _ref.str2,
        startCount = _ref.startCount,
        endCount = _ref.endCount,
        remainderArgs = _ref.remainderArgs;

    _classCallCheck(this, RemainderPrinter);

    _setBothResults.set(this, {
      get: void 0,
      set: _set_setBothResults
    });

    _bothResults.set(this, {
      writable: true,
      value: void 0
    });

    _str.set(this, {
      writable: true,
      value: void 0
    });

    _str2.set(this, {
      writable: true,
      value: void 0
    });

    _getStringResult.set(this, {
      writable: true,
      value: function value(action) {
        switch (action) {
          case _classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _PRINT_FIRST):
            return this.str1;

          case _classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _PRINT_SECOND):
            return this.str2;

          case _classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _PRINT_BOTH):
            return this.bothResults;

          default:
            return null;
        }
      }
    });

    _getCountString.set(this, {
      writable: true,
      value: function value(num) {
        var _this$remainderArgs = _slicedToArray(this.remainderArgs, 2),
            remainder1 = _this$remainderArgs[0],
            remainder2 = _this$remainderArgs[1];

        if (_classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _checkRemainder).call(RemainderPrinter, num, remainder1) && _classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _checkRemainder).call(RemainderPrinter, num, remainder2)) return _classPrivateFieldGet(this, _getStringResult).call(this, _classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _PRINT_BOTH));else if (_classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _checkRemainder).call(RemainderPrinter, num, remainder1)) return _classPrivateFieldGet(this, _getStringResult).call(this, _classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _PRINT_FIRST));else if (_classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _checkRemainder).call(RemainderPrinter, num, remainder2)) return _classPrivateFieldGet(this, _getStringResult).call(this, _classStaticPrivateFieldSpecGet(RemainderPrinter, RemainderPrinter, _PRINT_SECOND));else return num;
      }
    });

    this.str1 = _str3;
    this.str2 = _str4;
    this.startCount = startCount;
    this.endCount = endCount;
    this.remainderArgs = remainderArgs;

    _classPrivateFieldSet(this, _setBothResults, {
      str1: _str3,
      str2: _str4
    });
  }
  /* PRIVATE INSTANCE FIELDS*/
  // result reducer


  _createClass(RemainderPrinter, [{
    key: "execute",
    value: function execute() {
      for (var i = this.startCount; i <= this.endCount; i++) {
        console.log(_classPrivateFieldGet(this, _getCountString).call(this, i));
      }
    }
  }]);

  return RemainderPrinter;
}(); // str1, str2, startCount, endCount, remainderArgs


var _PRINT_FIRST = {
  writable: true,
  value: "PRINT_FIRST"
};
var _PRINT_SECOND = {
  writable: true,
  value: "PRINT_SECOND"
};
var _PRINT_BOTH = {
  writable: true,
  value: "PRINT_BOTH"
};
var _checkRemainder = {
  writable: true,
  value: function value(num, rem) {
    return num % rem == 0;
  }
};

var _set_setBothResults = function _set_setBothResults(_ref2) {
  var str1 = _ref2.str1,
      str2 = _ref2.str2;

  _classPrivateFieldSet(this, _bothResults, str1 + str2);
};

var printer = new RemainderPrinter({
  str1: 'Fizz',
  str2: 'Buzz',
  startCount: 1,
  endCount: 5,
  remainderArgs: [3, 5]
}); // printer.bothResults = { str1: 'dumb', str2: ' access'}

printer.str1 = 'Muzzle';
console.log(printer.bothResults);
printer.execute();

try {
  // Throws error on JS run time;
  printer.bothResults = 'new';
} catch (err) {
  console.error("".concat(err.name, ": ").concat(err.message));
} //  Throws an error on Babel compile time
// printer.#setBothResults = 'new'
