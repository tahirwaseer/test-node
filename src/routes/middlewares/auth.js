const jwt = require('jsonwebtoken')
// Load env variables
require('dotenv').config()

const jwt_private_key = process.env.JWT_PRIVATE_KEY


const auth = {
  verify_token: (req, res, next) => {
    // FORMAT OF TOKEN
    // Authorization: Bearer <access_token>
    // Verify Token
    // Get auth header value
    const bearerHeader = req.headers['authorization']
    console.log(bearerHeader)
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ')
      // Get token from array
      const bearerToken = bearer[1]
      // Set the token
      req.token = bearerToken
      // Next middleware
      next()
    } else {
      // Forbidden
      res.sendStatus(403)
    }

  },

  authenticate: (req, res, next) => {
    console.log(req.token, jwt_private_key);
    jwt.verify(req.token, jwt_private_key, (err, authData) => {
      if (err) {
        res.sendStatus(403)
      } else {
        req.authData = authData
        // Next middleware
        next()
      }
    })
  },
}

module.exports = auth
