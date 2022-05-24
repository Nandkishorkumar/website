import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './MyOrderPage.module.css';
import Image from "next/image"


const product_data = [{
  product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
  price: 100,
  quantity: 2,
  weight: "5L",
  total: 200
},
{
  product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
  price: 100,
  quantity: 3,
  weight: "5L",
  total: 300
},
{
  product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
  price: 100,
  quantity: 4,
  weight: "5L",
  total: 400
},
{
  product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
  price: 100,
  quantity: 5,
  weight: "5L",
  total: 500
},
]
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalTest() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={styles.button}>
        <button onClick={handleOpen}>View order details</button>
        <div className={styles.seprator}></div>
        <button onClick={handleOpen}>View invoice</button>
      </div>
      <Modal
      scrollable={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.pop}>

          <div className={styles.popHeader}>
            <p className={styles.headeerTitle}>Your All Completed Orders</p>
            <button className={styles.img} onClick={handleClose}>
              <Image src="/completed_order/Group 8728.svg" width={'13.5px'} height={'13.5px'} />
            </button>
          </div>
          <div className={styles.popHeader2}>
            <div>
              <text className={styles.popUpColumnIndex}>Orders</text>
            </div>
            <div className={styles.qwt}>
              <p className={styles.qwt_text}>Quantity</p>
              <p className={styles.qwt_text}>Weight</p>
              <p className={styles.qwt_text}>Total</p>
            </div>
          </div>
          {
            product_data.map((data) => {
              return (
                <div className={styles.testing}>
                  <div className={styles.line_H1}></div>
                  <div className={styles.productComponent}>
                    <div className={styles.leftdiv}>
                      <Image src="/completed_order/milkpack.png" width={'54px'} height={'85px'} />
                      <p>
                        <p>{data.product_name}</p>
                      </p>
                    </div>
                    <div>right</div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </Modal>
    </div>
  );
}
