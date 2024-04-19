// components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const toggleTodo = id => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const deleteTodo = id => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span
                        onClick={() => toggleTodo(todo.id)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
