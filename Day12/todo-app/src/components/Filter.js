import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/reducer';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  // Define available filters.
  const filters = ['All', 'Completed', 'Pending'];

  return (
    <div className="d-flex justify-content-center mb-4">
      {filters.map((f) => (
        <button
          key={f}
          className={`btn btn-${currentFilter === f ? 'primary' : 'secondary'} mx-1`}
          onClick={() => dispatch(setFilter(f))}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default Filter;
