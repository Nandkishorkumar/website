import * as React from 'react';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import { style } from '@mui/system';
import Stack from '@mui/material/Stack';

export default function simple_button() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" >
        Delete
      </Button>
      <Button variant="contained" >
        Send
      </Button>
    </Stack>
  );
}
