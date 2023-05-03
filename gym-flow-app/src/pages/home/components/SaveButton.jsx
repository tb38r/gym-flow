import '../../../assets/css/boxes.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GymFlowContext } from '../../../context/flow-context';

const SaveButton = (props) => {
  const { workoutObjSet, workoutObjRep } = useContext(GymFlowContext);
  const handleClick = () => {
    console.log('woor', workoutObjRep);
    console.log('woos', workoutObjSet);
  };

  return (
    <>
      <button onClick={handleClick} className="workout-form-sub-btn" id={props.id} type="submit">
        SAVE
      </button>
    </>
  );
};

SaveButton.propTypes = {
  id: PropTypes.string
};

export { SaveButton };
