import React from 'react'
import New from './Containder-buttons/New'
import Mark from './Containder-buttons/Mark'

function Container(props) { // Container with the video marks and the button to add more
    const { marks } = props

    return (
        <div className='Container'>
            <New />
            {
                marks.map((value) => { // Loop to create the marks
                    return <Mark value={value} />
                })
            }
        </div>
    )
}

export default Container