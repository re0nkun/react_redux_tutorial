import React from 'react'
import Proptypes from 'prop-types'

const Square = ({ onClick, value, winner }) => (
  <button 
    className={'square' + (winner ? ' winner' : '')} 
    onClick={onClick}
  >
    {value}
  </button>
)


Square.propTypes = {
  onClick: Proptypes.func.isRequired,
  value: Proptypes.string,
  winner: Proptypes.bool.isRequired
}

export default Square