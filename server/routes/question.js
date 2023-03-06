import express from 'express'
import auth from '../middlewares/auth.js';

import {AskQuestion} from '../controllers/question.js'
import { getAllquestions } from '../controllers/question.js'
import { deleteQuestion } from '../controllers/question.js'
import { voteQuestion } from '../controllers/question.js'

const router = express.Router()

router.post('/Ask', auth, AskQuestion)
router.get('/get',getAllquestions)
router.delete('/delete/:id',auth, deleteQuestion)
router.patch('/vote/:id',auth, voteQuestion)

export default router