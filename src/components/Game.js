import React from 'react'
import Board from './Board'

class Game extends React.Component{
  render(){
  return (
    <div className='world-comp'>
      <div className='title'>Whack-a-TimBit</div>
      <Board />
    </div>
  )
}}

export default Game
