import express from "express";
import auth from '../middlewares/auth.js';

import {postAnswer,deleteAnswer} from '../controllers/Answer.js';

const router = express.Router();

router.patch('/post/:id', auth, postAnswer)      //patch() => for updating datbase question-schema record
router.patch('/delete/:id', auth, deleteAnswer)

export default router