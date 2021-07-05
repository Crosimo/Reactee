import React from 'react';
import clockNavbar from '../icon-horloge.png';





export default function Navbar (){
  return (

    <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
    <div class="logoContainer">
      <img src={clockNavbar} class="logo"/>
      </div>  
    <div class="container-fluid w-50 ">
    <a class="nav-link text-light mr-5" href="#" >Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  w-100" id="navbarNavAltMarkup">
      <div class="navbar-nav w-100 d-flex justify-content-around">
        <a class="nav-link active text-light mr-2" aria-current="page" href="#">Home</a>
        <a class="nav-link text-light mr-2" href="#">Features</a>
        <a class="nav-link text-light mr-2" href="#">Pricing</a>
        <a class="nav-link disabled text-light mr-2" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
  )
}

