import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName='' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='BottomMenu' component={BottomNavigation} />
            <Stack.Screen name='Settings' component={SettingsScreen} />

        </Stack.Navigator>
    )
}

export default AppStack