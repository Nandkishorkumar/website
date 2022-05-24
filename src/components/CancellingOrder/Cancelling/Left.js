import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from './cancelling.module.css'

const Left = () => {
    const [value, setValue] = React.useState('Order created by mistake');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <FormControl component="fieldset">
        <FormLabel component="legend" className={styles.label} style={{color: "#672900" ,width: '478px' , height: '32px' , fontFamily: 'Montserrat' , fontSize:'26px'}}>Reasons for cancellation (Optional)</FormLabel>
        <RadioGroup
          aria-label="gender"
          value={value}
          name="radio-buttons-group"
          onChange={handleChange}
          style={{width:'300px', marginTop:'15px' , height:'294px' , display:'flex' , flexDirection:'column', justifyContent:'space-evenly'}}
        >
          <FormControlLabel value="Order created by mistake" className={styles.radio} control={<Radio color="success" />} label="Order created by mistake" />
          <FormControlLabel value="Did not like the quality" className={styles.radio} control={<Radio  color="success" />} label="Did not like the quality" />
          <FormControlLabel value="Do not want to disclose" className={styles.radio} control={<Radio  color="success" />} label="Do not want to disclose" />
          <FormControlLabel value="Item price too high" className={styles.radio} control={<Radio  color="success" />} label="Item price too high" />
          <FormControlLabel value="Found cheaper somewhere else" className={styles.radio} control={<Radio  color="success" />} label="Found cheaper somewhere else" />
          <FormControlLabel value="Need to change shipping address" className={styles.radio} control={<Radio  color="success" />} label="Need to change shipping address" />
          <FormControlLabel value="Need to change shipping speed" className={styles.radio} control={<Radio  color="success" />} label="Need to change shipping speed" />
          <FormControlLabel value="Need to change billing address" className={styles.radio} control={<Radio color="success"  />} label="Need to change billing address" />
          <FormControlLabel value="Need to change payment method" className={styles.radio} control={<Radio  color="success" />} label="Need to change payment method" />
          <FormControlLabel value="Other" className={styles.radio} control={<Radio  color="success" />} label="Other"  />
        </RadioGroup>
          <textarea type="text" className={styles.textfield} placeholder="Add any other reason for cancel" />
      </FormControl>
    );
}

export default Left;
