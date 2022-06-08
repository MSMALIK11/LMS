import React from 'react';
import '../styles/page1/page1.scss';


const page2 = () => {
    return (
        <div>
            <div className="page-box pt-2">
            <h1>HTML Element with example</h1>
          
                <div className="box-card my-3">
                    
                    <p>An HTML Consists of a “Start Tag”, “Element content” and “End Tag”.</p>
                    <p>Syntax:</p>
                    <p> &lt;p&gt;My Name is Rocky &lt;p&gt; </p>

                   

                </div>

                <div className="content-box p-3">
             <h4>Example</h4>
            <div className="inner-box ms-2">

         <p>
             <code>
             &lt;!DOCTYPE html&gt;
             &lt;html&gt;<br />
            
             &lt;body&gt;<br />
  &lt;p&gt;My Name is Rocky &lt;/&gt;
    &lt;/body&gt;<br />
    &lt;/html&gt;<br />
             </code>
         </p>
           
            </div>
        </div>

        {/* Nested html element satrt */}
        <div className="box-card my-3">
            <h1>Nested HTML element</h1>
            <p>In some cases that an HTML element can contain one or more element.</p>
            <p>Let’s see the below example for the better understanding.</p>
           


        </div>

        <div className="content-box py-3">
            <div className="inner-box ms-2">
            <p>
             <code>
         
             &lt;html&gt;<br />
             &lt;body&gt;<br />
             &lt;p&gt;&lt;strong&gt; this is a strong paragraph &gt;/&lt; &lt;/&gt;<br />
  
           

    &lt;/body&gt;<br />
    &lt;/html&gt;<br />
             </code>
         </p>
            </div>
        
        </div>


        {/* end of nested html element */}
        {/* start link example */}

        <div className="box-card my-3">
            <h4> &lt;link&gt; Element</h4>
            <p>The &lt;link&gt; element is generally used to load the css file for both internal and external file.

</p>

        </div>
        <div className="content-box py-3">
            <div className="inner-box ms-2">
            <p>
             <code>
         
             &lt;html&gt;<br />
            
             &lt;body&gt;<br />

  &lt;a&gt; href=<span className="text-info">"www.google.com"</span>&gt; visit google.com    &lt;/a&gt;
  <br />
    &lt;/body&gt;<br />
    &lt;/html&gt;<br />
             </code>
         </p>
            </div>
        
        </div>
        {/* end link example */}


            </div>
            
        </div>
    )
}

export default page2
