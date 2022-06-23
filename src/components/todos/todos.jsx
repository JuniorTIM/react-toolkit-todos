import "./todos-styles.css";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleDeleteBtn(i) {
    dispatch({ type: "delete", payload: i });
  }

  return (
    <div className="todos">
      {todos.map((element, index) => {
        return (
          <div className="todo">
            {element}
            <button onClick={() => handleDeleteBtn(index)} className="deleteBtn">
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
