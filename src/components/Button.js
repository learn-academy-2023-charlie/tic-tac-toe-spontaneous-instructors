import React from "react";

const Button = ({reStart}) => {

  return(
    <>
      <button onClick={()=>{reStart()}}>Restart the Battle</button>
    </>
  )
}

export default Button