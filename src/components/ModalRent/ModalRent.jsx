import { Box } from '@mui/material';
import React from 'react';

export const ModalRent = ({ car, style }) => {
  return (
    <>
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">Text in a modal</h2>
        <p id="parent-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </Box>
    </>
  );
};
