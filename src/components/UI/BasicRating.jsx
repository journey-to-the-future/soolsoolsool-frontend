import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(3);

  return (
    <Box>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">review 20</Typography>
    </Box>
  );
}
