import React from "react";

const ToDoItem = (props) => {

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li key={props.id} id={props.id}>
        {props.text}
      </li>
    </div>
  );
};

export default ToDoItem;
