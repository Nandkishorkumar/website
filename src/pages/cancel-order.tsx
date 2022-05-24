import React from "react";
import Header from "@components/Home/header/Header";
import Path from "@components/CancelOrderPage/Path/Path";
import Navigation from "@components/CancelOrderPage/Navigation/Navigation"
import CancelHeading from "@components/CancelOrderPage/CanclePage/CancelHeading";
import ExploreMain from "@components/CancelOrderPage/Explore/ExploreMain";
import Upperfooter from "@components/Home/Footer/Upperfooter";
import Image from "next/image";
import styles from '@components/CancelOrderPage/main.module.css';


export default function CancelOrder() {
  return (
    <>
      <Header />
      <Path />
      <div className={styles.cancle_order_main_page}>
        <Navigation />
      <CancelHeading /> 
      <Image src="/BrowseCatagory/assets/bulkline.svg" alt="image not found" width={'1170px'} height={'2px'} />
      <ExploreMain />
      </div>   
      <Upperfooter />
    </>
  );
}
