import React, { useState } from 'react'

export const SingleTaskComponent = ({ task, onDelete }) => {
    const [mouseOver, setMouseOver] = useState(false)
    const showDelete = () => {
        setMouseOver(mouseOver === false ? true : false)
        console.log(mouseOver)
    }

    return (
        <li className="p-3"
        >{task} <i onClick={onDelete} className="fa-2x ms-5bi bi-x-circle-fill bg-lighttext-align-start mt-3 text-danger rounded p-2"></i>
        </li>
    )
}
