import { React } from 'react';
import RangeDropdown from './RangeDropDown';
import '../../../assets/css/workoutrows.css';

const WorkoutRows = (props) => {
  return (
    <div className="workout-row">
      <label>
        <RangeDropdown timeoptions={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
      </label>
      <div className="workout-row-name">{props.workoutname}</div>
      <label>
        <RangeDropdown timeoptions={[0, 1, 2, 3, 4, 5, 6]} />
      </label>
    </div>
  );
};

export { WorkoutRows };
