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
    render() {
        return (
            <section >
                <form>
                    <div className = {classes.contenant}>
                        <div className={classes.contenu}>
                            <label className={classes.myLabel}>UserName</label>
                            <input className ={classes.myInput} type="text" placeholder="User"></input>
                            <label className={classes.myLabel}>Name of Task</label>
                            <input className ={classes.myInput} type="text" placeholder="Task"></input>
                            <label className={classes.myLabel}>Date</label>
                            <input className ={classes.myInput} type="date" placeholder=""></input>
                        </div>
                        <div className={classes.contenu}>
                            <label className={classes.myLabel}>Starting Hour</label>
                            <input className ={classes.myInput} type="time" placeholder=""></input>
                            <label className={classes.myLabel}>End Hour</label>
                            <input className ={classes.myInput} type="time" placeholder=""></input>
                            <button className ={classes.myButton}>Submit</button>
                        </div>
                    </div>
                    
                </form>
            </section>
            
        );
    }
}

export default Formulaire;