import React from 'react';
import Header from '@components/Home/header/Header';
import Path from '@components/Tracking/Path/Path';
import Heading from '@components/Tracking/Heading/Heading';
import StepperForm from '@components/Tracking/StepperForm/StepperForm';
import Data from '@components/Tracking/Data/Data';
import Upperfooter from '@components/Home/Footer/Upperfooter';

export default function Tracking() {
    return(
        <>
        <Header />
        <Path />
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'space-between',height:'1000px'}}>
        <Heading />
        <StepperForm />
        <Data />
        </div>
        <Upperfooter />
        </>
    );
}