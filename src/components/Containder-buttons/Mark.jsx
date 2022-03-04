import React from 'react'

function Mark(props) { // Each video mark "button"
    const { value } = props // Value[0] = Name; Value[1] = URL

    return (
        <div className='container-mark' key={value[1]}>
            <h2 id='name'>{value[0]}</h2>
        </div>
    )
}

export default Mark