import React, { Component } from 'react';
import styles from "./AccueilBody.module.css"
class AccueilBody extends Component {
    checker(Utilisateurs, Password) {
        
        this.props.Uti.find((elem) => {
            if (elem.pseudo === Utilisateurs && elem.mdp === Password) {
            console.log  ("you did it");   
            } else {
                this.setState((prev) => {
                    return {
                        ...prev,
                        alerter: true
                    }
                })
            }
        })
    }
    state = {
        myUtiInputValue: "",
        myPassInputValue: "",
        truth: true,
        alerter : false
    }
    timer(e) {
        let timing;
        this.setState((prev) =>  {
            return {
                ...prev,
                myUtiInputValue : e.target.value
            }
            
        })
        clearTimeout(timing)
       timing = setTimeout( ()=> {
          
           this.setState((prev) => {
               return {
                   ...prev,
                   truth: false,
               }
            })
      }, 2000)
    
    
    }
    render() {
        return (
            <section className={styles.laSection}>
                <div className={styles.contenant}>
                    <div className= {styles.contenu}>
                        <input value={this.state.myUtiInputValue} onInput={(e) => {
                            this.timer(e)
                            }} className={styles.lesInputs} placeholder="UserName" type= "text"></input>
                    
                        
                        <input onInput={(e) => {
                            this.setState((prev) =>  {
                                return {
                                    ...prev,
                                    myPassInputValue : e.target.value
                                }
                        })}} value = {this.state.myPassInputValue} className={styles.lesInputs} placeholder="PassWord" type= "password"></input>
                 
                        <button disabled={this.state.truth} onClick={() => { this.checker(this.state.myUtiInputValue, this.state.myPassInputValue) }} className={this.state.truth ? `${styles.leButton} ${styles.leButtonGrey}` : `${styles.leButton} ${styles.leButtonRed}`}>LOGIN</button>
                        {this.state.alerter ? <p style={{ margin: 0, color: "red", position: "absolute", bottom: "-2.5rem", fontWeight: "bolder"}}> Attention, votre identifiant ou mdp ne sont pas corrects</p> : ""}
                    </div>
                </div>
            </section>
        );
    }
}

// {this.state.myPassInputValue !== "" && this.state.myUtiInputValue !== ""} 
// { this.state.truth === true ? true :
// style ={ this.state.truth? {backgroundColor : "grey"}: {backgroundColor : "#AD2E24"}}

export default AccueilBody;