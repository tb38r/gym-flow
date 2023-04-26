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

const ChestModal = () => {
  const { chestOpen, handleChestClose } = useContext(GymFlowContext);

  return (
    <>
      <Modal
        open={chestOpen}
        onClose={handleChestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Chest Title in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Chest Stuff{' '}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export { ChestModal };