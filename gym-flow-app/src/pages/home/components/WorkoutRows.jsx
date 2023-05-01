import { React, useContext } from 'react';
import RangeDropdown from './RangeDropDown';
import { GymFlowContext } from '../../../context/flow-context';
import '../../../assets/css/workoutrows.css';
import InputDropdown from './InputDropDown';

const WorkoutRows = (props) => {
  const { legsOpen, handleLegsClose, updateWorkoutObjSet, updateWorkoutObjRep } =
    useContext(GymFlowContext);

  return (
    <div className="workout-row">
      <InputDropdown
        timeoptions={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        name="sets"
        exercise={props.workoutname}
      />
      <div className="workout-row-name">{props.workoutname}</div>
      <InputDropdown timeoptions={[0, 1, 2, 3, 4, 5, 6]} name="reps" exercise={props.workoutname} />
    </div>
  );
};

export { WorkoutRows };
