import linux from '../assets/linux-icon.png'
import reactIcon from '../assets/react_original.png'
import nodeJs from '../assets/nodejs.png'
import gitIcon from '../assets/git-icon.png'
import reduxIcon from '../assets/redux-icon.png'
import vueIcon from '../assets/vuejs-icon.png'
import bootstrapIcon from '../assets/bootstrap-icon.png'
import './presentation.css'

const Presentation = function(){
	return(

		<div className="container is-fullhd" id="presentation">
		  <h1 id='h1-pres'>Presentation</h1>
		  
		  <div className='pres-text'>
		  <p>Dear my name is M.R Im Web Developer </p>
		  <p> I worked in web development 2 years.</p>
		  <p id="here-you">Here you see my stack and my technical skills </p>
		 </div>
		 <div className='tech-icons'>
		 <p id="tech-icons-p"><img src={linux} alt="" id='linux-icon' />
		  <img src={nodeJs} alt="" id='node-js' />
		  <img src={reactIcon} alt="" id='react-icon' /></p>
		  <img src={vueIcon} alt="" id='vuejs-icon'/>
		  <img src={reduxIcon} alt="" id='redux-icon'/>
		  <img src={bootstrapIcon} alt="" id='bootstrap-icon'/>
		  <img src={gitIcon} alt=""  id='git-icon'/>


		 </div>
		  



		</div>
		)
}

export default Presentation;