import React from 'react';
import Header from '@components/Home/header/Header';
import Upperfooter from '@components/Home/Footer/Upperfooter';
import MainRating from '@components/RatingReview/MainRating';

export default function RatingReview () {
    return(
        <>
        <Header />
        <MainRating />
        <Upperfooter />
        </>
    );
}