import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from './Home';
import Productos from './Productos';


const Tabs = createBottomTabNavigator();

export const TabNavigationParcial = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tabs.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="Productos" 
                component={Productos} 
                options={{
                    tabBarLabel: 'Productos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
