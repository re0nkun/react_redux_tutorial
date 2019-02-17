import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ticTacToeApp from './reducers'
import GameContainer from './containers/GameContainer.js'
import './index.css'


const store = createStore(ticTacToeApp)

ReactDOM.render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
)