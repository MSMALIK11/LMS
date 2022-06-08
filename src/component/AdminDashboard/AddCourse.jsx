import React, { useState } from "react";
import InputBox from "../common/InputBox";
import InputTextArea from "../common/InputTextArea";
import ImagePreview from "./ImagePreview";
import SlugBox from "./SlugBox";

const AddCourse = () => {
  const [preview, setPreview] = useState("");
const[course,setCourse]=useState({
  title:'',
description:''
});
const [slug,setSlug]=useState('')
const {title,description}=course;

  const handleImage = (e) => {
    if (e.target.files !== 0) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleChange=(e)=>{
    setCourse({...course,...preview,[e.target.name]:e.target.value});
     if(e.target.name=="title"){
        const createSlug = e.target.value.trim().split(" ").join("-");
        setSlug(createSlug);

     }
  }

 
  console.log('cpurse',course)
  return (
    <div className="container  create-course-container shadow p-4">
      <h1>Add new Course </h1>

      <form action="">
        <InputBox
          handleChange={handleChange}
          name="title"
          titleValue={course.title.length}
          text="Write course title"
          title
          value="slug"
        />
        <SlugBox value={slug} text="slug" handleSlug={handleChange} />
        <InputTextArea name="description" handleChange={handleChange} />
      </form>

      <ImagePreview handleImage={handleImage} preview={preview} />

      <button
        className={`add-lesson-button ${
          title !== "" && description !== "" && preview !== "" ? "" : "active"
        }`}
        disabled={title !== "" && description !== "" ? false : true}
      >
        Add lesson
      </button>
    </div>
  );
};

export default AddCourse;
