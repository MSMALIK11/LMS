import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookDead, faHeart, faHome, faList, faMailBulk, faPaintBrush, faPhone, faQuestion, faVideo } from '@fortawesome/free-solid-svg-icons'

const LeftSidebar = () => {
    return (
        <div className="">
            <ul>

                <li><span> <FontAwesomeIcon icon={faHome} /></span> Home</li>
                
                <li><span> <FontAwesomeIcon icon={faBookDead} /></span> Reading List</li>
                <li><span> <FontAwesomeIcon icon={faList} /></span> listings</li>
                <li><span> <FontAwesomeIcon icon={faMailBulk} /></span> podcasts</li>
                <li><span> <FontAwesomeIcon icon={faVideo} /></span> videos</li>
                <li><span> <FontAwesomeIcon icon={faPaintBrush} /></span> tags</li>
                <li><span> <FontAwesomeIcon icon={faQuestion} /></span> faq   </li>
                <li><span> <FontAwesomeIcon icon={faHeart} /></span> About</li>
                <li><span> <FontAwesomeIcon icon={faPhone} /></span> Content</li>


            </ul>
            
        </div>
    )
}

export default LeftSidebar
