"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _firebaseAdmin = _interopRequireDefault(require("./firebaseAdmin"));

var _default = firebase = {
  varifyToken: function () {
    var _varifyToken = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res, next) {
      var tokenId, decodedToken;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tokenId = req.headers.authorization;
              _context.prev = 1;
              _context.next = 4;
              return _firebaseAdmin["default"].auth().verifyIdToken(idToken);

            case 4:
              decodedToken = _context.sent;

              if (!decodedToken) {
                _context.next = 8;
                break;
              }

              req.body.uid = decodedToken.uid;
              return _context.abrupt("return", next());

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              res.status(401).send('Invalid token!');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    function varifyToken(_x, _x2, _x3) {
      return _varifyToken.apply(this, arguments);
    }

    return varifyToken;
  }()
};

exports["default"] = _default;