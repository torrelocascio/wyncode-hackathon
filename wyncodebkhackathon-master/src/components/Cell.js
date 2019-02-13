import React from 'react';

export default class Cell extends React.Component {
state = {
    content: 'none'
}

renderCorrectContent(){
    if(this.props.value==='none'){
        return ''
    } else if (this.props.value==='bk'){
        return <img className='burger' src='https://mpng.pngfly.com/20180802/egy/kisspng-hamburger-hot-dog-cheeseburger-veggie-burger-buffa-improve-your-health-naturally-lose-weight-and-20-y-5b62f0208e7570.0245846815332106565835.jpg' alt="Logo"/>
    } else if (this.props.value==='nonbk'){
        return 'nonbk'
    }
}

    render(){
        return (
            <div className="cell">
            {this.renderCorrectContent()}
            </div>
        )
    }
}