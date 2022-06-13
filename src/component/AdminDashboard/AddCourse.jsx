import React, { useState } from "react";
import InputBox from "../common/InputBox";
import InputTextArea from "../common/InputTextArea";
import ImagePreview from "./ImagePreview";
import SlugBox from "./SlugBox";
import { AddCoursesAction,getCourses } from "../../Store/Actions/courseAction";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
const AddCourse = () => {
  const [preview, setPreview] = useState("");
  const [image,setImage]=useState('');
  const [slug, setSlug] = useState("");
const[course,setCourse]=useState({
  title:'',
description:'',
image:''
});

const {title,description}=course;
const dispatch=useDispatch();
const navigate = useNavigate()
  const handleImage = (e) => {
    const file=e.target.files[0];
    if (e.target.files !== 0) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
    setImage(file)
  };
   let name, value;
  const handleChange=(e)=>{
    name = e.target.name;
    value = e.target.name === "image" ? e.target.files[0] : e.target.value;
 

    setCourse({...course,...preview,[name]:value});
     if(e.target.name=="title"){
        const createSlug = e.target.value.trim().split(" ").join("-");
      setSlug(createSlug)

     }
  }


const handleSubmit=async(e)=>{
  e.preventDefault();
const formData=new FormData();
formData.append('title',title);
formData.append('description',description);
formData.append('slug',slug);
formData.append('image',image);


  await dispatch(AddCoursesAction(formData,image,slug));
  dispatch(getCourses());
  navigate("/dashboard/profile")



}
 
console.log('course',course)

  return (
    <div className=" create-course-container p-4">
      <h1>Add new Course </h1>

      <form action="" className="shadow p-4">
        <InputBox
          handleChange={handleChange}
          name="title"
          titleValue={course.title.length}
          text="Write course title"
          title
        
        />
        <SlugBox value={slug} text="slug" name="slug" handleSlug={handleChange} />
        <InputTextArea name="description" handleChange={handleChange} />
      <ImagePreview name="image" handleImage={handleImage} preview={preview} />

      <button
        className={`add-lesson-button  ${
          title !== "" && description !== "" && preview !== "" ? "" : "active"
        }`}
        disabled={title !== "" && description !== "" ? false : true}
        onClick={handleSubmit}
      >
        Add lesson
      </button>
      </form>


    </div>
  );
};

export default AddCourse;
