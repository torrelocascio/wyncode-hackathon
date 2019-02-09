import React from 'react';
import PrizeItem from './PrizeItem';

export default (props) => {
  return(
    props.prizeList.map(el => <PrizeItem key={el.uuid} name={el.name} uuid={el.uuid} />)
  )
}