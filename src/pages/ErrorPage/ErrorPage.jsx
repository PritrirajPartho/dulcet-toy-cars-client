import React from 'react';
import err from '../../../public/img/err-1.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img src={err} className='w-full h-full' />
        </div>
    );
};

export default ErrorPage;