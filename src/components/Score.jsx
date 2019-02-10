import React from 'react';

import './score.css'

function Score({score=0}){
  let scored = score > 5 ? "Next time it'll be much harder!" : score.toString()
  return <p className="scorecard"><span>{scored}</span></p>
}

export default Score;