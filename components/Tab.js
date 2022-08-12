import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './Home';
import { Producto } from './Producto';


const Tabs = createBottomTabNavigator();

export const Tab = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Settings" component={Producto} />
        </Tabs.Navigator>
    );
}
