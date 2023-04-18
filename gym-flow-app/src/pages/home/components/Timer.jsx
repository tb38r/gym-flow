import React from 'react';
import '../../../assets/css/timer.css';
import RangeDropdown from './RangeDropDown';

const Timer = () => {
  return (
    <>
      <div className="timer">
        <div className="timer-title">SET TIME</div>
        <div className="timer-innerbody">
          <div className="timer-inner-type">HR</div>
          <RangeDropdown timeoptions={[0, 1, 2, 3, 4, 5]} />
        </div>
        <div className="timer-innerbody">
          <div className="timer-inner-type">MINS</div>
          <RangeDropdown timeoptions={[0, 10, 20, 30, 40, 50]} />
        </div>
      </div>
    </>
  );
};

export { Timer };
