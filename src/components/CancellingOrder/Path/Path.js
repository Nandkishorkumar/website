import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './path.module.css';

const Path = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="#672900" className={styles.breadcrumlink}>Your Account</Link>,
    <Link underline="hover" key="2" color="#672900" className={styles.breadcrumlink}>Your Orders</Link>,
    <Link underline="hover" key="3" color="#672900" className={styles.breadcrumlink}>Order Summary</Link>,
    <Link underline="hover" key="4" color="#672900" className={styles.breadcrumlink}># 111-2483454-2717056</Link>,
    <Typography key="5" style={{color:"#70A42F", fontFamily: 'Montserrat' ,
    FontStyle:'normal' , fontWeight: 'bold' , fontSize:'12px' , lineHeight: '15px'}} className="breadcrumlink">Your Order</Typography>,
  ];

  return (
    <div className={styles.path}>
      <div className={styles.breadcrums}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
    </div>
  )
}

export default Path
