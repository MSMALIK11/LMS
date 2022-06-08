import React, { useState } from 'react';
import  reactimg  from './blogImages/r-2.jpeg';
import user from './blogImages/msmalik.jpg';
import './blogcss/blog.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart  } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
const PostCard = () => {

  
    const [save,setSave]= useState("Save")
    return (
        <div>
            <div className="post-wraper">
                <div className="post-image card">
                    <img src={reactimg} alt="" className="img-fluid" />
                    
                    <div className="user-info mt-3 d-flex align-items-center ms-3">
                        <img src={user} alt=""  className="me-4"/>
                        
                       <div className="use-box d-block">
                       <h3>MR SHAOIB</h3>
                        <p>Dec 3( 2 hour ago)</p>
                       </div>
                     
                    </div>
                   

                    <div className="post-details ms-2 p-3">
                   <Link 
                   to="/blog/title"
                  
                   style={{textDecoration:"none",color:'inherit'}}
                   >  <h2>Building a MERN stack
                            simple blog site from absolute scratch</h2>
                             </Link>

                            <ul className="d-flex">
                                <li> #react</li>
                                <li> #javascript</li>
                                <li> #webdev</li>
                            </ul>
<div className="heart d-flex justify-space-between align-items-center mt-4 ps-4">
    <div className="left d-flex">
        <p><span> <FontAwesomeIcon icon={faHeart} />  </span> 20 Reactions</p>
 
        <p className="ms-3"><span> <FontAwesomeIcon icon={faComment} />  </span> Add Comment</p>
 

    </div>
    <div className="right ms-auto">

        <button  
        className={save !=="Save"? 'bg-info':''}
        
        onClick={()=>setSave("saved")}
        
        >{save}</button>
        </div>
</div>
                            

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
