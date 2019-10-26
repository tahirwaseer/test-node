"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  labels: ["User"],
  "id": {
    type: "uuid",
    primary: true
  },
  "uid": {
    type: "string",
    unique: true,
    required: true
  },
  "name": "string",
  "email": "string"
};
exports["default"] = _default;