import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
        content = <p>not data found</p>
    }
    return (
        <Tabs>
            <TabList className={'flex justify-center '}>
                <Tab className={`tab tab1${activetab == "truck"? "bg-red-600 text-white" : ""}`} onClick={() => handleTab('truck')}>Truck</Tab>
                <Tab className={activetab == "car"? "bg-red-600 text-white": ''} onClick={() => handleTab('car')}>Car</Tab>
                <Tab className={activetab == 'bus' ? 'bg-red-600 text-white' : ''} onClick={() => handleTab('bus')}>Bus</Tab>
            </TabList>
             <div className='flex justify-center flex-row'>
                <TabPanel className={'flex justify-center'}>
                    {content}
                </TabPanel >
                <TabPanel className={'grid grid-cols-2 md:grid-cols-2'}>
                    {content}
                </TabPanel>
                <TabPanel className={'grid grid-cols-2 md:grid-cols-2'}>
                    {content}
                </TabPanel>
             </div>
      </Tabs>
    );
};

export default ShopByCategory;