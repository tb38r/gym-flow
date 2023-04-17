import React from "react";
import "../../../assets/css/home.css";

const WorkoutContainer = (props) => {
  const HandleClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      <div onClick={HandleClick} className="workout-box" id={props.id}>
        <div onClick={HandleClick} className="workout-box-title" id={props.id}>{props.title} </div>
        <div onClick={HandleClick} className="workout-box-activities" id={props.id}> {props.workouts}</div>
       
      </div>
    </>
  );
};

export { WorkoutContainer };
