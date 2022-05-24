import React from 'react';
import Header from '@components/Home/header/Header';
import Upperfooter from '@components/Home/Footer/Upperfooter';
import Imagehead from '@components/Home/Image';
import MainSquare from '@components/Home/hcompo/MainSquare';
import ProductHeading from '@components/Home/Products/ProductHeading';
import CHeading from '@components/Home/catagory/CHeading';
import Heading from '@components/Home/feedback/Heading';
import Theading from '@components/Home/Touch/Theading';
import Modal from '@components/common/modal/modal';



export default function Home() {
  const [open, setOpen] = React.useState(true)
  return (
    <>
      <Header />
      <Imagehead />
      <MainSquare />
      <ProductHeading />
      <CHeading />
      <Heading />
      <Theading />
      <Upperfooter />
      <Modal open={open} onClose={() => setOpen(false)}><div>Hello There</div></Modal>
    </>
  );
}

// HelpPage.Layout = Layout;
