import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopData from './ShopData';

const ShopByCategory = () => {
    const[toys, setToys] = useState([]);
    const[activetab, setaActivetab] = useState('bus');

    useEffect(() => {
     fetch(`http://localhost:5000/alltoys/${activetab}`)
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
                <Tab className={'text-2xl bg-red-800 ms-6 px-10 border-2 border-r-lime-700'} onClick={() => handleTab('truck')}>Truck</Tab>
                <Tab className={'text-2xl bg-red-800 ms-6 px-10 border-5 border-r-lime-700'} onClick={() => handleTab('car')}>Car</Tab>
                <Tab className={'text-2xl bg-red-800 ms-6 px-10 border-5 border-r-lime-700'} onClick={() => handleTab('bus')}>Bus</Tab>
            </TabList>
            <TabPanel className={'text-center'}>
                {content}
            </TabPanel >
            <TabPanel className={'text-center'}>
                {content}
            </TabPanel>
            <TabPanel className={'text-center'}>
                {content}
            </TabPanel>
      </Tabs>
    );
};

export default ShopByCategory;