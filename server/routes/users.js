import express from "express";
import {login,signup} from '../controllers/auth.js';
import {getAllUsers} from '../controllers/users.js';
import {updateProfile} from '../controllers/users.js';

import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/signup',signup)   //agar rout signup hai to signup func use krenge elese login
router.post('/login',login)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router