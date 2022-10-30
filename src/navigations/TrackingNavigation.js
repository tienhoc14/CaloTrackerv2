import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecentScreen from '../screens/trackingTabs/RecentScreen';
import FavoriteScreen from '../screens/trackingTabs/FavoriteScreen';
import MyFoodScreen from '../screens/trackingTabs/MyFoodScreen';
import color from '../styles/color';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const TrackingNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: color.BGcolor,
                },
                tabBarIndicatorStyle: {
                    borderBottomColor: color.PrimaryColor,
                    borderBottomWidth: 1,
                    height: 1,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: color.PrimaryColor,
                tabBarInactiveTintColor: 'grey',
            }}
        >
            <Tab.Screen name="Recent" component={RecentScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="history" size={22} color={color} />
                )
            }} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="heart-outlined" size={22} color={color} />
                )
            }} />
            <Tab.Screen name="MyFood" component={MyFoodScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="my-library-books" size={22} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default TrackingNavigation