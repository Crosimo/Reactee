import React, { Component } from 'react';
import styles from "./AccueilBody.module.css"

class AccueilBody extends Component {



    changeColori() {
        document.querySelector("i").style.color = "green";

    }
    storage(arg) {
        let a = localStorage.setItem('user', arg)
        console.log(a);

    }
    loggedin() {


        let b = localStorage.getItem('user')
        document.querySelectorAll("a")[4].textContent = `Bienvenue ${b}`
        document.querySelectorAll("a")[4].style.color = "green";


        localStorage.setItem("loggedIn", "true");



    }




    checker(Utilisateurs, Password) {



        this.props.Uti.find((elem) => {
            if (elem.pseudo === Utilisateurs && elem.mdp === Password) {

                this.setState((prev) => {
                    return {
                        ...prev,
                        
                    }
                })

                console.log("you did it");
                this.changeColori()
                this.storage(elem.pseudo)
                this.loggedin()


            } else {
                this.setState(({
                    myUtiInputValue: "",
                    myPassInputValue: ""
                }))
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
        alerter: false
    }
    timer(propri, e) {
        let timing;
        this.setState((prev) => {
            return {
                ...prev,
                [propri]: e.target.value.trim()
            }

        })
        clearTimeout(timing)
        timing = setTimeout(() => {

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
                    <div className={styles.contenu}>
                        <input value={this.state.myUtiInputValue} onInput={(e) => {
                            this.timer("myUtiInputValue", e)
                        }} className={styles.lesInputs} placeholder="UserName" type="text"></input>


                        <input onInput={(e) => {
                            this.timer("myPassInputValue", e)
                        }} value={this.state.myPassInputValue} className={styles.lesInputs} placeholder="PassWord" type="password"></input>

                        <button disabled={this.state.truth} onClick={() => { this.checker(this.state.myUtiInputValue, this.state.myPassInputValue) }} className={this.state.truth ? `${styles.leButton} ${styles.leButtonGrey}` : `${styles.leButton} ${styles.leButtonRed}`}>LOGIN</button>
                        {this.state.alerter ? <p style={{ margin: 0, color: "red", position: "absolute", bottom: "-2.5rem", fontWeight: "bolder" }}> Attention, votre identifiant ou mdp ne sont pas corrects</p> : ""}
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