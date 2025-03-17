import React, { useState, useEffect } from 'react';
import { addTodo, getTodos, deleteTodo } from './db';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Fetch todos from IndexedDB on load
  useEffect(() => {
    async function fetchTodos() {
      const storedTodos = await getTodos();
      setTodos(storedTodos);
    }
    fetchTodos();
  }, []);

  // Add task
  const handleAdd = async () => {
    if (task.trim() === '') return;
    const newTodo = { id: Date.now(), text: task };
    await addTodo(newTodo);
    setTodos([...todos, newTodo]);
    setTask('');
  };

  // Delete task
  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div className="container">
      <h1>📝 To-Do PWA</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;