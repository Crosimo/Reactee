import React, { Component } from "react";
import styles from "./Organisatiions.module.css"
class Organisatiion extends Component {
    
    render() {
       
        console.log(this.props.myInputs);
        return (
        <React.Fragment>
        {localStorage.getItem('checker') && <div className = {styles.mySpeTr}>
                    Tous les champs doivent être remplis !
        </div>}
        <div className ={styles.controleur}>
           
            <table className={styles.myTable}>
               
                <tbody className={styles.myTableBody}>
                    
                  <tr>
                    <th className ={styles.myTh}>Firstname</th>
                    <th className ={styles.myTh}>Lastname</th>
                    <th className ={styles.myTh}>Date de départ</th>
                    <th className ={styles.myTh}>Date de fin</th>
                    <th className ={styles.myTh}>Heure de départ</th>
                    <th className ={styles.myTh}>Heure de fin</th>
                    <th className ={styles.myTh}>Temps Restant</th>
                  </tr>
            {
             JSON.parse(localStorage.getItem("tableau"))  && JSON.parse(localStorage.getItem("tableau")).map((element) => {
                    let date1 = new Date(element.myInputDate);
                    let date2 = new Date(element.myInputDateEnd)
                    const diffTime = Math.abs(date2 - date1);
                    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    let heure1 = parseInt(element.myInputHourStart.slice(0, 2)) - parseInt(element.myInputHourEnd.slice(0, 2))
                    let heure2 = parseInt(element.myInputHourStart.slice(3, 5)) - parseInt(element.myInputHourEnd.slice(3, 5))
                    if (heure1 > 0) {
                        diffDays -= 1;
                       heure1 = 24 - heure1
                    } else {
                        heure1 = -heure1
                    }
                    if (heure2 > 0) {
                        heure1 -= 1;
                        heure2 = 60 - heure2
                        // Encore changement requis yea, pour si minuit tu captesd
                    } else {
                       heure2 = -heure2
                 }
                    heure2 -= 1
                    let sec = 59;
                    console.log(diffDays, heure1, heure2);
                   
                    return (
                
               
                  <tr key = {Math.round()}>
                    <td className ={styles.myTd}>{ element.myInputUsername }</td>
                    <td className ={styles.myTd}>{ element.myInputTaskname}</td>
                    <td className ={styles.myTd}>{ element.myInputDate }</td>
                    <td   className ={styles.myTd}>{ element.myInputDateEnd }</td>
                    <td   className ={styles.myTd}>{ element.myInputHourStart }</td>
                    <td  className={styles.myTd}>{element.myInputHourEnd}</td>
                    <td className={styles.myTd}> {`${diffDays} Jours ${Math.abs(heure1)}Heures ${Math.abs(heure2)} Min ${sec} Secondes restantes` }  </td>
                  </tr>
                  
                
             
                )})  
                    }
             
            </tbody>
            </table>
            </div>
            </React.Fragment>
);
  }
}

export default Organisatiion;
