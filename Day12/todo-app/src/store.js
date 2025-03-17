import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './redux/reducer';

// Configure and export the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
