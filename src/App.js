import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  console.table(squares)

  const handleClick = (playerChoice) => {
    // alert(playerChoice) // used to test that function was receiving data
    squares[playerChoice] = "⚔️"
    setSquares([...squares])
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square 
        squares={squares}
        handleClick={handleClick}
      />
    </>
  )
}

export default App