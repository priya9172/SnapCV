import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://priyagaikwad9172:snapcv25@cluster0.meuoict.mongodb.net/data')
    .then(()=>console.log('DB CONNCTED'))
}