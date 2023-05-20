import React from 'react';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;