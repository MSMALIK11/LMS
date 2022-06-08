import React from 'react'
import './blogcss/blog.scss';
import LeftSidebar from './LeftSidebar';

import PostCards from './PostCards';

const HomeBlog = () => {
    return (
        <div className="mt-5">
            <div className="blog-wraper">
            <div className="row">
                <div className="col-lg-3"> <LeftSidebar/>  </div>
                <div className="col-lg-6"><PostCards  /></div>
                <div className="col-lg-3">right side content </div>
            </div>
            </div>
           
            
        </div>
    )
}

export default HomeBlog
