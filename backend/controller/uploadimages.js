import fs from 'fs'
import path from 'path'

import Resume from '../models/resumeModel.js'
import upload from '../middelware/uploadMiddleware.js'


export const uploadResumeImages=async(req,res)=>{
    try {
        //comfiger multer handle images
        upload.fields([{name:"thumbnail"},{name:"profileImage"}])
        (req,res,async(err)=>{
            if(err){
                return res.status(400).json({message:"file upload failed",error:err.message})
            }
            const resumeId=req.params.id;
            const resume=await Resume.findOne({_id:resumeId,userId:req.user._id})

            if(!resume){
                return res.status(404).json({message:"Resume not found or unauthorized"})
            }

            //use process cws to lacate
            const uploadsFolder=path.join(process.cwd(),"uploads")
            const baseUrl=`${req.protocol}://${req.get("host")}`;
            const newThumbnail=req.files.thumbnail?.[0];
            const newProfileImage=req.files.profileImage?.[0];


            if(newThumbnail){
                if(resume.thumbnailLink){
                    const oldThumbnail=path.join(uploadsFolder,path.basename(resume.thumbnailLink));
                   if(fs.existsSync(oldThumbnail)) 
                    fs.unlinkSync(oldThumbnail)
                }
                resume.thumbnailLink=`${baseUrl}/upload/${newThumbnail.Filename}`;
            }


            //same for profilepreview image
          if(newProfileImage){
                if(resume.profileInfo ?.profilePreviewUrl){
                    const oldProfile=path.join(uploadsFolder,path.basename(resume.profileInfo.profilePreviewUrl));
                   if(fs.existsSync(oldProfile)) 
                    fs.unlinkSync(oldProfile)
                }
                resume.profileInfo.profilePreviewUrl=`${baseUrl}/uploads/${newProfileImage.Filename}` ;
            }

           await resume.save();
           res.status(200).json({
            message:"image uploaded successful",
            thumbnailLink:resume.thumbnailLink,
            profilePreviewUrl:resume.profileInfo.profilePreviewUrl
           })

        })
        
    } catch (err) {
        console.error('Error uploading image:',err);
        res.status(500).json({
            message:"failed to uploads images",
            error:err.message
        })
        
    }
}