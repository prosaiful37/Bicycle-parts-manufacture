import React from 'react';
import Banner from "../Home/Banner/Banner";
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Features from './Features/Features';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;