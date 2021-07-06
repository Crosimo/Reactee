import React from 'react';
import clockNavbar from '../icon-horloge.png';
import render from 'dom-serializer';



class Navbar extends React.Component {
  
  

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
      <div className="logoContainer">
      <img src={clockNavbar} className="logo"/>
      </div>  
      <div className="container-fluid w-50 ">
      <a className="nav-link text-light mr-5" href="https://stackedit.io/app" >Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="https://stackedit.io/appnavbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  w-100" id="navbarNavAltMarkup">
      <div className="navbar-nav w-100 d-flex justify-content-around">
        <a className="nav-link active text-light mr-2" aria-current="page" href="https://stackedit.io/app">Home</a>
        <a className="nav-link text-light mr-2" href="https://stackedit.io/app">Features</a>
        <a className="nav-link text-light mr-2" href="https://stackedit.io/app">Pricing</a>
        
        <a className="nav-link disabled text-light mr-2" href="#" tabIndex="-1" aria-disabled="true">LOG IN/OUT</a>

      </div>
      <i class="fas fa-user-alt"></i>
    </div>
  </div>
    </nav>
    );
  }
}

export default Navbar;



 