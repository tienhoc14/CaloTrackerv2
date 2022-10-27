import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TrackingScreen from '../screens/TrackingScreen';

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            headerTitleStyle: { fontSize: 18, },
            headerStyle: { backgroundColor: '#F2F2F2' }
        }} >
            <Stack.Screen name='BottomMenu' component={BottomNavigation} />
            <Stack.Screen name='Settings' component={SettingsScreen} options={{
                headerShown: true,
            }} />
            <Stack.Screen name='Profile' component={ProfileScreen} options={{
                headerShown: true,
            }} />
            <Stack.Screen name='Tracking' component={TrackingScreen} />
        </Stack.Navigator>
    )
}

export default AppStack