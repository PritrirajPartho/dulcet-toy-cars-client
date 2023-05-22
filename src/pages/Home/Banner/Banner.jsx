import React from 'react';
import './Banner.css'
import sldie1 from '../../../../public/img/slider-one.jpeg';
import sldie2 from '../../../../public/img/slider-two.jpeg';
import sldie3 from '../../../../public/img/slider-three.jpeg';

const Banner = () => {
    return (
    <section>
        <h1 className='text-center text-3xl text-blue-600 mt-10'>That's Your Choice</h1>
      <div className="carousel slide-controll">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={sldie1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={sldie2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={sldie3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    </section>
    );
};

export default Banner;