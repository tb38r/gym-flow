import { Box } from '@mui/material';
import { React, useContext } from 'react';
import Modal from '@mui/material/Modal';
import { GymFlowContext } from '../../../../context/flow-context';
import '../../../../assets/css/boxes.css';
import { WorkoutRows } from '../WorkoutRows';
import Button from '@mui/material/Button';
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

// function DummyForm() {
//   return (
//     <div className="wrapper">
//       <h3>How About Them Apples</h3>
//       <form>
//         <fieldset>
//           <label>
//             <p>Name</p>
//             <input name="name" />
//           </label>
//         </fieldset>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

const LegsModal = () => {
  const { legsOpen, handleLegsClose } = useContext(GymFlowContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log('hiii');
  };

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
            <div className="reps-box">REPS</div>
            <div className="sets-box">SETS</div>
          </div>
          <form onSubmit={HandleSubmit}>
            {/* <WorkoutRows  workoutname="Squats" /> */}
            <input type="number" id="quantity" name="quantity" min="0" max="12"></input>
            <SaveButton />
          </form>
        </Box>
      </Modal>
    </>
  );
};

export { LegsModal };
