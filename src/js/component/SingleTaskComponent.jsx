import React from 'react'

export const SingleTaskComponent = ({ task, onDelete }) => {

    return (
        <div>
            <li onClick={onDelete} className="list-group-item">{task}</li>
        </div>
    )
}
