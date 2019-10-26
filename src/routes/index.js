import { Router } from 'express'
const router = Router()

// Middlewares
import { verify_token, authenticate } from './middlewares/auth'

import api_v1 from './v1'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/* API v1 routes*/
router.use('/api/v1', [verify_token, authenticate], api_v1)

export default router
