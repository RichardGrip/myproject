import React from "react";
import AddTask from "./AddTask";

export default function Task(props) {
  return (
    <div className="task">
      <div className="trim">
        <AddTask key={Math.random()} value={props.text} />
      </div>
    </div>
  );
}
