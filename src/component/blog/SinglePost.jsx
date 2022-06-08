import React, { useState } from "react";

import "./blogcss/singlepost.scss";
import simg from "./blogImages/r-2.jpeg";
import user from "./blogImages/msmalik.jpg";

import CommentBox from "./CommentBox";
const SinglePost = () => {

  const [follow,setFollow]=useState(false)

  const d= new Date();
  const month= d.toLocaleString('default', { month: 'long' })
  const date= d.getDate().toLocaleString();
  const min= d.getMinutes();

  return (
    <div className="mt-5 single-wraper">
      <div className="single-box row">
       

        <div className="center-box col-sm-12 col-lg-9">
          <div className="single-post">
            <img src={simg} alt="" className="img-fluid" />

            <div className=" p-4">
              <div className="user-info mt-3 d-flex align-items-center ms-3">
                <img src={user} alt="" className="me-4 card-img" />

                <div className="use-box d-block">
                  <h3>MR SHAOIB</h3>
                  <p><span>{month}</span> <span>{date} </span> ( <span>{min}</span> min ago)</p>
                </div> 
{/* 
                <div className="ms-auto">
                <span>
             
             <FontAwesomeIcon icon={faHeart} /> (1) Like
           </span>
          

                </div> */}
              


              </div>
              <h1>
                Building a MERN stack simple blog site from absolute scratch
              </h1>
              <p className="mt-5 fs-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique magnam eligendi nostrum ut illo, error, aut totam
                dolorum, inventore accusamus repudiandae ab molestiae
                dignissimos alias fuga impedit laborum dolor beatae doloremque
                iure quas soluta eos. Officia odio reiciendis quisquam dicta,
                
                accusantium dolorum ducimus.
              </p>
            </div>

            <CommentBox />
          </div>
         
        </div>

        <div className="author-info right-box d-sm-none d-md-block d-lg-block col-sm-12 col-lg-3">
        
          <div className=" card">
          <span className="dark"></span>
            <div className="author-wraper d-flex">
            
              <img src={user} alt="" />
              <h3 className="mt-4 ms-3">MR SHOAIB</h3> 

             
            </div>
            <button  
            className={follow==true?"bg-white text-dark shadow border":""}
            
            onClick={()=>setFollow(!follow)}
            >{follow?"following":"follow"}</button>

            <div className="details p-3">

              <p>hey there! My name is  Shoaib i am  MERN stack developer </p>
              <p>Coading is my passion</p>
              <h4><bold>Location</bold></h4>
              <p>Glocal University Mirzapur</p>
              <h4><bold>Education</bold></h4>
              <p>Bachelor's Of Computer Application </p>
              <h4><bold>Work</bold></h4>
              <p>MERN STACK DEVELOPER  </p>
              <h4><bold>joined </bold></h4>
              <p> 4 dec 2021  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
