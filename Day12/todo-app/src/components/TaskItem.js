import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../redux/reducer';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

 
  const handleToggle = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  
  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteTask(task.id));
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center task-item"
      onClick={handleToggle}
      style={{ cursor: 'pointer' }}
    >
      
      <span className={task.completed ? 'completed-task' : ''}>
        {task.text}
      </span>
      <div>
       
        <span className={`badge badge-${task.completed ? 'success' : 'warning'} mr-2`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
        
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          ❌
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
