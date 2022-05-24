import React from 'react';
import Header from '@components/Home/header/Header';
import Path from '@components/Transaction/Path/Path';
import Navigation from '@components/Transaction/Navigation/Navigation';
import Heading from '@components/Transaction/Heading/Heading'
import MainComponent from '@components/Transaction/Component/MainComponent';
import Upperfooter from '@components/Home/Footer/Upperfooter';
import Image from "next/image";

export default function Transaction() {
    return(
        <>
        <Header />
        <Path />
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',height:'1450px'}}>
        <Navigation />
        <Heading />
        <MainComponent />
        <div style={{marginLeft:'-128px',marginTop:'60px'}}>
        <Image src="/BrowseCatagory/assets/bulkline.svg" alt="image not found" width={'1170px'} height={'2px'} />
        </div>
        </div>
        <Upperfooter />
        </>
    );
}