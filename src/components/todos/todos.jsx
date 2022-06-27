import "./todos-styles.css";
import React from "react";
import { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [empty, setEmpty] = useState(false)
  const dispatch = useDispatch();

  function handleEmpty () {
    setEmpty(!empty)
  }

  function handleDeleteBtn(i) {
    dispatch({ type: "delete", payload: i });
  }

  return (
    <div className="todos">
      {todos.map((element, index) => {
        return (
          <div className={empty ? 'todo check' : 'todo'}>
            <input type="checkbox" onClick={() => handleEmpty(index)} checked={empty} />
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
