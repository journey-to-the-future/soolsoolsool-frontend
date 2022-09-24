import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = (value) => {
  return `${value}°C`;
}
const SliderBar = () => {

  return (
    <Box sx={{ width: 300 }}>
      <Slider
         aria-label="Temperature"
         defaultValue={0}
         getAriaValueText={valuetext}
         valueLabelDisplay="auto"
         step={10000}
         marks
         min={0}
         max={80000}
      />
      {valuetext}
    </Box>
  );
};

export default SliderBar;