import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from './stepper.module.css';

const steps = [
  {
    h: 'Order Placed',
    t1:  `Monday,`,
    t2: `25 August, 2021`,
  },
  {
    h: 'In Progress',
    t1: `Friday,`,
    t2: `30 August, 2021`,
  },
  {
    h: 'Out for Delivery',
    t1: 'Lorem ipsum',
  },
  {
    h: 'Delivered',
    t1: 'Lorem ipsum',
  },
  
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '985px',marginBottom:'24px' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><div>
              <div className={styles.label}>{label.h}</div>
              <div className={styles.text}>{label.t1}</div>
              <div className={styles.text}>{label.t2}</div>
            </div></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
