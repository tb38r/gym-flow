import { Box } from '@mui/material';
import { React, useContext } from 'react';
import { SaveButton } from '../SaveButton';
import { WorkoutRows } from '../WorkoutRows';
import Modal from '@mui/material/Modal';
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

const AbsModal = () => {
  const { absOpen, handleAbsClose } = useContext(GymFlowContext);

  return (
    <>
      <Modal
        open={absOpen}
        onClose={handleAbsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box id="modal-box" sx={style}>
          <div className="modal-box-title">ABS</div>
          <div className="reps-sets">
            <div className="reps-box-title">SETS</div>
            <div className="sets-box-title">REPS</div>
          </div>
          <WorkoutRows workoutname="Crunches" />
          <WorkoutRows workoutname="Planks" />
          <WorkoutRows workoutname="Ab Rollouts" />
          <WorkoutRows workoutname="Sit Ups" />
          <WorkoutRows workoutname="V Ups" />
          <WorkoutRows workoutname="Leg Raises" />

          <SaveButton id="savelegs" />
        </Box>
      </Modal>
    </>
  );
};

export { AbsModal };
