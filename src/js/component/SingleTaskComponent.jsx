import React from 'react'

export const SingleTaskComponent = ({ task }) => {

    return (
        <div>
            <li className="list-group-item">{task}</li>
        </div>
    )
}
