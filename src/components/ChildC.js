import React from 'react'

function ChildC(props) {
  return (
    <div>
      <button onClick = {props.buttonHandler}>alert</button>
    </div>
  )
}

export default ChildC
