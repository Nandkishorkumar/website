import React from "react";
import Header from "@components/Home/header/Header";
import Path from '@components/CancellingOrder/Path/Path';
import CancellingPage from "@components/CancellingOrder/CancellingPage/CancellingPage";
import styles from "@components/CancellingOrder/main.module.css";
import Main from "@components/CancellingOrder/Cancelling/Main";
import Upperfooter from "@components/Home/Footer/Upperfooter";

export default function CancellingOrder() {
    return(
        <>
        <Header />
        <Path />
        <div className={styles.main}>
        <CancellingPage />
        <Main />
        </div>
        <Upperfooter />
        </>
    )
}