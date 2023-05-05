import { Box } from '@mui/material';
import { React, useContext } from 'react';
import { WorkoutRows } from '../WorkoutRows';

import { CloseButton } from '../CloseButton';
import '../../../../assets/css/boxes.css';

import { GymFlowContext } from '../../../../context/flow-context';
import { globalBoxStyle } from '../../../../assets/css/global-style';

const AbsModal = () => {
  const { workoutObjSet, workoutObjRep } = useContext(GymFlowContext);

  const handleClick = () => {
    document.getElementById('box-abs').style.display = 'none';
    console.log('woor', workoutObjRep);
    console.log('woos', workoutObjSet);
  };

  return (
    <>
      <Box id="box-abs" sx={globalBoxStyle}>
        <div id="modal-box">
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
          <CloseButton name="box-abs" />

          {/* <SaveButton id="savelegs" /> */}
        </div>
      </Box>
    </>
  );
};

export { AbsModal };
