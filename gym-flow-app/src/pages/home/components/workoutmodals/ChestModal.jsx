import { Box } from '@mui/material';
import { React } from 'react';
// import Button from '@mui/material/Button';
import { WorkoutRows } from '../WorkoutRows';
import '../../../../assets/css/boxes.css';
import { globalBoxStyle } from '../../../../assets/css/global-style';
import { CloseButton } from '../CloseButton';

const ChestModal = () => {
  return (
    <>
      <Box id="box-chest" sx={globalBoxStyle}>
        <div id="modal-box">
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
          <CloseButton name="box-chest" />
        </div>
      </Box>
    </>
  );
};

export { ChestModal };
