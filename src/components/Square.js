import React from 'react'

const Square = (props) => {

  return (
    <div className='grid'>
      {props.squares.map((value, index) => {
        return(
          <div className="square" key={index}>
            {value}
          </div>
        )
      })}
    </div>
    
  )
}
export default Square