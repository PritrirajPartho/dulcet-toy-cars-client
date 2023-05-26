import React, { useEffect, useState } from 'react';
import './ShopByCategory.css';
import 'react-tabs/style/react-tabs.css';
import ShopData from './ShopData';


const ShopByCategory = () => {
    const[toys, setToys] = useState([]);
    const[activetab, setaActivetab] = useState('bus');

    useEffect(() => {
     fetch(`https://toy-marketplace-server-sepia.vercel.app/alltoys/${activetab}`)
     .then(res => res.json())
     .then(data => {
        setToys(data)
     })
    
    },[activetab])
    
    let content = null;
    const handleTab = (tabname) =>{
       console.log(tabname)
       setaActivetab(tabname);
    }

    if(toys.length>0){
        content = toys.map(toy => <ShopData key={toy._id} toy={toy}/>)
    }
    if(toys.length === 0){
        content = <p className='text-3xl font-bold mt-10 mb-10'>not data found</p>
    }
    return (
     <section data-aos="fade-up">
         <h1 className='text-center text-emerald-600 text-5xl mb-4 mt-8'>Shop by category</h1>
         <div className='flex justify-center bg-none'>
         <div className="tabs mt-4">
            <a className={`bg-slate-400 border-2 border-red-600 px-4 py-2 text-2xl text-white mr-10 rounded ${activetab == 'regular-car'? 'bg-red-500': 'bg-slate-400 border-2'}`} onClick={() => handleTab('regular-car')}>Car</a> 
            <a className={`bg-slate-400 border-2 border-red-600 px-4 py-2 text-2xl text-white mr-10 rounded ${activetab == 'bus'? 'bg-red-500': 'bg-slate-400 border-2'}`} onClick={() => handleTab('bus')}>Bus</a> 
            <a className={`bg-slate-400 border-2 border-red-600 px-4 py-2 text-2xl text-white mr-10 rounded ${activetab == 'truck'? 'bg-red-500': 'bg-slate-400 border-2'}`} onClick={() => handleTab('truck')}>Truck</a>
            </div>
         </div>
          <div className='flex justify-center  lg:flex-row shop'>
            {content}
          </div>
     </section>
    );
};

export default ShopByCategory;