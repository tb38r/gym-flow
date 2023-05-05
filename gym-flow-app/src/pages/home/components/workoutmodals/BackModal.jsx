import { Box } from '@mui/material';
import { React } from 'react';
import { WorkoutRows } from '../WorkoutRows';

import { CloseButton } from '../CloseButton';
import { globalBoxStyle } from '../../../../assets/css/global-style';

const BackModal = () => {
  return (
    <>
      <Box id="box-back" sx={globalBoxStyle}>
        <div id="modal-box">
          <div className="modal-box-title">BACK & BICEPS</div>
          <div className="reps-sets">
            <div className="reps-box-title">SETS</div>
            <div className="sets-box-title">REPS</div>
          </div>
          <WorkoutRows workoutname="Lat Pulldowns" />
          <WorkoutRows workoutname="Preacher Curls" />
          <WorkoutRows workoutname="Seated Rows" />
          <WorkoutRows workoutname="Dumbell Curl" />
          <WorkoutRows workoutname="Deadlift" />

          <CloseButton name="box-back" />
        </div>
      </Box>
    </>
  );
};

export { BackModal };
