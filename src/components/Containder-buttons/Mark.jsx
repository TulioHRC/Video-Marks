import React from 'react'

function Mark(props) { // Each video mark "button"
    const { value } = props

    return (
        <div className='container-mark'>
            <h2 id='name'>{value[0]}</h2>
        </div>
    )
}

export default Mark