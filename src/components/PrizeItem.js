import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <Link to={props.uuid}>
      <p>{props.name}</p>
    </Link>
  )
}