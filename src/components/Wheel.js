import {PieChart, Pie, Cell, Label} from 'recharts';
import data from '../utils/wheelElements';
import React from 'react';



export default (props) => {
  return (
    <PieChart width={730} height={250}>
      <Pie data={data} dataKey="value" nameKey="name">
       {
         data.map((entry, index) => {
           return (
            <Cell key={`cell-${index}`} fill={entry.color}>
              <Label value="value" offset={0} position="insideBottom" color="black"/>
            </Cell>
           )
         })
       }
      </Pie>
    </PieChart>
  )
}