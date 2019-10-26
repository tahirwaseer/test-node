// Define a Neode Instance
const neode = require("neode")

    // Using configuration from .env file
    .fromEnv()
    // Including the models in the models/ directory
    .with({
        User: require("../../models/User"),
    })

const jwt_expire_in = '30 days'
import makeResponse from '../../helpers/responseHelper'

const register = (req, res) => {

}

const login = (req, res) => {
  neode.find(req.uid)
    .then(res => res.toJson())
    .then(user => {
      const credentials = (({ uid }) => ({ uid }))(user);
      const token = jwt.sign(credentials, process.env.JWT_PRIVATE_KEY, { expiresIn: jwt_expire_in });
    
      res.status(200).send(makeResponse({
        result: {
          token
        }
      }))
    })
    .catch(e => res.status(401).send(makeResponse({
      errors: [{
        code: '',
        message: 'Invalid token!'
      }]
    })))
}

export default {login, register}