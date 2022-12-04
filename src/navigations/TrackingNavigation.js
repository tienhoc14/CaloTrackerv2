import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecentScreen from '../screens/trackingTabs/RecentScreen';
import FavoriteScreen from '../screens/trackingTabs/FavoriteScreen';
import MyFoodScreen from '../screens/trackingTabs/MyFoodScreen';
import color from '../styles/color';

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const TrackingNavigation = ({ mealTitle, date }) => {

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
            <Tab.Screen name="Recent" children={() => { return <RecentScreen mealTitle={mealTitle} date={date} /> }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="history" size={22} color={color} />
                    )
                }} />
            <Tab.Screen name="Favorite" children={() => { return <FavoriteScreen mealTitle={mealTitle} date={date} /> }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="heart-outlined" size={22} color={color} />
                    )
                }} />
            <Tab.Screen name="MyFood" children={() => { return <MyFoodScreen mealTitle={mealTitle} date={date} /> }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="my-library-books" size={22} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default TrackingNavigation