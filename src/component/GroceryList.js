import React from "react";

import style from "./GroceryList.module.css";
export const GroceryList = (props) => {
  const deleteTask = (e) => {
    props.removeTask(props.taskId);
  };

  return (
    <div className={style.container}>
      <div className={!props.taskStatus ? style.taskNotDone : style.taskDone}>
        {props.taskName}
      </div>
      <button className={style.btn} onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
};
