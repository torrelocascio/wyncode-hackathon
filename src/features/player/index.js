import React from 'react';
import { connect } from 'react-redux';
import playerWalk from './crash_v2.gif'
import handleWalk from './walk';


function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${playerWalk}')`,
        backgroundPosition: '0 0',
        height: '40px',
        width: '40px',
      }}
    />
  )
}

function MapStateToProps(state) {
  return {
    ...state.player,
  }
}


export default connect(MapStateToProps)(handleWalk(Player));
