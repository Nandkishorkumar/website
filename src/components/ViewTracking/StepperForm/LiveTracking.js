import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import styles from './stepper.module.css';
import { BorderColor } from '@mui/icons-material';
import Image from 'next/image';


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function LiveTracking(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{width:'120px',height:'27px',background:'#FF7324',boxShadow:' 0px 4px 8px #E6BCA4', borderRadius:'39px', border:'#FF7324',padding:'0px'}}>
        <p style={{color:' #FFFFFF' , width:'118px',height:'17px'}} className={styles.p}>Live Tracking</p> 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" className={styles.popuphead}>
        Your order is on the way
        </DialogTitle>
        <DialogContent>
        <div>
           <Image src="/VTracking/assets/tracking.svg" height={'476px'} width={'703px'} />
        </div>
        <div>
          <p>If any assistance you need, please call us @ </p>
        </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
