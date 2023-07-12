import React, { useState } from 'react'

export const SingleTaskComponent = ({ task, onDelete }) => {
    const [mouseOver, setMouseOver] = useState(false)
    const showDelete = () => {
        setMouseOver(mouseOver === false ? true : false)
        console.log(mouseOver)
    }

    return (
        <div onMouseOver={showDelete} onMouseLeave={showDelete} className="">
            <li onClick={onDelete} className="list-group-item">{task} {mouseOver === true && <h1>delete</h1>}</li>
        </div>
    )
}
