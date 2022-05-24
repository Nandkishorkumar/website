import { Breadcrumbs, Stack } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import styles from './styles.module.css';
import { data } from './data';
const breadCrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/getting-started/installation/"
  >
    Core
  </Link>,
];

export default function BreadCrumptTopbar() {
  return (
    <div className={styles.topbar_container}>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadCrumbs}
        </Breadcrumbs>
      </Stack>
      <p className={styles.ship_to}>
        Shipping to&nbsp;&nbsp;
        <span className={styles.username}>{data.username}</span>
      </p>
    </div>
  );
}
