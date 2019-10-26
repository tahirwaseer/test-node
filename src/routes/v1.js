import { Router } from 'express'
const router = Router()
import multer, { diskStorage } from 'multer'
// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path
const storage = diskStorage({
    destination: './tmp/uploads',
    filename(req, file, cb) {
        cb(null, `${+ new Date()}-${file.originalname}`)
    },
});

const upload = multer({ storage })

import {users as usersController, firebaseAuth} from '../controllers/v1'

// Users routes
router.get('/user/retrieve', usersController.retrieve)
router.put('/user/update', usersController.update)
router.post('/user/create', usersController.create)

export default router
