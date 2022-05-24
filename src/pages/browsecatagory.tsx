import React from 'react';
import Header from '@components/Home/header/Header';
import Imagehead from '@components/BrowseCatagory/Image';
import Path from '@components/BrowseCatagory/Path/Path';
import DropMenu from '@components/BrowseCatagory/Dropmenu/DropMenu';
import MainMenu from '@components/BrowseCatagory/BrowseMainMenu/MainMenu';
import BulkOrder from '@components/BrowseCatagory/BulkOrder/BulkOrder';
import BrowseHistory_main from '@components/BrowseCatagory/BrowseHistory/BrowseHistory_main';
import Upperfooter from '@components/Home/Footer/Upperfooter';
import Image from "next/image";


export default function MainBrowse() {
    return (
        <>
        <Header />
        <Imagehead />
        <Path />
        <DropMenu />
        <MainMenu />
        <Image src="/BrowseCatagory/assets/bulkline.svg" alt="image not found" width={'1170px'} height={'2px'} />
        <BulkOrder />
        <Image src="/BrowseCatagory/assets/bulkline.svg" alt="image not found" width={'1170px'} height={'2px'} />
        <BrowseHistory_main />
        <Upperfooter />
        </>

        );
    }
    