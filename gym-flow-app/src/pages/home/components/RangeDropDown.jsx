import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../../assets/css/range.css';

const RangeDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleOptionClick = (value) => {
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
              onClick={() => handleOptionClick(value)}>
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

RangeDropdown.propTypes = {
  timeoptions: PropTypes.arrayOf(PropTypes.number)
};

export default RangeDropdown;
