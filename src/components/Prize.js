import React from 'react';
import {Link, withRouter} from 'react-router-dom'

export default withRouter((props) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Name: {props.name}</h1>
      <p>Description: {props.description}</p>
      {props.name !== "nothing" ? <button onClick={() => {props.removePrize(props.uuid); props.history.push(`/`)}}>Remove this prize</button> : <p>You can't remove something that does not exist :(</p>} 
    </div>
  )
})