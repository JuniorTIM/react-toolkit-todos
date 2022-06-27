import { createReducer } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const counterReducer = createReducer(initialState, builder => {
    builder.addCase('add', (state, action) => {
      state.todos.push(action.payload)
    })

    builder.addCase('delete', (state, action) => {
      state.todos = state.todos.filter((todo, index) => index !== action.payload)
    })
});

export const store = configureStore({
  reducer: counterReducer
})