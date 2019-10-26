import _ from 'underscore'
import UserModel from '../../models/User'
// Define a Neode Instance
const neode = require("neode")

    // Using configuration from .env file
    .fromEnv()

    // Including the models in the models/ directory
    .with({
        User: UserModel,
    })

const retrieve = async (req, res) => {
  const authData = req.authData
  try {
    // let user = await User.findOne({ where: { store_id: authData.id } })
    // res.send(user.format())
    neode.first('User', {'name': 'Test'})
      .then(res => {
        return res && res.toJson()
      })
      .then(user => {
        if(user) {
          res.send(user)
        } else {
          res.status(404).send('User not foun!')
        }
      })
      .catch(e => {
          res.status(404).send(e.stack)
      })
    // res.send('Returns user')
  } catch (error) {
    res.status(404).send({ error })
  }
}

const update = async (req, res) => {
  res.send('Updates current user')
  // const authData = req.authData
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
}

const create = async (req, res) => {
  let inputData = processRequest(req)
  neode.create('User', inputData)
    .then(res => {
        return res.toJson()
    })
    .then( json => res.send(json))
    .catch(err => res.status(500).send(err))
}

export default {create, retrieve, update }

const processRequest = (req) => {
  let inputData = _.pick(req.body,
    'name', 'email', 'password', 'uid'
  )

  return inputData
}
