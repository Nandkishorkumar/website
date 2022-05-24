import React from 'react';
import Header from '@components/Home/header/Header';
import Path from '@components/ViewTracking/Path/Path';
import Heading from '@components/ViewTracking/Heading/Heading';
import StepperForm from '@components/ViewTracking/StepperForm/StepperForm';
import Data from '@components/ViewTracking/Data/Data';
import Upperfooter from '@components/Home/Footer/Upperfooter';
import Recomended from '@components/ViewTracking/Recomended/Recomended';

export default function Tracking() {
    return(
        <>
        <Header />
        <Path />
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',height:'1335px', justifyContent:'space-evenly'}}>
        <Heading />
        <StepperForm />
        <Data />
        <Recomended />
        </div>
        <Upperfooter />
        </>
    );
}