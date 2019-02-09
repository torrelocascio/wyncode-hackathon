import React from 'react'
import timbit from '../resources/timbit.jpeg'

function Square(props) {
  return ( 
    <button className = "square"
    onClick = {
      props.onClick
    } > {
      <img className='timbit-pic' src={timbit} alt='donut-holes'/>
    } </button>
  );
}

export default Square
