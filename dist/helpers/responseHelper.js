"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(response) {
  return {
    response: {
      result: response.result,
      errors: response.errors
    }
  };
};

exports["default"] = _default;