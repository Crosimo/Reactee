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
        console.log(value);
        this.setState((prev) => {
            return {
                ...prev,
               [prop] : value
            }
        })

    }
    submitter(e) {
       console.log("okay");
        this.myInputsTogether.push(this.state)
        this.setState((prev) => {
            return {
                ...prev,
            }
        })
    }
    render() {
        console.log(this.state.myInputsTogether);
        return (
            <React.Fragment>
            <section >
                    <form className={classes.leForm} onSubmit={(e) => {
                        e.preventDefault();
                        this.submitter(e)}}>
                    <div className = {classes.contenant}>
                        <div className={classes.contenu}>
                            <label className={classes.myLabel}>UserName</label>
                            <input onInput={(e) => {
                                this.inputRenderer(`myInputUsername`, e.target.value)
                            }} className ={classes.myInput} type="text" placeholder="User"></input>
                            <label className={classes.myLabel}>Name of Task</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputTaskname", e.target.value)
                            }}  className ={classes.myInput} type="text" placeholder="Task"></input>
                            <label className={classes.myLabel}>Date Start</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputDate", e.target.value)
                            }} className ={classes.myInput} type="date" ></input>
                        </div>
                            <div className={classes.contenu}>
                            <label className={classes.myLabel}>Date End</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputDateEnd", e.target.value)
                            }} className ={classes.myInput} type="date" ></input>
                            <label className={classes.myLabel}>Starting Hour</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputHourStart", e.target.value)
                            }} className ={classes.myInput} type="time" ></input>
                            <label className={classes.myLabel}>End Hour</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputHourEnd", e.target.value)
                            }} className ={classes.myInput} type="time" ></input>
                            <button type= "submit" className ={classes.myButton}>Submit</button>
                            </div>
                            
                    </div>
                    
                </form>
            </section>
                <Organisatiion myInputs={ this.myInputsTogether }/>
            </React.Fragment>
        );
    }
}

export default Formulaire;