import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" style={{backgroundColor:`${props.bgcolor}`, textTransform:'none',
      width:`${props.width}`, height:`${props.height}`,borderRadius:`${props.radius}`, fontFamily:'Montserrat',
      fontSize:`${props.fontsize}`,color:`${props.color}`
      }}>{props.name}</Button>
    </Stack>
  );
}
