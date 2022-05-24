import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import styles from './Address.module.css';
import { styled } from '@mui/material/styles';
import Image from "next/image"
import Popup from 'reactjs-popup';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const data = [
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: false

  },
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: true
  },
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: false
  },
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: false
  },
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: false
  }
  ,
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: false
  },
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: false
  },
  {
    userNmae: "nand kishor kumar",
    address: "1507 W Lillian Ave Arlington Heights IL 60004-3626 United States",
    Contact1: 9888898888,
    Contact2: 9888898888,
    default: false
  }
]

export default function Address() {
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>
      <div className={styles.headTag} >Your Addresses</div>
      <div className={styles.c1}>
        <Grid item xs={12} marginLeft={5} >
          <Grid container justifyContent="center" spacing={2}>
            <Paper className={styles.c} >
              <div className={styles.add_address} >
                <Image src="/user_address/Group 8877.svg" width={"55px"} height={"55px"} />
                <p>Add Address</p>
              </div>
            </Paper>
            {data.map((value) => (
              <Grid key={value} item>
                {/* <Paper className={styles.c3} /> */}
                <div className={styles.c3}>
                  <div className={styles.compoHeader}>
                    <div className={styles.header}>
                      <div className={styles.userName}>{value.userNmae}</div>
                      {value.default ?
                        <div className={styles.default_tag} ><p className={styles.defaultText} >Default</p> </div> :
                        <div></div>
                      }
                    </div>
                  </div>
                  <div className={styles.details}>
                    <p>{value.address}</p>
                    <p>Contact 1 : {value.Contact1}</p>
                    <p>Contact 2 : {value.Contact2}</p>
                  </div>
                  <p className={styles.hotLink1}>Add delivery instructions</p>
                  {
                    value.default ? <div className={styles.hotLink1}></div> : <p className={styles.hotLink1}>Make this address default</p>
                  }
                  <div className={styles.Buttons} >
                    {/* <button className={styles.button1} >Edit</button> */}
                    <div>
                    <Button onClick={handleClickOpen}>
                      Open dialog
                    </Button>
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <BootstrapDialogTitle onClose={handleClose}>
                        Modal title
                      </BootstrapDialogTitle>
                      <div></div>
                      <DialogActions>
                        {/* <Button autoFocus onClick={handleClose}>
                          Save changes
                        </Button> */}
                      </DialogActions>
                    </BootstrapDialog>
                    </div>
                    <button className={styles.button1}>Remove</button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </div>

    </>
  );
}
