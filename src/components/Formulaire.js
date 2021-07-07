import React, { Component } from 'react';
import classes from "./Formulaire.module.css"
import Organisatiion from './Organisation';


class Formulaire extends Component {



    state = {
      
        myInputUsername: "",
        myInputTaskname: "",
        myInputDate: "",
        myInputDateEnd: "",
        myInputHourStart: "",
        myInputHourEnd: "",
        
          
    }
    myInputsTogether = []
    inputRenderer(prop, value) {
        
        this.setState((prev) => {
            return {
                ...prev,
               [prop] : value
            }
        })

    }
    
    chercheur(arg) {
        console.log(arg);
        localStorage.setItem('grapheJour', JSON.stringify(arg))
    }
    componentDidMount() {
        JSON.parse(localStorage.getItem("tableau")) || localStorage.setItem("tableau", JSON.stringify([]));
        JSON.parse(localStorage.getItem("grapheNom")) || localStorage.setItem("grapheNom", JSON.stringify([]))
        JSON.parse(localStorage.getItem("grapheJour")) || localStorage.setItem("grapheJour", JSON.stringify([]))
    }
    submitter(e) {
        let tab = JSON.parse(localStorage.getItem("tableau"))
        tab.push(this.state);
        localStorage.setItem("tableau", JSON.stringify(tab))
        let grapheNom = JSON.parse(localStorage.getItem("grapheNom"))
        grapheNom.push(this.state.myInputTaskname)
        localStorage.setItem('grapheNom', JSON.stringify(grapheNom))

        this.chercheur()
        




        this.setState(
            
              {  myInputUsername: "",
                myInputTaskname: "",
                myInputDate: "",
                myInputDateEnd: "",
                myInputHourStart: "",
                myInputHourEnd: "",
            }
        )
    }
    render() {
       
       
        return (
            <React.Fragment>
            <section >
                    <form className={classes.leForm} onSubmit={(e) => {
                        e.preventDefault();
                        let valeureux = Object.values(this.state).some((elem) => {
                          return  elem === ""
                              
                               
                        });
                        console.log(valeureux);
                        if (!valeureux) {
                            this.submitter(e)  
                        } else {
                            this.setState({myInputUsername: "",
                            myInputTaskname: "",
                            myInputDate: "",
                            myInputDateEnd: "",
                            myInputHourStart: "",
                                myInputHourEnd: "",
                            })
                            localStorage.setItem("checker", "true")
                        }
                        
                    }}>
                    <div className = {classes.contenant}>
                            <div className={classes.contenu}>
                                <div>
                                    
                            <label className={classes.myLabel}>UserName</label>
                            <input value = {this.state.myInputUsername} onInput={(e) => {
                            this.inputRenderer(`myInputUsername`, e.target.value);
                                    
                                }} className={classes.myInput} type="text" placeholder="User"></input>
                            </div>
                                <div>
                                    
                            <label className={classes.myLabel}>Name of Task</label>
                            <input value = {this.state.myInputTaskname}  onInput={(e) => {
                                this.inputRenderer("myInputTaskname", e.target.value)
                                }} className={classes.myInput} type="text" placeholder="Task"></input>
                                 </div>
                                <div>
                                    
                            <label className={classes.myLabel}>Date Start</label>
                            <input value = {this.state.myInputDate}  onInput={(e) => {
                                this.inputRenderer("myInputDate", e.target.value)
                                }} className={classes.myInput} type="date" ></input>
                                 </div>
                                
                        </div>
                            <div className={classes.contenu}>
                                <div>
                                    
                            <label className={classes.myLabel}>Date End</label>
                            <input value = {this.state.myInputDateEnd}  onInput={(e) => {
                                this.inputRenderer("myInputDateEnd", e.target.value)
                                }} className={classes.myInput} type="date" ></input>
                            </div>
                                <div>
                                    
                            <label className={classes.myLabel}>Starting Hour</label>
                            <input value = {this.state.myInputHourStart}  onInput={(e) => {
                                this.inputRenderer("myInputHourStart", e.target.value)
                                }} className={classes.myInput} type="time" ></input>
                                 </div>
                                <div>
                                    
                            <label className={classes.myLabel}>End Hour</label>
                            <input value = {this.state.myInputHourEnd}  onInput={(e) => {
                                this.inputRenderer("myInputHourEnd", e.target.value)
                                    }} className={classes.myInput} type="time" ></input>
                                    <button type= "submit" className ={classes.myButton}>Submit</button>
                                 </div>
                            
                            </div>
                            
                    </div>
                    
                </form>
            </section>
                <Organisatiion chercher ={this.chercheur} myInputs={ this.myInputsTogether }/>
            </React.Fragment>
        );
    }
}

export default Formulaire;