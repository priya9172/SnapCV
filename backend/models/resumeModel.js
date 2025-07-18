import mongoose from 'mongoose'


const ResumeSchema = new mongoose.Schema({
 userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
 },
 title:{
    type:String,
    required:true

 },
 thumbnailLink:{
    type:String
 },

 template:{
    theme:String,
    colorPalettel:[String]
 },

 profileInfo:{
    profilePreviewUrl:String,
    fullName:String,
    designation:String,
    summary:String,
 },
 contactInfo:{
    email:String,
    phone:String,
    location:String,
    linkedine:String,
    github:String,
    website:String
 },
 
 //work experience


 workExxpreienc:{
    company:String,
    role:String,
    startDate:String,
    endDate:String,
    description:String,
 },

 education:[
    {
        degree:String,
        institution:String,
        startDate:String,
        endDate:String,
    },
 ],

 skills:[
    {
        name:String,
        progress:Number,
    },
 ],

 projects:[
    {
      title:String ,
      description:String,
      github:String,
      liveDemo:String, 
    },
 ],

 certification :[
    {
        title:String,
        issuer:String,
        year:String,
    },
 ],

 languages:[
    {
        name:String,
        progress:Number,

    },
 ],

 interest:[String],


},
    {
        timestamps:{crestedAt:"createAt",updatedAt:"updateAt"}
    }
);

export default mongoose.model("Resume" ,ResumeSchema)