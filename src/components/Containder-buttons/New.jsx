import React from 'react'

function New(props) { // Button to add new video mark
  return (
    <div className='container-new'>
        <button onClick={props.newFunction}>+</button>
    </div>
  )
}

export default New