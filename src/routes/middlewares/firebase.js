import admin from './firebaseAdmin'

export default firebase = {
  varifyToken: async(req, res, next) => {
    const tokenId = req.headers.authorization
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken)
      if (decodedToken) {
        req.body.uid = decodedToken.uid
        return next()
      }
    } catch (e) {
      res.status(401).send('Invalid token!')
    }
  }
}