import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducer';

const TaskInput = () => {
  // Local state for the input text.
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    dispatch(addTask(taskText));
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center mb-4">
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  );
};

export default TaskInput;
