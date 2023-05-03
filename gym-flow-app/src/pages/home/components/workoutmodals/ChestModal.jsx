import { Box } from '@mui/material';
import { React, useContext } from 'react';
// import Button from '@mui/material/Button';
import { WorkoutRows } from '../WorkoutRows';
import Modal from '@mui/material/Modal';
import { SaveButton } from '../SaveButton';
import '../../../../assets/css/boxes.css';

import { GymFlowContext } from '../../../../context/flow-context';

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

const ChestModal = () => {
  const { chestOpen, handleChestClose } = useContext(GymFlowContext);

  return (
    <>
      <Modal
        open={chestOpen}
        onClose={handleChestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box id="modal-box" sx={style}>
          <div className="modal-box-title">CHEST & TRICEPS</div>
          <div className="reps-sets">
            <div className="sets-box-title">SETS</div>
            <div className="reps-box-title">REPS</div>
          </div>
          <WorkoutRows workoutname="Bench Press" />
          <WorkoutRows workoutname="Dumbbell Press" />
          <WorkoutRows workoutname="Dips" />
          <WorkoutRows workoutname="Push Downs" />
          <WorkoutRows workoutname="Push Ups" />
          <WorkoutRows workoutname="Tri Extensions" />

          <SaveButton id="saveChest" />
        </Box>
      </Modal>
    </>
  );
};

export { ChestModal };
