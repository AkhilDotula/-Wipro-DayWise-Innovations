import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state includes an array of tasks and a current filter value.
const initialState = {
  tasks: [],
  filter: 'All',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
  
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare(text) {
        return { payload: { id: nanoid(), text, completed: false } };
      },
    },

    
    toggleTaskStatus(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

  
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Export action creators and reducer.
export const { addTask, toggleTaskStatus, deleteTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
