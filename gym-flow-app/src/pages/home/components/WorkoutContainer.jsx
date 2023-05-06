import { React } from 'react';
import PropTypes from 'prop-types';

const WorkoutContainer = (props) => {
  const HandleClick = (e) => {
    e.preventDefault();
    let clickedOption = e.target.id;
    console.log(clickedOption);

    switch (clickedOption) {
      case 'legs':
        document.getElementById('box-legs').style.display = 'block';
        break;
      case 'chest-triceps':
        document.getElementById('box-chest').style.display = 'block';
        break;
      case 'back-biceps':
        document.getElementById('box-back').style.display = 'block';
        break;
      case 'abs':
        document.getElementById('box-abs').style.display = 'block';
        break;
    }
  };

  return (
    <>
      <div onClick={HandleClick} className="workout-box" id={props.id}>
        <div onClick={HandleClick} className="workout-box-title" id={props.id}>
          {props.title}{' '}
        </div>
        <div onClick={HandleClick} className="workout-box-activities" id={props.id}>
          {' '}
          {props.workouts}
        </div>
      </div>
      {props.legsmodal}

      {props.chestmodal}

      {props.backmodal}

      {props.absmodal}
    </>
  );
};

WorkoutContainer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  workouts: PropTypes.string,
  absmodal: PropTypes.object,
  backmodal: PropTypes.object,
  chestmodal: PropTypes.object,
  legsmodal: PropTypes.object
};

export { WorkoutContainer };
