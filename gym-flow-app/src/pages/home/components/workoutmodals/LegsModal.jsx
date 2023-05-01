import { Box } from '@mui/material';
import { React, useContext } from 'react';
import Modal from '@mui/material/Modal';
import { GymFlowContext } from '../../../../context/flow-context';
import '../../../../assets/css/boxes.css';
import { WorkoutRows } from '../WorkoutRows';
import { SaveButton } from '../SaveButton';

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

const LegsModal = () => {
  const { legsOpen, handleLegsClose, updateWorkoutObjSet, updateWorkoutObjRep } =
    useContext(GymFlowContext);

  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('hiii');
  // };

  return (
    <>
      <Modal
        open={legsOpen}
        onClose={handleLegsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box id="modal-box" sx={style}>
          <div className="modal-box-title">LEGS</div>
          <div className="reps-sets">
            <div className="reps-box">SETS</div>
            <div className="sets-box">REPS</div>
          </div>
          <WorkoutRows workoutname="Squats" />
          <SaveButton id="savelegs" />
        </Box>
      </Modal>
    </>
  );
};

export { LegsModal };
