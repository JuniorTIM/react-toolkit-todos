import { createStore } from "redux";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "delete":
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo, index) => index !== action.payload),
        ],
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
