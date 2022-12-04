import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TrackingScreen from '../screens/TrackingScreen';
import InformationScreen from '../screens/profile/InformationScreen';
import FoodDetails from '../screens/FoodDetails';
import DetailProgram from '../screens/workoutTabs/DetailProgram';
import UpdateGoal from '../screens/profile/UpdateGoal';
import MacroScreen from '../screens/profile/MacroScreen';
import RoutineScreen from '../screens/profile/RoutineScreen';

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
            <Stack.Screen name='Update Goal' component={UpdateGoal} />
            <Stack.Screen name='Macronutrients' component={MacroScreen} />
            <Stack.Screen name='Workout Goals' component={RoutineScreen} />
            <Stack.Screen name='FoodDetails' component={FoodDetails} options={{
                headerTitle: 'Food Details'
            }} />
            <Stack.Screen name='DetailProgram' component={DetailProgram} />

        </Stack.Navigator>
    )
}

export default AppStack