import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from './cancelling.module.css';
import Button from './Button';

const Right = () => {
    const [value, setValue] = React.useState('Refund to original payment method');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
      <div className={styles.right_main}>
        <FormControl component="fieldset" style={{marginLeft:'60px'}}>
        <FormLabel component="legend" style={{color: "#672900" ,width: '366px' , height: '32px' , fontFamily: 'Montserrat' , fontSize:'26px'}}>How can we make it right?</FormLabel>
        <RadioGroup
          aria-label="gender"
          value={value}
          name="radio-buttons-group"
          onChange={handleChange}
          style={{width:'440px', marginTop:'15px' , height:'294px' , display:'flex' , flexDirection:'column'}}
        >
          <FormControlLabel value="Refund to original payment method"  style={{color: "#212121" ,width: '406px' , height: '27px' , fontFamily: 'Montserrat' , fontSize:'22px', fontWeight:'bold'}} control={<Radio color="success" />} label="Refund to original payment method" />
          <p className={styles.p}>within 3-5 business days of order cancellation</p>
          <FormControlLabel value="Add your gift card balance" className={styles.rradio} control={<Radio  color="success" />} label="Add your gift card balance" />
          <p className={styles.p}>within 30 minutes</p>
          <p className={styles.p2}>This amount will be added to your Kisaan Pay Gift Card balance with 1-year validity, post cancelling the order. <span style={{color:'#0061A8'}}>Terms.</span></p>
        </RadioGroup>
      </FormControl>
      <div className={styles.main_button}>
      <Button />
      </div>
      </div>
    )
}

export default Right
