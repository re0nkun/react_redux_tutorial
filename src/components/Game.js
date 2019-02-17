import React, { Component } from 'react'
import Board from './Board'
import { calculateWinner } from '../utils'

export default class Game extends Component {
  render() {
    console.log(this.props)

    const {
      history,
      stepNumber,
      xIsNext,
      movesAscOrder,
      onSquareClick,
      jumpTo,
      sortMoves
    } = this.props

    // const history = this.props.history
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares) //'x'か'o'を返す

    const moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start'
      return (
        <li 
          key={move} 
          className={stepNumber === move ? 'current' : ''}
        >
          <button onClick={() => jumpTo(move)}>   
            {desc}
          </button>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'WINNER: ' + winner['winner']
    } else {  
      status = 'Next player:' + (xIsNext ? 'X' : 'o' )
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => onSquareClick(i)}
            winner_combination={(winner ? winner['winner_combination'] : [])}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{movesAscOrder ? moves : moves.reverse()}</ol>
          <a href="#" onClick={()=>sortMoves()}>Sort order</a>
          {/* <button onClick={()=>sortMoves()}>Sort order</button> */}
        </div>
      </div>
    )
  }
}