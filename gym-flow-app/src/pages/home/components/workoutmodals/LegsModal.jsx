import { Box } from '@mui/material';
import { React } from 'react';

import '../../../../assets/css/boxes.css';
import { WorkoutRows } from '../WorkoutRows';
import { globalBoxStyle } from '../../../../assets/css/global-style';
import { CloseButton } from '../CloseButton';

const LegsModal = () => {
  return (
    <>
      <Box id="box-legs" sx={globalBoxStyle}>
        <div id="modal-box">
          <div className="modal-box-title">LEGS</div>
          <div className="reps-sets">
            <div className="reps-box-title">SETS</div>
            <div className="sets-box-title">REPS</div>
          </div>
          <WorkoutRows workoutname="Squats" />
          <WorkoutRows workoutname="Leg Extensions" />
          <WorkoutRows workoutname="Lunges" />
          <WorkoutRows workoutname="Leg Press" />
          <WorkoutRows workoutname="Leg Curl" />

          <CloseButton name="box-legs" />
        </div>
      </Box>
      {/* </Modal> */}
    </>
  );
};

export { LegsModal };
