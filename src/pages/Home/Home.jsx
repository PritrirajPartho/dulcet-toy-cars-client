import React, { useEffect } from 'react';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import TrustBy from './TrustBy/TrustBy';
import HappyClient from './HappyClient/HappyClient';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();


const Home = () => {
    useEffect(() => {
        document.title = 'Dulcet-Toy-Cars | Home'
    },[])
    return (
        <div >
             <Banner></Banner>
             <Gallery></Gallery>
             <ShopByCategory></ShopByCategory>
             <TrustBy></TrustBy>
             <HappyClient></HappyClient>
        </div>
    );
};

export default Home;