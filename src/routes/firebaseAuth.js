import { Router } from 'express';
const router = Router()

import firebaseAuth from '../controllers/v1'

router.post('/login', firebaseAuth.login)