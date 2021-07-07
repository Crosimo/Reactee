import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2'
class Tableau extends Component {
    render() {
        let set1 = new Set(JSON.parse(localStorage.getItem('grapheJour')));
       let  arry = Array.from(set1)
    //    
        console.log(arry);
        
        return (
            <div>
                <Doughnut
                    data={{
                        labels: JSON.parse(localStorage.getItem("grapheNom")),
                        datasets: [
                            {
                                label: 'Nombre de jours restants',
                                data: arry,
                                backgroundColor:["#EA8C55", "#C75146", "#AD2E24", "#81171B", "#540804"]
                            }
                        ]
                      
                    }}
                    options ={{maintainAspectRatio: false,}}
                    width={500}
                    height = {300}
                />
            </div>
        );
    }
}

export default Tableau;
