import express from 'express'

import { createResume, deleteResume, getResumeById, getUserResumes, updateResume } from '../controller/resumeController.js'
import { uploadResumeImages } from '../controller/uploadimages.js';
import { protect } from '../middelware/authmiddleware.js';





const resumeRouter=express.Router()


resumeRouter.post('/',protect,createResume)
resumeRouter.get('/',protect,getUserResumes)
resumeRouter.get('/',protect,getResumeById)


resumeRouter.put('/:id',protect,updateResume)
resumeRouter.put('/:id/upload-images',protect,uploadResumeImages)


resumeRouter.delete('/:id',protect,deleteResume)

export default resumeRouter;