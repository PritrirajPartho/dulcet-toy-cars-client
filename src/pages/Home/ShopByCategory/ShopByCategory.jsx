import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <Tabs>
            <TabList className={'text-center'}>
                <Tab>Bus</Tab>
                <Tab>Truck</Tab>
                <Tab>Car</Tab>
            </TabList>
            <TabPanel className={'text-center'}>
                <h2>Any content 1</h2>
            </TabPanel >
            <TabPanel className={'text-center'}>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel className={'text-center'}>
                 <h2>Any content 3</h2>
            </TabPanel>
      </Tabs>
    );
};

export default ShopByCategory;