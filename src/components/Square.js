import React from 'react'
import timbit from '../resources/timbit.jpeg'
import $ from 'jquery'

function Square() { 
  
  

  return (     
    
    < button className = "square"
    onClick = {
      function () {
        $(".timbit-pic").toggle();

      }}> 
      < div className = 'img-div'>
        < img className = 'timbit-pic'
        src = {
          timbit
        }
        alt = 'donut-holes'        
        />
      </div>
      
    </button>
  );
}

export default Square
