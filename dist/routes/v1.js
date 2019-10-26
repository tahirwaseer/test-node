"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _multer = _interopRequireWildcard(require("multer"));

var _v = require("../controllers/v1");

var router = (0, _express.Router)();
var storage = (0, _multer.diskStorage)({
  destination: './tmp/uploads',
  filename: function filename(req, file, cb) {
    cb(null, "".concat(+new Date(), "-").concat(file.originalname));
  }
});
var upload = (0, _multer["default"])({
  storage: storage
});
router.get('/user/retrieve', _v.users.retrieve);
router.put('/user/update', _v.users.update);
router.post('/user/create', _v.users.create);
var _default = router;
exports["default"] = _default;