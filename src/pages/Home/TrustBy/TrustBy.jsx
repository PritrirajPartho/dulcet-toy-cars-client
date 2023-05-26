import React from 'react';
import './TrustBy.css';
import com1 from '../../../../public/com/addidas.png';
import com2 from '../../../../public/com/ibm.png';
import com3 from '../../../../public/com/ikea.webp';
import com4 from '../../../../public/com/nord.png';
import com5 from '../../../../public/com/red-bull.png';
import com6 from '../../../../public/com/fendi.png';

const TrustBy = () => {
    return (
    <section className='mt-8 mb-12'>
        <h1 className='text-center text-emerald-600 text-5xl mb-4'>Trusted By</h1>
        <div className='flex flex-row trust'>
            <img className='w-60 h-28' src={com1} />
            <img className='w-60 h-28' src={com2} />
            <img className='w-60 h-28' src={com3} />
            <img className='w-60 h-28' src={com4} />
            <img className='w-60 h-28' src={com5} />
            <img className='w-60 h-28' src={com6} />
        </div>
    </section>
    );
};

export default TrustBy;