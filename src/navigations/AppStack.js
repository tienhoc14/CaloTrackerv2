import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TrackingScreen from '../screens/TrackingScreen';
import InformationScreen from '../screens/profile/InformationScreen';
import FoodDetails from '../screens/FoodDetails';

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: { fontSize: 18, },
            headerStyle: { backgroundColor: '#F2F2F2' }
        }} >
            <Stack.Screen name='BottomMenu' component={BottomNavigation} options={{
                headerShown: false
            }} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Tracking' component={TrackingScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='Personal Details' component={InformationScreen} />
            <Stack.Screen name='FoodDetails' component={FoodDetails} options={{
                headerTitle: ''
            }} />
        </Stack.Navigator>
    )
}

export default AppStack