import React, { Component } from "react";
import AccueilBody from "./components/AccueilBody";
import Formulaire from "./components/Formulaire";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar'; 

import Footer from './components/Footer';
import Accueil from './components/Accueil';



class App extends Component {
  state = {
    Utilisateurs: [
      {
        pseudo: "Jean",
        mdp: "1234",
      },
      {
        pseudo: "Nasila",
        mdp: "5678",
      },
      {
        pseudo: "Kevin",
        mdp: "9012",
      },
    ],
  };
  render() {
      return <div>
        <Navbar User={this.state.Utilisateurs}/>
        
          <Formulaire></Formulaire>
          <AccueilBody Uti={ this.state.Utilisateurs }/>
          <Accueil />
        <Footer />
    </div>;
  }

}


export default App;
