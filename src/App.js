import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  // array to store the values of the opponent's choices
  const [squares, setSquares] = useState(Array(9).fill(null))

  // developer tool to see how the values are changing at each index
  console.table(squares)

  // condition that will toggle between first and second opponent
  const [firstOpp, setFirstOpp] = useState(true)

  // custom function that helps track the values that change based on what square each opponent clicks 
  const handleClick = (playerChoice) => {
    if(firstOpp && squares[playerChoice] === null){
      squares[playerChoice] = "⚔️"
      setFirstOpp(false)
    } else if(squares[playerChoice] === null) {
      squares[playerChoice] = "🛡"
      setFirstOpp(true)
    }
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