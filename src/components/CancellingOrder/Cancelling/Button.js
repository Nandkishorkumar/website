import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './cancelling.module.css';

export default function Buttons() {
  return (
    <Stack spacing={2} direction="column">
      <Button variant="contained" className={styles.button1} style={{width:'339px', height:'38px' ,backgroundColor:'#73A831',boxShadow:'0px 2px 3px rgba(0, 0, 0, 0.25)',borderRadius:'7px'}}><p className={styles.buttonp1}>Cancel selected items in this order</p></Button>
      <Button variant="contained" className={styles.button1} style={{width:'339px', height:'38px' ,backgroundColor:'#F4F4F4',border:'1px solid #B7B7B7',borderRadius:'7px',boxShadow:'0px 2px 3px rgba(0, 0, 0, 0.25)'}}><p className={styles.buttonp2}>Return to order summary</p></Button>
    </Stack>

  );
}
