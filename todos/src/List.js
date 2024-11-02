import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todoSlice';
import './List.css';

export function List() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleAddTodo = () => {
    if (todo.trim().length > 0) {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <div className="todo-container">
      <h1>TODO</h1>
      <div className="todo-form">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <h2>TODOS</h2>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className="todo-item">{item}</li>
        ))}
      </ul>
      <footer>Total tasks: {todos.length}</footer>
    </div>
  );
}


