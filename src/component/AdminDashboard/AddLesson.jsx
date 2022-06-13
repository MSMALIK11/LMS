import React,{useRef,useState} from 'react';
import InputBox from '../common/InputBox';
import {useDispatch} from 'react-redux';
import { addLesson } from '../../Store/Actions/courseAction';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
const AddLesson = () => {
  const [lesson,setLesson]=useState({
    title:'',
    video:''
  })
  const {title,video}=lesson;

  const {id}=useParams();
  const data=useSelector((state)=>state.addLesson)

console.log('addlesonr,',data)
  const dispatch=useDispatch();
  const[Video,setVideo]=useState('');
  let name,value;
const handleChange=(e)=>{

  name = e.target.name;
  value = e.target.name === "video" ? e.target.files[0] : e.target.value;
    setLesson({ ...lesson, [name]: value });
}
  const videoHandle=(e)=>{
    setVideo(e.target.files[0])

  }
  const addLessonHandler=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('title',title);
    formData.append('video',Video);


dispatch(addLesson(formData,Video,id));


  }
  
  const videoRef=useRef();
  return (
    <div className=" add-lesson-wraper">
      <span className="add-new-lesson-title">Add New lesson</span>
      <p>Add at lest 5 lesson to publish the course</p>
      <InputBox
        label="Lesson Title"
        text="Enter Lesson Title"
        handleChange={handleChange}
        name="title"
   
      />

      <div className="media-box shadow">
        <button className="shadow" onClick={() => videoRef.current.click()}>
          Upload
        </button>
        <input
          onChange={videoHandle}
          name="video"
          type="file"
          accept="video/*"
          ref={videoRef}
          style={{ display: "none" }}

        />
        <span>File Format: .mp4</span>
        {Video && (
          <video width="400" height="300" controls>
            <source src={Video} type="video/mp4" />
          </video>
        )}

        <span className="icon" onClick={addLessonHandler}>
          <i className="bi bi-cloud-plus"> </i>
        </span>
      </div>
    </div>
  );
}

export default AddLesson