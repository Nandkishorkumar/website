import React from 'react';
import styles from './header.module.css';
import Image from "next/image";


const Navigation = () => {
    return (
        <div className={styles.main_nav}>
            <nav className={styles.navigation}>
                <div className={styles.nav__logo}>
                    <Image src="/Home/assets/logo.svg" alt="logo not found" width={'110px'} height={'70px'}/>
                </div>
                <div className={styles.nav__list}>
                    <ul className={styles.ul_list}>
                        <li className={styles.li_list}><a className={styles.a_list} href="/">HOME</a></li>
                        <li className={styles.li_list}><a className={styles.a_list} href="/">SHOP</a>
                            {/* <ul class="dropdown">
                                <li><a href>Sub-1</a></li>
                                <li><a href>Sub-2</a></li>
                                <li><a href>Sub-3</a></li>
                            </ul> */}
                        </li>
                        <li className={styles.li_list}><a className={styles.a_list} href="/">CONTACT US</a></li>
                        <li className={styles.li_list}><a className={styles.a_list} href="/">BLOG</a></li>
                        <li className={styles.li_list}><a className={styles.a_list} href="/">RECEPIES</a></li>
                        <li className={styles.li_list}><a className={styles.a_list} href="/">HELP</a></li>
                    </ul>
                </div>
                <div className={styles.nav__search}> 
                <div className={styles.search_box}>
                <Image src="/Home/assets/searchicon.svg" alt="not found" className={styles.searchicon} width={'11.95px'} height={'11.95px'}/>
                <input className={styles.search_btn} type="search" placeholder="Products and Recepies" aria-label="Search"></input>
                </div>
                    <button className={styles.sign_btn} type="submit">Sign in /Sign up</button>
                </div>
                <div className={styles.nav__cart}>
                    <Image src="/Home/assets/cart.svg" alt="no img found" width={'65px'} height={'67px'}/>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
