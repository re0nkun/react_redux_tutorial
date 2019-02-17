import { SELECT_SQUARE, GO_TO_MOVE, MOVES_ORDER } from '../actions'
import { calculateWinner } from '../utils'

const initialState = {
  history: [{
    squares: Array(9).fill(null)
  }],
  xIsNext: true,
  stepNumber: 0,
  movesAscOrder: true,
}

const ticTacToeApp = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SQUARE:
      const history = state.history.slice(0, state.stepNumber + 1)
      const current = history[state.stepNumber]
      const squares = current.squares.slice()

      if (calculateWinner(squares) || squares[action.index]) {
        return state
      }

      squares[action.index] = state.xIsNext ? 'x' : 'o'
      
      return Object.assign({}, state, {
        // history: [
        //   ...state.history,
        //   { squares: squares }
        // ],
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !state.xIsNext,
        stepNumber: history.length
      })

    case GO_TO_MOVE:
      return Object.assign({}, state, {
        // history: state.history.slice(0, action.step + 1),
        stepNumber: action.step,
        xIsNext: (action.step % 2) ? false : true
      })
      

    case MOVES_ORDER:
      return Object.assign({}, state, {
        movesAscOrder: !state.movesAscOrder
      })


    default: return state
  }
}

export default ticTacToeApp