import React, { useState } from 'react'

import './styles/htmltab/htmltab.scss';

import ScrollToTop from "react-scroll-to-top";

const HtmlTab = ({activePage,setActivepage}) => {
    const [tab,setActivetab]= useState("Introduction")

  const TabButton= ({name,page,activeTab,handleTab})=>{

    console.log(tab)
      return (
          <div  
          onClick={()=>handleTab(name)}
          
          >
              <ScrollToTop smooth  />
              <button
      onClick={()=> setActivepage(page)}

      className={`tabbtn${activeTab?'activeBtn bg-info text-light ':null}`}
      >
    {name} 
      
      </button>
          </div>
      )
  }



    return (
        <div>
            <div className="htmltab"> 
                

<div className="inner-tab">


 
    <div className="btn-group-vertical" handleTab={setActivetab}>

        <TabButton name="Introduction" handleTab={setActivetab}  page={1}   activeTab={tab==="Introduction"?true:false} />
        <TabButton name="HTML Element" handleTab={setActivetab} page={2} activeTab={tab==="HTML Element"?true:false}  />
        <TabButton name="HTML Atribute" handleTab={setActivetab} page={3} activeTab={tab==="HTML Atribute"?true:false}  />
        <TabButton name="HTML Heading" handleTab={setActivetab} page={4} activeTab={tab==="HTML Heading"?true:false}  />
        <TabButton name="HTML Paragraph" handleTab={setActivetab} page={5} activeTab={tab==="HTML paragraph"?true:false}  />
        <TabButton name="HTML Color" handleTab={setActivetab} page={6} activeTab={tab==="element"?true:false}  />
        <TabButton name="HTML Image" handleTab={setActivetab} page={7} activeTab={tab==="element"?true:false}  />
        <TabButton name="HTML List" handleTab={setActivetab} page={8} activeTab={tab==="element"?true:false}  />
        <TabButton name="HTML Block" handleTab={setActivetab} page={9} activeTab={tab==="element"?true:false}  />
        <TabButton name="HTML Iframe" handleTab={setActivetab} page={10} activeTab={tab==="element"?true:false}  />

       

   
            
           
       

    </div>

</div>
          
           
            

           
            </div>


            
        </div>
    )
}





export default HtmlTab
