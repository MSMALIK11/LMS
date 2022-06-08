import React from "react";
import "../styles/page1/page1.scss";
import "../styles/commen.scss";
import Footer from "./Footer";

const Page1 = () => {
  return (
    <>
    <div className="page-box pt-4">
      <h1>HTML5 Tutorial With Example</h1>
      <div className="box-card mt-4">
        <p>
       
          <b>Hypertext Markup Language(HTML)</b> is the standard markup language
          for creating web pages and web applications. Using HTML you can create
          your own website.
        </p>

        <h4>What is Hypertext Markup ?</h4>
 
        <ol className="ms-3">
          <li>
            Hypertext is a special text or links through which we can move from
            one web page to another page.
          </li>
          <li>
            Markup means simply mark-up a text document with special meaningful
            text (called tags) that tells a web browser to display the contents
            in specified structure.
          </li>
        </ol>

        <h4>HTML Extension</h4>
        <p>
          HTML files have extension <b>“.htm" </b>and <b>“.html"</b> .
        </p>

        {/* html tags */}
        <h4>HTML Tags</h4>

        <p>
          HTML tags are surrounded by angle brackets <code>(&lt;&gt;)</code>
        </p>

       



      </div>

 {/* html structure  */}
 <h4 className="my-4">HTML Page structure</h4>
        <div className="content-box card p-3">
            <div className="inner-box ms-2">

         <p>
             <code>
             &lt;html&gt;<br />
               &lt;head&gt;<br />
             &lt;title&gt;Page Title&lt;/title&gt;
             &lt;/head&gt;<br />
             &lt;body&gt;<br />
    Page Content goes here…
    &lt;/body&gt;<br />
    &lt;/html&gt;<br />
             </code>
         </p>
           
            </div>
        </div>
         {/* end  html structure  */}

         {/* Example of HTML file */}
         <h4 className="my-4">Example of HTML file</h4>

         <div className="content-box p-3">
             <h4>Example</h4>
            <div className="inner-box ms-2">

         <p>
             <code>
             &lt;!DOCTYPE html&gt;
             &lt;html&gt;<br />
               &lt;head&gt;<br />
             &lt;title&gt;Page Title&lt;/title&gt;
             &lt;/head&gt;<br />
             &lt;body&gt;<br />
  &lt;p&gt;My first HTML File. &lt;/&gt;
    &lt;/body&gt;<br />
    &lt;/html&gt;<br />
             </code>
         </p>
           
            </div>
          
        </div>



    </div>
   
    </>
  );
};


export default Page1;
