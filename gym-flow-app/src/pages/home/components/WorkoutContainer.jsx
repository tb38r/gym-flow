import React from "react";
import "../../../assets/css/home.css";

const WorkoutContainer = (props) => {
  const HandleClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      <div onClick={HandleClick} className="workout-box" id={props.id}>
        <div className="workout-box-title">{props.title}</div>
        <div className="workout-box-activities"></div>
        {props.workouts}
      </div>
    </>
  );
};

export { WorkoutContainer };
