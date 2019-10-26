"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = require("express");

var _v = _interopRequireDefault(require("../controllers/v1"));

var router = (0, _express.Router)();
router.post('/login', _v["default"].login);