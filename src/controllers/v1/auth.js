// const Store = require('../../models').Store;
// const jwt = require('jsonwebtoken');

// const jwt_expire_in = '30 days';
// const jwt_private_key = process.env.JWT_PRIVATE_KEY
// const admin_secret_key = process.env.JWT_PRIVATE_KEY

// const login = async (req, res) => {
//   let access, decoded, customer_id, customer_name, issued_at, expires_at;
//   try {
//     // extract and decode encrypted access token -
//     access = req.body.access;
//     decoded = jwt.decode(access, admin_secret_key);
//     ({id: customer_id, name: customer_name, created_at: issued_at} = decoded);
//   } catch (error) {
//     return res.status(400).send();
//   }

//   // check for expiration
//   let now = new Date().getTime();
//   const access_token_duration = 5 * 60000; // Tells the access token expiry duration in miliseconds
//   expires_at = parseInt(issued_at) + access_token_duration;
//   if (now <= expires_at) {
//     // check if store exists in local db
//     let store = await Store.findOne({ where: { customer_id: customer_id } });
//     if (!store) {
//       // store does not exist in local db, call medtryck api to fetch data
//       const storeData = {
//         customer_id: customer_id,
//         name: customer_name,
//       };
//       // if store data is authenticated from medtryck, create a new store in local db
//       store = await Store.create(storeData);
//     }
//     // create a new auth token for JWT authenication
//     const credentials = (({ id, customer_id, name }) => ({ id, customer_id, name }))(store);
//     const token = jwt.sign(credentials, jwt_private_key, { expiresIn: jwt_expire_in });
//     // return response with token and store data
//     return res.status(200).send({ token, store: store.format() });
//   }
//   return res.status(401).send({ message: 'Authentication failed!' });
// };

// const refresh = async (req, res) => {

//   const credentials = (({id, customer_id, name}) => ({id, customer_id, name}))(jwt.decode(req.token));
//   // Authenticate
//   let store = await Store.findOne({ where: { customer_id: credentials.customer_id } });
//   if (store) {
//     // Create new token
//     const token = jwt.sign(credentials, jwt_private_key, { expiresIn: jwt_expire_in });
//     // return response with token and store data
//     return res.status(200).send({ token });
//   }else{
//     return res.status(401).send('Invalid token!');
//   }
// };

// module.exports = { login, refresh };
