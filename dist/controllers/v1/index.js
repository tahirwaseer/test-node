"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "users", {
  enumerable: true,
  get: function get() {
    return _users["default"];
  }
});
Object.defineProperty(exports, "firebaseAuth", {
  enumerable: true,
  get: function get() {
    return _firebaseAuth["default"];
  }
});

var _users = _interopRequireDefault(require("./users"));

var _firebaseAuth = _interopRequireDefault(require("./firebaseAuth"));

console.log(_users["default"], _users["default"].create);