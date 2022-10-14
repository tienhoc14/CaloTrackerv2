import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DiaryScreen from '../screens/bottomMenu/DiaryScreen'
import ProgressScreen from '../screens/bottomMenu/ProgressScreen'
import WorkoutScreen from '../screens/bottomMenu/WorkoutScreen'
import MoreScreen from '../screens/bottomMenu/MoreScreen'
import NewsfeedScreen from '../screens/bottomMenu/NewsfeedScreen'
import color from '../styles/color'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.PrimaryColor,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'monospace'
        }
      }}
    >
      <Tab.Screen name="Diary" component={DiaryScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book-edit" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chart-areaspline" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Newsfeed" component={NewsfeedScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="chat" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Workout" component={WorkoutScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="dumbbell" size={size-3} color={color} />
        )
      }} />
      <Tab.Screen name="More" component={MoreScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="reorder" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default BottomNavigation