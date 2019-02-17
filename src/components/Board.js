import React, { Component } from 'react'
import Proptypes from 'prop-types'
import Square from './Square'

export default class Board extends Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winner={this.props.winner_combination.includes(i)}
      />
    )
  }

  render() {
    let rows = []
    for (let i = 0; i <= 6; i += 3) { //0,3,6
      rows.push(
      <div className='board-row' key={i}>
        {[...Array(3)].map((x, idx) => ( //0,1,2
          <span key={i + idx}>{this.renderSquare(i + idx)}</span>
        )
        )}
      </div>)
    }
    return (
      <div>
        <div className="status"></div>
        {rows}

        {/* <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
      </div>
    )
  }
}

Board.protoTypes = {
  squares: Proptypes.arrayOf(Proptypes.shape({
    value: Proptypes.string.isRequired,
    winner: Proptypes.bool.isRequired
  })).isRequired,
  onSquareClick: Proptypes.func.isRequired
}