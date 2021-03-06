import Course from "../model/courseSchema.js"
import slugify from 'slugify';
import cloudinary from "../config/cloudinary.js";
import Lesson from "../model/lesson.js";
// const file = req.files.image[0].tempFilePath;

export const addNewCourse=async (req,res)=>{

    const {title,description,slug}=req.body;
    const file=req.files.image.tempFilePath;
    console.log('image file',file)

console.log('body',req.body)
    
    try {
    const result= await cloudinary.v2.uploader.upload(file,{folder:"courses"})
   
  


   const course = await Course.create({
     title,
     description,
     slug: slug,
     instructor: req.user._id,
     image: { url: result.secure_url, public_id: result.public_id },
   });
   await course.save();

   return res.status(200).json({success:true,message:"new course added"});

} catch (error) {
 return res.status(500).json({successs:false,message:error.message})
        
    }


    
}



// get all course  admin 


export const getAdminAllCourse= async(req,res)=>{ 
    



    try {
        const course = await Course.find({ instructor: req.user._id }).populate(
          "lessons instructor"
        );
        console.log('lessons',course.lessons)

        res.json({success:true,course});
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }

}

// add lesson in course 

export const addLesson=async(req,res)=>{
    let {id}=req.params;
    const { title,slug,link } = req.body;

  const file=req.files.video.tempFilePath;
 
    const course=await Course.findById(id).populate('lessons');
    if(!course) return;
    // console.log('course ',course)

    //    const result = await cloudinary.v2.uploader.upload(file, {
    //      folder: "lessons",
    //    });
    const result=await cloudinary.v2.uploader.upload(
      file,
      {
        resource_type: "video",
        public_id: `course/lessons/${title}`,
        chunk_size: 6000000,
        eager: [
          {  crop: "pad", audio_codec: "none" },
          {
            
            crop: "crop",
            gravity: "south",
            audio_codec: "none",
          },
        ],
        eager_async: true,
        eager_notification_url: "https://mysite.example.com/notify_endpoint",
      },
   
    );
   
 

    

try {

    // check lesson already exist or not 

    let lessonExist=-1;

    course.lessons.forEach(async(element,index) => {
        if(element.title==title){
lessonExist=index;
element.title=title;
element.link = { url:result.secure_url, public_id:result.public_id };


        }
        
    });

    if(lessonExist!==-1){
          await course.save();
          return res.status(200).json({
            success: true,
            message: "lessons updated successfully ",
          });
    }
 
   
    const lesson = await Lesson.create(
      {
           slug: slugify(title),
           title,
           link:{url:result.secure_url,public_id:result.public_id}
        
        }
          
    );

    await lesson.save();
    const lessonId=lesson._id;

    course.lessons.push(lessonId);
    await course.save();



      res.json({success:true,message:'New lessons added'});
   
    
} catch (error) {
    res.json({message:error.message})
    
}

}


// delete lession from course

export const deleteLessons=async(req,res)=>{

    const  {id,lessonId}=req.params;

    const course = await Course.findById(id).populate('lessons')

    console.log(req.params)

course.lessons.forEach((item,index)=>{
    if (lessonId.toString() === item._id.toString()) {
      console.log("leson found ", element);

      course.lessons.splice(index,1);
      return res.status(200).json("lessons deleted successfully")

    }else{
        console.log('lessons not found ')
    }
})
await course.save();


    res.status(200).json({success:true,message:`lessons deleted`})

}

// demo


export const demo= async(req,res)=>{
    const file=req.files.photo.tempFilePath;

    console.log('files-----',file)
        const {result}= await cloudinary.v2.uploader.upload(file,{folder:"videos"})
        return res.json(result)

}


// get single course 

export const getSingleCourse=async(req,res)=>{

  try {
  const singleCourse=await Course.findOne({title:req.params.title}).populate('lessons instructor');

  if (!singleCourse) return;
  return res.status(200).json({ success: true, singleCourse });
  
} catch (error) {
  return res.status(500).json({message:error.message})
  
}


}