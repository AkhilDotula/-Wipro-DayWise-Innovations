import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  return (
    <div className="container mt-5">
      
      <h1 className="text-center mb-4">To-Do List- Mani
        
      </h1>
     
      <TaskInput />
     
      <Filter />
    
      <TaskList />
    </div>
  );
}

export default App;
