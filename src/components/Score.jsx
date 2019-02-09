import React from 'react';

import './score.css'

function Score({score=0}){
  return score > 5 ? <p className="scorecard">Next time it'll be much harder!</p> : <p className="scorecard"><span>{score}</span></p>
}

export default Score;