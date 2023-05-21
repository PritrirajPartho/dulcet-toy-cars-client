import React from 'react';
import g2 from '../../../../public/gallery/g-2.jpeg';
import g3 from '../../../../public/gallery/g-3.jpeg';
import g4 from '../../../../public/gallery/g-4.jpeg';
import g5 from '../../../../public/gallery/g-5.jpeg';
import g6 from '../../../../public/gallery/g-6.jpeg';
import g7 from '../../../../public/gallery/g-7.jpeg';

const Gallery = () => {
    return (
    <section className='mb-12'>
            <h1 className='text-4xl text-green-600 text-center mt-8 mb-8'>Photo Gallery</h1>
            <div className='flex justify-center'>
                <img className='w-52 border-2 border-blue-800 mr-4 rounded' src={g2} alt="" />
                <img  className='w-52 border-2 border-blue-800 mr-4 rounded' src={g3} alt="" />
                <img className='w-52 border-2 border-blue-800 mr-4 rounded' src={g4} alt="" />
                <img className='w-52 border-2 border-blue-800 mr-4 rounded' src={g5} alt="" />zx
            </div>
            <div className='flex justify-center mt-8 mr-8 '>
                <img className='w-92 h-60 mt-14 border-2 border-blue-800 rounded' src={g6} alt="" />
                <img className='w-80 h-80 ms-10 border-2 border-blue-800 rounded' src={g7} alt="" />
            </div>
    </section>
    );
};

export default Gallery;