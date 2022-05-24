import React from 'react';
import styles from './mainmenu.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Image from "next/image";

const LeftMenu = () => {
    return (
        <div className={styles.browseleftmenu}>
            <div className={styles.cat1eftmenu}>
                <p className={styles.leftmenuheading}>Category</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Dairy Products" className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Grocery Essentials "  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Bread and Bakery"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Beverages"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Snacks & Chips" className={styles.label} />
                    <FormControlLabel control={<Checkbox/>} label="Beauty & Body Care"  className={styles.label}/>
                </FormGroup>
            </div>
            <Image src="/BrowseCatagory/assets/leftmenuline.svg" height={'2px'} width={'224px'} />
            <div className={styles.cat2eftmenu}>
                <p className={styles.leftmenuheading}>Dietary Preference</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Vegan" className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Gluten Free"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Vegetarian"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Low-Sodium"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Sugar-Conscious" className={styles.label} />
                    <FormControlLabel control={<Checkbox/>} label="Low-Fat"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Dairy"  className={styles.label}/>
                </FormGroup>
            </div>
            <Image src="/BrowseCatagory/assets/leftmenuline.svg" height={'2px'} width={'224px'} />
            <div className={styles.cat3eftmenu}>
                <p className={styles.leftmenuheading}>Food Groups</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Occasional" className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Healthy Fats"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Dairy"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Grain"  className={styles.label}/>
                </FormGroup>
            </div>
            <Image src="/BrowseCatagory/assets/leftmenuline.svg" height={'2px'} width={'224px'} />
            <div className={styles.cat1eftmenu}>
                <p className={styles.leftmenuheading}>Nutrients</p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Proteins" className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Carbs"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Lipids"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Vitamins"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Minerals"  className={styles.label}/>
                    <FormControlLabel control={<Checkbox/>} label="Water"  className={styles.label}/>
                </FormGroup>
            </div>
            <Image src="/BrowseCatagory/assets/leftmenuline.svg" height={'2px'} width={'224px'} />
        <div className={styles.orderleftmenu}>
        <span className={styles.orderleftheading}>Order Online</span> <Image src="/BrowseCatagory/assets/orderinlleftmenu.svg" width={'16px'} height={'16px'} />
        </div>
        <Image src="/BrowseCatagory/assets/leftmenuline.svg" height={'2px'} width={'224px'} />
        <div className={styles.planninginleftmenu}>
        <p className={styles.planningleftheading}>Planing an Event?</p>
        <p className={styles.planninglefttext}>Call us today</p>
        </div>
        <Image src="/BrowseCatagory/assets/leftmenuline.svg" height={'2px'} width={'224px'} />
        <div className={styles.planninginleftmenu}>
        <p className={styles.planningleftheading}>Planing an Event?</p>
        <p className={styles.planninglefttext2}>Shop Catering & entertaining </p>
        </div>
        <Image src="/BrowseCatagory/assets/leftmenuline.svg" height={'2px'} width={'224px'} />
        <div className={styles.planninginleftmenu}>
        <p className={styles.planningleftheading}>Need Help?</p>
        <p className={styles.planninglefttext3}>See our FAQ's </p>
        </div>
        </div>
    )
}


export default LeftMenu
