import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StartScreen from '../screens/StartScreen';

const Stack = createNativeStackNavigator()

const StartNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Start' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Start' component={StartScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default StartNavigation