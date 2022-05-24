import React from 'react';
import styles from './browsehistory.module.css';
import Image from "next/image";
import BrowseProducts from './BrowseProducts';


const BrowseHistory_main = () => {
    return (
        <div className={styles.browsehistory_main}>
            <div className={styles.history_main}>
                <div className={styles.history_heading}>
                    <span className={styles.hheading_one}>Your Browsing History</span> <span className={styles.hheading_two}>View or edit your browsing history</span>
                </div>
                <BrowseProducts />
                <div className={styles.histext}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sed molestie hac lacus. Nunc lectus porttitor justo, in pharetra vitae a lectus ut. Fermentum pharetra, consequat tincidunt massa adipiscing. Tellus nisi mauris, faucibus purus in sed id lobortis elit. Adipiscing purus nulla sit non,
Non id feugiat sed ullamcorper vitae turpis. Enim bibendum sem pharetra sociis aenean viverra laoreet tempus. Sem viverra purus pellentesque enim. Maecenas ultrices eu, faucibus fames ipsum ultricies bibendum. In ut lobortis pellentesque pulvinar convallis interdum commodo lectus convallis. Morbi sollicitudin aenean condimentum faucibus eget. Ut etiam commodo ultrices vestibulum porttitor. Pellentesque in iaculis ut accumsan, tincidunt blandit dignissim blandit pulvinar. Volutpat, ultricies eget nibh sed eget. Bibendum a semper molestie mollis viverra </p>
                </div>
            </div>
        </div>
    )
}

export default BrowseHistory_main
