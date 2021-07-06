import React, { Component } from "react";

class Organisatiion extends Component {


   
    render() {
        console.log(this.props.myInputs);
    return (
        <div>
            <div>
                  <button>filtre</button>
                  <button>filtre</button>
            </div>
            <table>
            <tbody>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                  </tr>
            {
               this.props.myInputs.map((element) => {
                    console.log(element);
                    return (
                <React.Fragment >
               
                  <tr key = {Math.round()}>
                    <td>{ element.myInputUsername }</td>
                    <td>{ element.myInputTaskname}</td>
                    <td>{  }</td>
                  </tr>
                  
                
             </React.Fragment>
              )})  
                    }
            </tbody>
            </table>
         </div>
    );
  }
}

export default Organisatiion;
