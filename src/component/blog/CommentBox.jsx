import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react'

import './blogcss/comment.scss';
import usercmt from './blogImages/msmalik.jpg';


const CommentBox = () => {
    const[value,setValue]=useState("")
    const [comments,setComment]= useState([]);

    const d= new Date();
    const month= d.toLocaleString('default', { month: 'long' })
    const date= d.getDate().toLocaleString()
  
    

    const addComment=(e)=>{
        e.preventDefault();
        if(!value){
            return
        }
        setComment([...comments,value]);
        setValue("");

    }

const removeCom=(index)=>{
   
    setComment((comments)=>{
        return comments.filter((arr,newindex)=> {
            return  newindex!==index
        })
    });


}

    return (
        <div>
            <div className="comment-wraper">
               <div className="comment p-3">
                   <h1>Discusion (1)</h1>

                   <form action="" className="shadow mt-4">
                       <textarea 
value={value}
                       onChange={(e)=>setValue(e.target.value)}
                       type="text" placeholder="Add to the discusion" />

                   <button
                   onClick={addComment}

                  
                   >
                  Submit
                   </button>
                     
                   </form>
                   {comments.map((comment, index) => (
                        <div
                            
                            index={index}
                            key={index}
                            
                        >
                          
                               
                                <div className="show-comment shadow mt-4">
                       <div className=" d-flex align-items-center">
                        <img src={usercmt} alt="" />
                        <h5><bold>MR SHOAIB </bold> </h5>
                        <span className="ms-3">{month} <span>{date}</span></span>
                        
                       </div>

                       <p > {comment}  </p>

                      <div className="like">
                          <span> <FontAwesomeIcon icon={faHeart} />  </span>
                          
                      </div>
                       <span  
                     
                       onClick={()=>removeCom(index)}
                       className="del-icon"><FontAwesomeIcon icon={faTrashAlt} /></span>

      
                   </div>

                           
                        </div>
                    ))}
                    


                  
               </div>
            </div>
        </div>
    )
}

export default CommentBox
