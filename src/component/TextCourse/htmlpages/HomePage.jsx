import React, { useState } from 'react'
import HtmlTab from './HtmlTab'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

import './styles/htmltab/htmltab.scss'


const HomePage = () => {

    const[activePage,setActivepage]= useState(1);
    return (
        <div>
        <div className="hamburger-menu">

            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
            <div className="homepage-wraper">
                
                <div className="left-side-bar">
                    
                    <HtmlTab activePage={activePage} setActivepage={setActivepage}   />
                    
                    </div>
                <div className="right-side-content">

                    {getCurrentPage(activePage)}
                </div>

            </div>
            
        </div>
    )
}

const getCurrentPage= (page)=>{
    switch(page){
        case 1:
            return  <Page1 />
    
        case 2:
            return <Page2 />
        case 3:
            return <Page3 />
        default:
            break ;    


    }
}

export default HomePage
