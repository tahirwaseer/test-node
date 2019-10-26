"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _underscore = _interopRequireDefault(require("underscore"));

var _User = _interopRequireDefault(require("../../models/User"));

// Define a Neode Instance
var neode = require("neode") // Using configuration from .env file
.fromEnv() // Including the models in the models/ directory
["with"]({
  User: _User["default"]
});

var retrieve =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var authData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authData = req.authData;

            try {
              // let user = await User.findOne({ where: { store_id: authData.id } })
              // res.send(user.format())
              neode.first('User', {
                'name': 'Test'
              }).then(function (res) {
                return res && res.toJson();
              }).then(function (user) {
                if (user) {
                  res.send(user);
                } else {
                  res.status(404).send('User not foun!');
                }
              })["catch"](function (e) {
                res.status(404).send(e.stack);
              }); // res.send('Returns user')
            } catch (error) {
              res.status(404).send({
                error: error
              });
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function retrieve(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var update =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.send('Updates current user'); // const authData = req.authData
            // // Due to issue with latest version support we cannot use findOrCreate() for now so we will use manual approach to find or create new
            // try {
            //   let user = await User.findOne({ where: { store_id: authData.id } })
            //   if (!user) {
            //     // If user is not present then we will create a new user
            //     user = await User.create({store_id: authData.id})
            //   }
            //   let inputData = processRequest(req)
            //   if (inputData.password) {
            //     inputData.password = User.encode(inputData.password)
            //   }
            //   console.log(inputData)
            //   user.update(inputData)
            //     .then((user) => res.send(user.format()))
            //     .catch(error => res.status(400).send(error.stack))
            //
            // } catch (error) {
            //   res.status(404).send({ error })
            // }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function update(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var create =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var inputData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            inputData = processRequest(req);
            neode.create('User', inputData).then(function (res) {
              return res.toJson();
            }).then(function (json) {
              return res.send(json);
            })["catch"](function (err) {
              return res.status(500).send(err);
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function create(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  create: create,
  retrieve: retrieve,
  update: update
};
exports["default"] = _default;

var processRequest = function processRequest(req) {
  var inputData = _underscore["default"].pick(req.body, 'name', 'email', 'password', 'uid');

  return inputData;
};