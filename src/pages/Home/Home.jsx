import React from 'react';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';


const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Gallery></Gallery>
             <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;