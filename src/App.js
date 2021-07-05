import React, { Component } from "react";
import AccueilBody from "./components/AccueilBody";
import Formulaire from "./components/Formulaire";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar'; 
import Organisatiion from './components/Organisation';
class componentName extends Component {
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
        <Navbar/>
        <Organisatiion/>
          <Formulaire></Formulaire>
          <AccueilBody Uti={ this.state.Utilisateurs }/>
    </div>;
  }
}

export default componentName;
