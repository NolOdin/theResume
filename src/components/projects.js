import './projects.css'
import gg from '../assets/star.jpg'
import Prog1 from '../assets/1-prog.jpg'
import Prog2 from '../assets/2-prog.jpg'
import Prog3 from '../assets/3-prog.jpg'
import Proj1 from '../assets/proj-1.png'
import Proj2 from '../assets/proj-2.png'
import Proj3 from '../assets/proj-3.png'
const Projects = function(){
	return(

<div className="container is-fullhd" id="projects">
		  <h1 id='h1-pro'>Projects</h1>
		  <div className='proj-text' id="proj-text">
		  	<a >
		  		Here you can see some of my projects
		  	</a>
		  </div>
	<div class="row" id="row-proj">	 

<div class="col-4" id="proj-item-1" >
<button type="button rounded" class="btn btn-dark" id="proj-button"  data-bs-toggle="modal" data-bs-target="#exampleModal-4">
<img src={Prog1} id="proj-img" />
</button>
	<div class="modal fade" id="exampleModal-4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Presentation Page</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
       <img src={Proj1} id="my-proj-button" alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-4" ><button type="button rounded" class="btn btn-dark" id="proj-button"  data-bs-toggle="modal" data-bs-target="#exampleModal-5">
<img src={Prog2} id="proj-img" />
</button>
	<div class="modal fade" id="exampleModal-5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Free Ton Projects</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
       <img src={Proj2} id="my-proj-button" alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div></div>
<div class="col-4" ><button type="button rounded" class="btn btn-dark" id="proj-button"  data-bs-toggle="modal" data-bs-target="#exampleModal-6">
<img src={Prog3} id="proj-img" />
</button>
	<div class="modal fade" id="exampleModal-6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">MAAD Store</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
       <img src={Proj3} id="my-proj-button" alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div></div>
</div>
		
		 
		  
		</div>
		)
}

export default Projects;