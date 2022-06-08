import Course from "../model/lessonSchema.js"
import slugify from 'slugify';
import cloudinary from "../config/cloudinary.js";

export const addNewCourse=async (req,res)=>{

    const {title,description,slug}=req.body;
    const file=req.files.photo;

   
  
    
    try {
    const {result}=await cloudinary.v2.uploader.upload(file.tempFilePath,{folder:"courses"})
    console.log(result )
  

if(result){
   const course = await new Course({
     title,
     description,
     slug: slugify(slug),
     instructor: req.user._id,
     imagepreview: result.url,
   }).save();

   return res.status(200).json(course);
}
       

      
      
        
    } catch (error) {
 return res.json(400).json({successs:false,message:error.message})
        
    }


    
}



// get all course  admin 


export const getAdminAllCourse= async(req,res)=>{ 

    try {
        const course = await Course.find({ instructor: req.user._id }).populate(
          "instructor"
        );

        res.json(course);
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }

}

// add lesson in course 

export const addLesson=async(req,res)=>{
    const{slug}=req.params;
    const { title,link } = req.body;
    console.log("slug is here ",slug)



try {
    const course = await Course.findOneAndUpdate(
      { slug: slugify(slug) },
      { $addToSet: { lessons: { title: title, slug: slugify(title), link: link } } },
      { new: true, upsert: true }
    ).exec();
  

    console.log('lesson',course.lessons)

    if (course) {
      res.json({message:'lessons updated',course});
    } 

    
} catch (error) {
    res.json({message:error.message})
    
}

}


// delete lession from course

export const deleteLessons=(req,res)=>{
    res.json('delte course')

}