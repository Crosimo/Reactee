import React, { Component } from 'react';
import classes from "./Formulaire.module.css"
class Formulaire extends Component {
    state = {
        myInputUsername: "",
        myInputTaskname: "",
        myInputDate: "",
        myInputHourStart: "",
        myInputHourEnd :"",
    }
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
        e.preventdefault();
    }
    render() {
        console.log(this.state.myInputDate);
        return (
            <section >
                <form className={classes.leForm} onSubmit= {(e)=>this.submitter}>
                    <div className = {classes.contenant}>
                        <div className={classes.contenu}>
                            <label className={classes.myLabel}>UserName</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputUsername", e.target.value)
                            }} className ={classes.myInput} type="text" placeholder="User"></input>
                            <label className={classes.myLabel}>Name of Task</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputTaskname", e.target.value)
                            }}  className ={classes.myInput} type="text" placeholder="Task"></input>
                            <label className={classes.myLabel}>Date</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputDate", e.target.value)
                            }} className ={classes.myInput} type="date" placeholder=""></input>
                        </div>
                        <div className={classes.contenu}>
                            <label className={classes.myLabel}>Starting Hour</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputHourStart", e.target.value)
                            }} className ={classes.myInput} type="time" placeholder=""></input>
                            <label className={classes.myLabel}>End Hour</label>
                            <input onInput={(e) => {
                                this.inputRenderer("myInputHourEnd", e.target.value)
                            }} className ={classes.myInput} type="time" placeholder=""></input>
                            <button type= "submit" className ={classes.myButton}>Submit</button>
                        </div>
                    </div>
                    
                </form>
            </section>
            
        );
    }
}

export default Formulaire;