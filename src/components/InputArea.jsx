import React, { useState } from "react";

const InputArea = (props) => {
  const [InputText, setInputText] = useState("");

  const handleChange = (event) => {
    //   helps to maintain a closed component
    const { value } = event.target;
    setInputText(value);
  };

  return (
    <>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={InputText} />
        <button
          onClick={() => {
            props.onAdd(InputText);
            setInputText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
    </>
  );
};

export default InputArea;
