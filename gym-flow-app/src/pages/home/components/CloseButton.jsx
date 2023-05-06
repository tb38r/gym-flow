import '../../../assets/css/boxes.css';
import PropTypes from 'prop-types';
// import { useContext } from 'react';
// import { GymFlowContext } from '../../../context/flow-context';

const CloseButton = (props) => {
  // const { workoutObjSet, workoutObjRep } = useContext(GymFlowContext);
  const handleClick = (e) => {
    document.getElementById(e.target.name).style.display = 'none';

    // console.log('WORs', workoutObjRep);
    // console.log('WOSs', workoutObjSet);
  };

  return (
    <>
      <button
        onClick={handleClick}
        name={props.name}
        className="workout-form-sub-btn"
        id={props.id}
        type="submit">
        CLOSE
      </button>
    </>
  );
};

CloseButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

export { CloseButton };
