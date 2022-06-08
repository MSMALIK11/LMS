import React from 'react'
import "../styles/page1/page1.scss";
import "../styles/commen.scss";
const Page3 = () => {
    return (
        <div>
             <div className="page-box pt-4">
      <h1>HTML attribute with example</h1>
      <div className="box-card mt-4">
        <p>
          
        In HTML attributes are used to add extra information to an HTML element. Attributes are always specified in the open
        ing tag. It is enclosed with a double quote.
        </p>

        <h4>There are various attributes in HTML:</h4>
 
        <ol className="ms-3">
          <li>
          href attribute
          </li>
          <li>
          src attribute
          </li>
          <li>
          width and height attribute
          </li>
          <li>
          alt attribute

          </li>
          <li>
          style attribute
          </li>
          <li>
          lang attribute
          </li>
          <li>
          title attribute
          </li>
        </ol>

        <h4>The href attribute</h4>
        <p>
        To add a link in HTML we used &lt;a&gt;tag. Inside &lt;a&gt; tag href is used to specify the address.

           
        </p>
   

      </div>

 
       
        

      
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
  &lt;h2&gt;The href Attribute &lt;/h2&gt;
  &lt;p&gt;HTML links are defined with the a tag. The link address is specified in the href attribute: &lt;/p&gt;
  <br />
  &lt;a href="https://www.studentstutorial.com" &gt; Visit Students Tutorial &lt;/a&gt;
<br />
    &lt;/body&gt;<br />
    &lt;/html&gt;<br />
             </code>
         </p>
           
            </div>
        </div>
       
        {/* end  */}
{/* src attribute  */}
<div className="box-card mt-3">
    <h4>The src Attribute</h4>
    <p>{`HTML images are specified with the <img> tag.`}</p>
    <p>The src attribute is used to specifed the source of the filename.</p>

    <div className="content-box p-3">
             
            <div className="inner-box ms-2">
            <p>
             <code>
             &lt;!DOCTYPE html&gt;<br />
             &lt;html&gt;<br />
            
             &lt;body&gt;<br />
  &lt;h2&gt;The src Attribute&lt;/h2&gt;
  &lt;p&gt;The src attribute is used to specifed the source of the filename.&lt;/p&gt;

  <br />
  &lt;img src="sun-rise.jpg" &gt;
<br />
    &lt;/body&gt;<br />
    &lt;/html&gt;<br />
             </code>
         </p>


                </div>
                </div>



</div>

{/* end src attribute */}

            
        

           
            </div>
            </div>
       
        
    )
}

export default Page3
