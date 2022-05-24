import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from './stepper.module.css';
import LiveTracking from './LiveTracking';

const steps = [
  {
    h: 'Order Placed',
    t1:  `Monday,`,
    t2: `25 August, 2021`,
    b: false,
  },
  {
    h: 'In Progress',
    t1: `Friday,`,
    t2: `30 August, 2021`,
    b: false,
  },
  {
    h: 'Out for Delivery',
    t1: 'Delivery Window',
    t3: '9 am to 12 pm',
    b: true,
  },
  {
    h: 'Delivered',
    b: false,
  },
  
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '985px',marginBottom:'80px' }}>
      <Stepper activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><div>
              <div className={styles.label}>{label.h}</div>
              <div className={styles.text}>{label.t1}</div>
              <div className={styles.text}>{label.t2}</div>
              <div className={styles.text3}>{label.t3}</div>
              {label.b? <div>
                <button className={styles.button}><LiveTracking/></button>
              </div>:<div></div>}
            </div></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
