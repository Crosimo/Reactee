import React, { Component } from "react";
import styles from "./Organisatiions.module.css"
class Organisatiion extends Component {
   
    render() {
        console.log(this.props.myInputs);
    return (
        <div className ={styles.controleur}>
           
            <table className ={styles.myTable}>
            <tbody className = {styles.myTableBody}>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Date de départ</th>
                    <th>Date de fin</th>
                    <th>Heure de départ</th>
                    <th>Heure de fin</th>
                    <th>Temps Restant</th>
                  </tr>
            {
                this.props.myInputs.map((element) => {
                    console.log(element);
                    let timi = () => {
                    //     let valeur = parseInt(element.myInputHourStart) - parseInt(element.myInputHourEnd);
                    //     let 
                    //    return 
                     }
                    return (
                
               
                  <tr key = {Math.round()}>
                    <td className ={styles.myTd}>{ element.myInputUsername }</td>
                    <td className ={styles.myTd}>{ element.myInputTaskname}</td>
                    <td className ={styles.myTd}>{ element.myInputDate }</td>
                    <td className ={styles.myTd}>{ element.myInputDateEnd }</td>
                    <td className ={styles.myTd}>{ element.myInputHourStart }</td>
                    <td className={styles.myTd}>{element.myInputHourEnd}</td>
                    <td> { }  </td>
                  </tr>
                  
                
             
                )})  
                    }
             <div>
                  <button>filtre</button>
                  <button>filtre</button>
            </div>
            </tbody>
            </table>
         </div>
    );
  }
}

export default Organisatiion;
