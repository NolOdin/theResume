import React, {useState} from 'react';
import certHtml from '../assets/cert-html.jpg'
import certJs from '../assets/cert-js.JPG'
import certCss from '../assets/cert-css.jpg'
import './about-me.css'
import htmlIcon from'../assets/html-icon.png'
import cssIcon from '../assets/css-icon.png'
import jsIcon from '../assets/js-icon.png'



const AboutMe = function(){

	return(

		<div className="container-fluid" id="about-me">
		  <h1 id='h1-con'>About Me</h1>
		<div id="me-txt"><p>I started learning and practicing in <a id="txt-18">2018</a> and since then</p>
		 <p>I have been practicing and building web applications in <a id="txt-20">2020</a></p> 
		 <p>I started learning React and some of the frameworks that come with it.</p> 
		 <p>I also created a full stack of a nodejs application</p></div>


		 <div className='static-icons'>
		 <div class="row" id="row-items">
		  <div class="col-4"><img src={htmlIcon} alt="Placeholder image" id='icon-html' /></div>
		  <div class="col-4"><img src={cssIcon} alt="Placeholder image" id='icon-html'  /></div>
		  <div class="col-4"><img src={jsIcon} alt="Placeholder image" id='icon-html' /></div>
    <div class="col-4">
    <button type="button" class="btn btn-dark" id="cert-button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  My Certificate
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">HTML Certificate</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
       <img src={certHtml} id="cert-html" alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </div>
    <div class="col-4">
    <button type="button" class="btn btn-dark" id="cert-button"  data-bs-toggle="modal" data-bs-target="#exampleModal-1">
   My Certificate
</button>

<div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">CSS Certificate</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
       <img src={certCss} id="cert-html" alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </div>
    <div class="col-4">
<button type="button" class="btn btn-dark" id="cert-button" data-bs-toggle="modal" data-bs-target="#exampleModal-2">
   My Certificate
</button>

<div class="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">JS Certificate</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
       <img src={certJs} id="cert-html" alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    </div>
  </div>
			     
			      		
			      
							
			      
					
			</div>

			<div className='modals'>









			</div>	
		</div>
		)
}

export default AboutMe;


