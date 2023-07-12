import React, { useState } from 'react'

export const SingleTaskComponent = ({ task, onDelete }) => {

    return (
        <li className="p-3"
            onClick={() => onDelete(task)}>{task} <i className="fa-2x ms-5bi bi-x-circle-fill bg-lighttext-align-start mt-3 text-danger rounded p-2"></i>
        </li>
    )
}
