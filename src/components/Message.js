import React from "react";
import Button from "./Button";

const Message = (props) => {
  
  return(
    <>
      {props.status}
      {
        props.full.length < 1 && 
        <h3>Battle has ended</h3>
      }
      <div>
        <Button {...props}/>
      </div>
    </>
  )
}

export default Message