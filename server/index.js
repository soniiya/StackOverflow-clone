import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/answer.js';

const app = express();

dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req,res) =>{
    res.send("this")
})

app.use('/user', userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000

const url= process.env.CONNECTION_URL

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))



