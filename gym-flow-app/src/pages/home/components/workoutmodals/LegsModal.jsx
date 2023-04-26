import { Box } from '@mui/material';
import { React, useContext } from 'react';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

const LegsModal = () => {
  const { legsOpen, handleLegsClose } = useContext(GymFlowContext);

  return (
    <>
      <Modal
        open={legsOpen}
        onClose={handleLegsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Leg Title in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Leg Stuff{' '}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export { LegsModal };
