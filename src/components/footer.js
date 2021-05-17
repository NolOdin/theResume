import './footer.css'


const Footer = function(){
	return(
		<div className="container-fluid pt-3" id='footer'>



		  
		  <div class='row'>
		  <div class="col-5 offset-4">
		  	 <a id='footer-txt'>You can also contact me on social networks </a>
		  	 <a id="button-github-footer" href="https://github.com/NolOdin" >
                 <i className="fab fa-github"></i>
        	 </a>
	         <a id="button-insta-footer" href="https://www.instagram.com/m.r_alkhasof/" >
	               <i className="fab fa-instagram"></i>
	         </a>
	         	</div>
		  </div>
		</div>
		)
}

export default Footer;