'use client'

import React, { useState } from 'react';
import { useTodoStore } from '@/lib/store';

export default function App() {
  const [newTodoText, setNewTodoText] = useState('');
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter a new todo"
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '5px 10px' }}>
          Add Todo
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px 0',
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '10px', padding: '2px 5px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}