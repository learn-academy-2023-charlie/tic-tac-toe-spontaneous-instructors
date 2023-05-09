import React from "react";

const Message = ({status, full}) => {

  return(
    <>
      {status}
      {full.length < 1 && <h3>Battle has ended</h3>}
    </>
  )
}

export default Message