import React from 'react'
import Board from './Board'
import logo from '../resources/logo.jpeg'

class Game extends React.Component{
  render(){
  return (
    <div className='world-comp'>
      <img src={logo} className='logo' alt='logo'/>
      <div className='title'>Whack-a-TimBit</div>
      <Board />
    </div>
  )
}}

export default Game
