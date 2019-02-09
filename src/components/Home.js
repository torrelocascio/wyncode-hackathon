import React from 'react';
import PrizeList from './PrizeList'
import Wheel from './Wheel';
import SpinButton from './SpinButton';

export default (props) => {
  return (
    <div>
      <h1>Spin the wheel!!</h1>
      <p>Remaining spins: {props.spins}</p>
      <Wheel />
      { props.spins ? <SpinButton spinTheWheel={props.spinTheWheel}/> : <p>No more spins for you!</p> }
      <PrizeList prizeList={props.prizeList} />
      <button onClick={props.playAgain}>Play again?</button>
    </div>
  )
}