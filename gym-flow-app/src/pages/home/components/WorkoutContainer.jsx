import { React, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GymFlowContext } from '../../../context/flow-context';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  height: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const WorkoutContainer = (props) => {
  // const [legOpen, setLegOpen] = useState(false);
  // const handleLegOpen = () => setLegOpen(true);
  // const handleLegClose = () => setLegOpen(false);

  // const [chestOpen, setChestOpen] = useState(false);
  // const handleChestOpen = () => setChestOpen(true);
  // const handleChestClose = () => setChestOpen(false);

  // const [backOpen, setBackOpen] = useState(false);
  // const handleBackOpen = () => setBackOpen(true);
  // const handleBackClose = () => setBackOpen(false);

  // const [absOpen, setAbsOpen] = React.useState(false);
  // const handleAbsOpen = () => setAbsOpen(true);
  // const handleAbsClose = () => setAbsOpen(false);

  const { handleAbsOpen, handleChestOpen, handleBackOpen, handleLegsOpen } =
    useContext(GymFlowContext);

  const HandleClick = (e) => {
    e.preventDefault();
    let clickedOption = e.target.id;
    console.log(clickedOption);

    switch (clickedOption) {
      case 'legs':
        handleLegsOpen();
        break;
      case 'chest-triceps':
        handleChestOpen();
        break;
      case 'back-biceps':
        handleBackOpen();
        break;
      case 'abs':
        handleAbsOpen();
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
