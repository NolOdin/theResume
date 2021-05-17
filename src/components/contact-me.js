import './contact-me.css'

const ContactMe = function(){
	return(

		<div className="container-fluid" id="contact-me">
		  <h1 id='h1-contact'>Contact Me</h1>

		  <div className="row" id="contact-forms">
		  <div className="col-6 offset-3">
		<form action="https://formspree.io/f/xvodkqzz" method="POST">
<div class="form-group">
   <input type="name" name="name" class="form-control" id="name" placeholder="Enter Your Name" />
</div>
<div class="form-group">
   <input type="email" name="email" class="form-control" id="email1" placeholder="Enter Your Email" />
</div>
<div class="form-group">
   <label for="message">Your Message:</label>
   <textarea class="form-control" id='text-form' name="message" rows="3"></textarea>
</div>
   <button type="submit" class="btn btn-dark" id='send-button'>Send Message</button>
</form>
	</div>
		</div>
		</div>
		)
}

export default ContactMe;