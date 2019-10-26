"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("./middlewares/auth");

var _v = _interopRequireDefault(require("./v1"));

var router = (0, _express.Router)(); // Middlewares

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
/* API v1 routes*/

router.use('/api/v1', [_auth.verify_token, _auth.authenticate], _v["default"]);
var _default = router;
exports["default"] = _default;