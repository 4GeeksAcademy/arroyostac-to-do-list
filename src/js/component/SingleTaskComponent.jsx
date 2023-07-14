import React, { useState } from 'react'

export const SingleTaskComponent = ({ task, onDelete }) => {

    return (
        <li className="p-3 d-flex justify-content-between" onClick={() => onDelete(task)}>
            <div className="d-flex align-items-center">
                {task}
            </div>
            <div className="">
                <span className="delete-btn">  <i className="fa-2x ms-5bi bi-x-circle-fill bg-light  text-danger rounded p-2"></i></span>
            </div>
        </li>
    )
}
