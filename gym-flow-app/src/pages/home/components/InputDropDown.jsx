import { React, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { GymFlowContext } from '../../../context/flow-context';

import '../../../assets/css/range.css';

const InputDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const { updateWorkoutObjSet, updateWorkoutObjRep } = useContext(GymFlowContext);

  const handleOptionClick = (value, event) => {
    let inputType = event.target.getAttribute('name');

    if (inputType === 'sets') {
      updateWorkoutObjSet(event.target.getAttribute('value'), value);
    } else if (inputType === 'reps') {
      updateWorkoutObjRep(event.target.getAttribute('value'), value);
    }
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="range-dropdown">
      <div
        className={`selected-value ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedValue}
      </div>
      {isOpen && (
        <div className="options">
          {props.timeoptions.map((value) => (
            <div
              key={value}
              className={`option ${selectedValue === value ? 'active' : ''}`}
              name={props.name}
              value={props.exercise}
              onClick={(e) => handleOptionClick(value, e)}>
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

InputDropdown.propTypes = {
  timeoptions: PropTypes.arrayOf(PropTypes.number),
  exercise: PropTypes.string,
  name: PropTypes.string
};

export default InputDropdown;
