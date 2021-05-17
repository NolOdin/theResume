import React, {Component, useState} from 'react';
import Header from './header'
import Presentation from './presentation'
import AboutMe from './about-me'
import Projects from './projects'
import ContactMe from './contact-me'
import Footer from './footer.js'
import bootstrap from 'bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import logo from '../assets/binary.png';
import './navbar.css'

 function Navbar  (){

  const [isActive, setisActive] = React.useState(false);


	return(

		<div className="">
		 
  
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow p-3 mb-5 bg-body ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img id="logo" src={logo} alt=""/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#presentation">Presentation</a>
        <a class="nav-link" href="#about-me">About Me</a>
        <a class="nav-link" href="#projects">Pojects</a>
        <a class="nav-link" href="#contact-me">Contact Me</a>
        
      </div>
      <form class="d-flex">
        <a id="button-github" href="https://github.com/NolOdin" >
                 <i className="fab fa-github"></i>
        </a>
        <a id="button-insta" href="https://www.instagram.com/m.r_alkhasof/" >
               <i className="fab fa-instagram"></i>
        </a>

      </form>
    </div>
  </div>
</nav>

    <Router>
          <Switch>
            
            <Route exact path="/presentation" component={Presentation} />
            <Route exact path="/about-me" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact-me" component={ContactMe} />
          </Switch>
    </Router>

    <Header />
    <Presentation />
    <AboutMe />
    <Projects />
    <ContactMe />
    <Footer />
		</div>
		)
}

export default Navbar;
