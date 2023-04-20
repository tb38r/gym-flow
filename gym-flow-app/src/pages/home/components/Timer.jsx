import React from 'react';
import '../../../assets/css/timer.css';
import RangeDropdown from './RangeDropDown';

const Timer = () => {
  return (
    <>
      <div className="timer">
        <div className="timer-innerbody">
          <div className="timer-inner-type">SET HR</div>
          <RangeDropdown timeoptions={[0, 1, 2, 3, 4, 5]} />
        </div>
        <div className="timer-innerbody">
          <div className="timer-inner-type">SET MINS</div>
          <RangeDropdown timeoptions={[0, 10, 20, 30, 40, 50]} />
        </div>
        {/* <div className="timer-title">SET TIME</div> */}
      </div>
    </>
  );
};

export { Timer };
