// components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text, completed: false } });
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;
