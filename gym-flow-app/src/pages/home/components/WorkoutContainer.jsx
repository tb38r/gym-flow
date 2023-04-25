import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


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
  const [legOpen, setLegOpen] = React.useState(false);
  const handleLegOpen = () => setLegOpen(true);
  const handleLegClose = () => setLegOpen(false);

  const [chestOpen, setChestOpen] = React.useState(false);
  const handleChestOpen = () => setChestOpen(true);
  const handleChestClose = () => setChestOpen(false);

  const [backOpen, setBackOpen] = React.useState(false);
  const handleBackOpen = () => setBackOpen(true);
  const handleBackClose = () => setBackOpen(false);

  const [absOpen, setAbsOpen] = React.useState(false);
  const handleAbsOpen = () => setAbsOpen(true);
  const handleAbsClose = () => setAbsOpen(false);

  const HandleClick = (e) => {
    e.preventDefault();
    let clickedOption = e.target.id;
    console.log(clickedOption);

    switch (clickedOption) {
      case 'legs':
        handleLegOpen();
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
      <Modal
        open={legOpen}
        onClose={handleLegClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Leg stuff
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={chestOpen}
        onClose={handleChestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Chest Stuff{' '}
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={backOpen}
        onClose={handleBackClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Back Stuff{' '}
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={absOpen}
        onClose={handleAbsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ab Stuff{' '}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

WorkoutContainer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  workouts: PropTypes.string
};

export { WorkoutContainer };
