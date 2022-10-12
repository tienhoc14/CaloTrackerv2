import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DiaryScreen from '../screens/bottomMenu/DiaryScreen'
import ProgressScreen from '../screens/bottomMenu/ProgressScreen'
import WorkoutScreen from '../screens/bottomMenu/WorkoutScreen'
import MoreScreen from '../screens/bottomMenu/MoreScreen'
import NewsfeedScreen from '../screens/bottomMenu/NewsfeedScreen'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Newsfeed" component={NewsfeedScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigation