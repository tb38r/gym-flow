import { React } from 'react';
import PropTypes from 'prop-types';

import '../../../assets/css/workoutrows.css';
import InputDropdown from './InputDropDown';

const WorkoutRows = (props) => {
  return (
    <div className="workout-row">
      <InputDropdown timeoptions={[1, 2, 3, 4, 5, 6]} name="sets" exercise={props.workoutname} />

      <div className="workout-row-name">{props.workoutname}</div>
      <InputDropdown
        timeoptions={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        name="reps"
        exercise={props.workoutname}
      />
    </div>
  );
};

WorkoutRows.propTypes = {
  workoutname: PropTypes.string
};

export { WorkoutRows };
