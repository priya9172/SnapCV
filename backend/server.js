import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRouter.js';

import path from 'path'
import { fileURLToPath } from 'url';
import resumeRouter from './routes/resumeRouter.js';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


const app=express()
const PORT=5000;
app.use(cors({
  origin: 'http://localhost:5173', // or whatever port your frontend runs on
  credentials: true
}));
// app.use(cors())


//connect DB
connectDB();


//middleware
app.use(express.json())

app.use('/api/auth',userRouter);
app.use('/api/resume',resumeRouter)

app.use(
    '/uploads',
    express.static(path.join(__dirname,'uploads'),{
        setHeaders:(res,_path)=>{
            res.set('Access-Control-Allow-Origin','http://localhost:5173/')
        }
    })
)




//routs

app.get('/',(req,res)=>{
    res.send('API WORKING')
})


app.listen(PORT,()=>{
    console.log(`server working on http://localhost:${PORT}`)
})
