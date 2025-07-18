import express from 'express'
import { getUserProfile, loginUser, registerUser } from '../controller/userController.js'
import { protect } from '../middelware/authmiddleware.js'



const userRouter=express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)


//protected route as token will required
userRouter.get('/profile', protect, getUserProfile)

export default userRouter;