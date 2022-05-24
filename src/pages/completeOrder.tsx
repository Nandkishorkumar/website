import React from 'react'
import Header from '@components/Home/header/Header';
import Upperfooter from '@components/Home/Footer/Upperfooter';
import Box from "@components/complted order details/completeOrder"
import path from "@components/path/Path";


 const completeOrder = () => {
    return (
      <>
      <Header/>
      {/* <Path/> */}
      <Box/>
      <Upperfooter/>
      </>
    )
}
export default completeOrder