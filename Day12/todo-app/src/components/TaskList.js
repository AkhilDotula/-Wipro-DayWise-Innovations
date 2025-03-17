import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  // Destructure tasks and active filter from Redux state.
  const { tasks, filter } = useSelector((state) => state.tasks);

  // Filter the tasks based on the current filter.
  let filteredTasks = tasks;
  if (filter === 'Completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (filter === 'Pending') {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  return (
    <ul className="list-group">
      {filteredTasks.length === 0 && (
        <li className="list-group-item text-center">No tasks available.</li>
      )}
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
