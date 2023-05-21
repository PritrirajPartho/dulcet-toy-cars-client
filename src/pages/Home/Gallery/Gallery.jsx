import React from 'react';
import g2 from '../../../../public/gallery/g-2.jpeg';
import g3 from '../../../../public/gallery/g-3.jpeg';
import g4 from '../../../../public/gallery/g-4.jpeg';
import g5 from '../../../../public/gallery/g-5.jpeg';
import g6 from '../../../../public/gallery/g-6.jpeg';
import g7 from '../../../../public/gallery/g-7.jpeg';

const Gallery = () => {
    return (
    <section>
            <div className='flex justify-center'>
                <img className='w-52' src={g2} alt="" />
                <img  className='w-52' src={g3} alt="" />
                <img className='w-52' src={g4} alt="" />
                <img className='w-52' src={g5} alt="" />zx
                <img className='w-52' src={g6} alt="" />
                <img className='w-52' src={g7} alt="" />
            </div>
    </section>
    );
};

export default Gallery;