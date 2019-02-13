import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {
    state = {
        board: this.createBoard(this.props.height,this.props.width),
        moleArray: this.createMoleArray(this.props.bks,this.props.nonbks),
        gameWon: false,
        mineCount: this.props.mines,
        totalMolesStart: this.props.totalMolesStart,
        totalMolesLeft: this.props.totalMolesLeft,
        width:this.props.width,
        height:this.props.height,
        currentMole:0
    };

    pushMoleIntoBoard=(moleArray,boardData)=>{
        let x
        let y
        let height=this.props.height
        let width = this.props.width
        console.log('molearray',moleArray)
        for(let i = 0;i<this.state.totalMolesLeft;i++){
            setTimeout(()=>{
                x = Math.floor(Math.random() * Math.floor(height))
                console.log('x',x)
                y = Math.floor(Math.random() * Math.floor(width))
                console.log('y',y)
                let newBoard=this.state.board.map(itemRow=>{
                    itemRow.map(item=>{
                        if(item.x===x && item.y===y){
                              console.log('this.state.currentMole',this.state.currentMole)
                            item.status=moleArray[i]
        
                            return item
                        } else {
                            return item
                        }
                    })
          
                    return itemRow
                })
                this.setState((prevState) => ({
                    // moleArray: prevState.moleArray.splice(0, 1),
                    board: newBoard,
                    currentMole: prevState.currentMole+1
                  }));
            },1000)
        }
            
       
    }
    
    createBoard(height,width){
        let board = []
        console.log('pushworked')
        for (let i = 0; i<height; i++){
            board.push([])
            for (let j = 0; j<width; j++)
            board[i].push({
                x: i,
                y: j,
                status: 'none'
            })
        }
        return board
    }

    createMoleArray(bks,nonbks){

        let moleArray = []
        let sum = bks+nonbks
        let percentage = bks/nonbks
        for(let i = 0; i<sum; i++){
            if (Math.random()>percentage){
                moleArray.push('nonBK') 
            } else {
                moleArray.push('bk')
            }
        }
        return moleArray
    }

    renderBoard = (data) => {
        return data.map((datarow) => {
            return datarow.map((dataitem) => {
                return (
                    <div key={dataitem.x * datarow.length + dataitem.y}>
                        <Cell
                            value={dataitem.status}
                        />
                        {(datarow[datarow.length - 1] === dataitem) ? <div className="clear" /> : ""}
                    </div>);
            })
        });
    }

    render() {
        return (
            <div>
            <button onClick={()=>this.pushMoleIntoBoard(this.state.moleArray,this.state.board)}>Testing Moles</button>
            <div className="board">
                {
                    this.renderBoard(this.state.board)
                }
            </div>
            </div>
        );
    }
}