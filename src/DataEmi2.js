import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DataEmi2 = (props) => {
    let compamount = props.data.amount * Math.pow((1+ (props.data.interest/100)),  props.data.tenure);

    const data = {
        labels: [ 'Pricipal', 'Interest'],
        datasets: [
          {
            label: '# of Votes',
            data: [props.data.amount, compamount - props.data.amount ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <>
        <div className='col-6 bg-secondary border border-primary rounded bg-opacity-10'>
        Break up of Payment

        <Pie data={data}/>
        </div>
        </>
    )
}

export default DataEmi2;