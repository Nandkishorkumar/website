import * as React from 'react'
import styles from './rating.module.css';
import Image from "next/image";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@components/ui/input';
import TextArea from '@components/ui/text-area';


const RightRating = ()=> {
    return(
<div className={styles.rating_right}>
<div className={styles.rating_right_haeding}>
    <p>Review this product</p>
    <div className={styles.rating_image_rate}>
    <p>Rate this product</p>
<div className={styles.rating_right_image}>
<Image src="/RatingReview/assets/rating_rating.svg" width={'140px'} height={'27px'} />
</div>
    </div>
</div>
<div className={styles.rating_right_form}>
<Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
> 
     
<Input placeholder="Your Name"  style={{height:'40px' , width:'254px' , border:'1px solid #E0E0E0' , borderRadius:'20px'}}/> 
<Input placeholder="Review Title"  style={{height:'40px' , width:'254px' , border:'1px solid #E0E0E0' , borderRadius:'20px'}}/> 
<TextArea placeholder="Description"  style={{height:'340px' , width:'644px' , border:'1px solid #E0E0E0' , borderRadius:'20px'}}/> 
</Box>
<div className={styles.rating_right_button}>
<button className={styles.rating_right_button1}><Image className={styles.rating_right_button1_image} height={'16px'} width={'17.7px'} src="/RatingReview/assets/image_rating" /></button>
<button className={styles.rating_right_button2}>Submit</button>
</div>
</div>
</div>
   )
}


export default RightRating;

