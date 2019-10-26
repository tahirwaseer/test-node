"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _responseHelper = _interopRequireDefault(require("../../helpers/responseHelper"));

// Define a Neode Instance
var neode = require("neode") // Using configuration from .env file
.fromEnv() // Including the models in the models/ directory
["with"]({
  User: require("../../models/User")
});

var jwt_expire_in = '30 days';

var register = function register(req, res) {};

var login = function login(req, res) {
  neode.find(req.uid).then(function (res) {
    return res.toJson();
  }).then(function (user) {
    var credentials = function (_ref) {
      var uid = _ref.uid;
      return {
        uid: uid
      };
    }(user);

    var token = jwt.sign(credentials, process.env.JWT_PRIVATE_KEY, {
      expiresIn: jwt_expire_in
    });
    res.status(200).send((0, _responseHelper["default"])({
      result: {
        token: token
      }
    }));
  })["catch"](function (e) {
    return res.status(401).send((0, _responseHelper["default"])({
      errors: [{
        code: '',
        message: 'Invalid token!'
      }]
    }));
  });
};

var _default = {
  login: login,
  register: register
};
exports["default"] = _default;