import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Buttons = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button sx={{ color: '#fc3434', fontSize: 20 }}>탁 주</Button>
        <Button sx={{ color: '#f4947c', fontSize: 20 }}>약 주</Button>
        <Button sx={{ color: '#581322', fontSize: 20 }}>청 주</Button>
        <Button sx={{ color: '#a45154', fontSize: 20 }}>과실주</Button>
        <Button sx={{ color: '#dbbcac', fontSize: 20 }}>증류주</Button>
        <Button sx={{ color: '#3c344c', fontSize: 20 }}>기타</Button>
      </ButtonGroup>
    </Box>
  );
};

export default Buttons;