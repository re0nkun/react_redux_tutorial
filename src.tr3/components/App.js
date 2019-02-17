import React, { Component } from 'react'
// import BoardContainer from '../containers/BoardContainer'
// import GameContainer from '../containers/GameContainer'
import Board from './Board'
import Game from './Game'

export default class App extends Component {
  render() {
    return (
      // <div className="game">
      //   <div className="game-board">
      //     <BoardContainer/>
      //   </div>
      //   <GameContainer/>
      // </div>
      
      <Game/>
    )
  }
}
