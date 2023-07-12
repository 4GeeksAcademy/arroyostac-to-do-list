import React, { useState } from 'react'

export const InputComponent = ({ onNewTask, placeHolder }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const input = inputValue.trim();

        if (input.length <= 1) return;
        setinputValue('');
        onNewTask(input);
    };

    return (
        <form className="mb-5" onSubmit={onSubmit}>
            <input
                className="form-control p-2"
                type="text"
                value={inputValue}
                onChange={onInputChange}
                placeholder={placeHolder}
            />
        </form>

    );
};