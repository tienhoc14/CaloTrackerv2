import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StartScreen from '../screens/StartScreen';
import GoalScreen from '../screens/registration/GoalScreen';
import ActivityScreen from '../screens/registration/ActivityScreen';
import GenderScreen from '../screens/registration/GenderScreen';
import BirthdayScreen from '../screens/registration/BirthdayScreen';
import BodyIndexScreen from '../screens/registration/BodyIndexScreen';
import ProgressScreen from '../screens/registration/ProgressScreen';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator()

const StartNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Start' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Start' component={StartScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Goal' component={GoalScreen} />
            <Stack.Screen name='Activity' component={ActivityScreen} />
            <Stack.Screen name='Gender' component={GenderScreen} />
            <Stack.Screen name='Birthday' component={BirthdayScreen} />
            <Stack.Screen name='BodyIndex' component={BodyIndexScreen} />
            <Stack.Screen name='Progress' component={ProgressScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='BottomMenu' component={BottomNavigation} />
        </Stack.Navigator>
    )
}

export default StartNavigation