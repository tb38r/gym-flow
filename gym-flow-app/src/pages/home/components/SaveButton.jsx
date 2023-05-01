import '../../../assets/css/boxes.css';
import PropTypes from 'prop-types';

const SaveButton = (props) => {
  return (
    <>
      <button className="workout-form-sub-btn" id={props.id} type="submit">
        SAVE
      </button>
    </>
  );
};

SaveButton.propTypes = {
  id: PropTypes.string
};

export { SaveButton };
