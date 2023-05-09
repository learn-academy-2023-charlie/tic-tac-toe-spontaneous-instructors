import React, { useState } from 'react'
import Square from './components/Square'
import Message from './components/Message'
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

  // custom function that will take in the squares array and check for winning lines then return a string stating which player won
  const winner = (squares) => {
    // console.log("message from winner function") //tested functionality

    // array that list the potential winning combination of indexes
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    
    // for loop to help iterate through the indexes in the winningLines array
    for (let i = 0; i < winningLines.length; i++) {
      // destructure each value within the nested array at each index that is accessed
      const [a, b, c] = winningLines[i]
      // now evaluate the value at each index of the squares array by referencing the destructured value
      // if first value is not null and all conditions are true then return that the first value is the winner
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [`${squares[a]} is the winner`, false]  
      } 
    } return ["No winner yet", true]
  }

  // invoking the winner function to determine a winner everything a box is clicked due to the re-render from setter function on handleClick
  const status = winner(squares)
  
  const full = squares.filter(value => value === null)
  console.log(full)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square 
        squares={squares}
        handleClick={handleClick}
        status={status}
      />
      <Message status={status} full={full}/>
    </>
  )
}

export default App