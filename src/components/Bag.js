import React, { Component } from 'react';
import bag from '../bag.png';
import burger from '../burger.png';
import logo from '../logo.png';
import fries from '../fries.jpg';


// class Bag extends Component {

//   render() {
//     return (
//        <div className='bk-bag'>
//         <img src={burger} className={this.props.move} />
//         <img src={bag} className='bag' onClick={this.props.onClick} />
//        </div>
//     );
//   }
// }

function Bag(props) {
    let imgg;
    switch(props.move){
        case "burger":
            imgg = burger;
        break;
        case "burger-up":
            imgg = burger;
        break;
        case "logo":
            imgg = logo;
        break;
        case "logo-up":
            imgg = logo;
        break;
        case "fries":
            imgg = fries;
        break;
        case "fries-up":
            imgg = fries;
        break;
        
        }
            
    return (
       <div className='bk-bag'>
        <img src={imgg} className={props.move} />
        <img src={bag} className='bag' onClick={props.onClick} />
       </div>
    );
}
  export default Bag;
