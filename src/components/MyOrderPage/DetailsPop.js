import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import styles from './MyOrderPage.module.css';
import AllCompletedOrders from '@components/complted order details/AllCompletedOrders';

// import styles from './stepper.module.css';
// import { BorderColor } from '@mui/icons-material';

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

export default function DetailsPop() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <div>
      <div className={styles.button}>
        <button onClick={handleClickOpen}>View order details</button>
        <div className={styles.seprator}></div>
        <button onClick={handleClickOpen1}>View invoice</button>
      </div>
      {
        open1 ? <>
          <Dialog
            open={open1}
            onClose={handleClose1}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
              Subscribe
            </DialogTitle>
            <div className={styles.pop}>
              <AllCompletedOrders />
            </div>
            <DialogActions>
              <Button autoFocus onClick={handleClose1}>
                Cancel
              </Button>
              <Button onClick={handleClose1}>Subscribe</Button>
            </DialogActions>
          </Dialog>

        </> : <></>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <div className={styles.pop}></div>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
