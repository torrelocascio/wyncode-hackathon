import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Prize from './Prize';
import Home from './Home';

export default (props) => {
  let routes = null 
  if(props.data.prizeList.length) {
  routes = props.data.prizeList.map(el => {
    return <Route key={el.uuid} path={`/${el.uuid}`} component={() => <Prize name={el.name} uuid={el.uuid} description={el.description} removePrize={props.removePrize}/>} />
    })
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home prizeList={props.data.prizeList} spins={props.data.spins} spinTheWheel={props.spinTheWheel} playAgain={props.playAgain}/>} />
        {routes}
      </Switch>
    </Router>
  ) 
}