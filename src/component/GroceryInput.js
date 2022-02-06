import React, { useState } from "react";

function GroceryInput(props) {
  const [input_, setInput_] = useState("");
  const setInputTask = (e) => {
    setInput_(e.currentTarget.value);
  };
  const sendTask = () => {
    const newTask = {
      taskName: input_,
      status: false,
      id: Math.random().toString(),
    };
    props.setTask(newTask);
    setInput_("");
  };
  return (
    <React.Fragment>
      <h3>Grocery</h3>
      <input type="text" value={input_} onChange={setInputTask}></input>
      <button onClick={sendTask}>Add Grocery</button>
    </React.Fragment>
  );
}

export default GroceryInput;
