import React from 'react';
import Banner from "../Home/Banner/Banner";
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Features from './Features/Features';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;