"use strict";

var jwt = require('jsonwebtoken'); // Load env variables


require('dotenv').config();

var jwt_private_key = process.env.JWT_PRIVATE_KEY;
var auth = {
  verify_token: function verify_token(req, res, next) {
    // FORMAT OF TOKEN
    // Authorization: Bearer <access_token>
    // Verify Token
    // Get auth header value
    var bearerHeader = req.headers['authorization'];
    console.log(bearerHeader); // Check if bearer is undefined

    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      var bearer = bearerHeader.split(' '); // Get token from array

      var bearerToken = bearer[1]; // Set the token

      req.token = bearerToken; // Next middleware

      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  },
  authenticate: function authenticate(req, res, next) {
    console.log(req.token, jwt_private_key);
    jwt.verify(req.token, jwt_private_key, function (err, authData) {
      if (err) {
        res.sendStatus(403);
      } else {
        req.authData = authData; // Next middleware

        next();
      }
    });
  }
};
module.exports = auth;