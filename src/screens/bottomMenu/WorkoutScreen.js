import { View, Text } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProgramScreen from '../workoutTabs/ProgramScreen';
import ExerciseScreen from '../workoutTabs/ExerciseScreen';
import color from '../../styles/color';

const Tab = createMaterialTopTabNavigator();

const WorkoutScreen = () => {

  return (
    <View
      style={style.container}
    >
      <HeaderBar title={'Workout'} />
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
          tabBarActiveTintColor: color.PrimaryColor,
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen name='Program' component={ProgramScreen} />
        <Tab.Screen name='Exercise' component={ExerciseScreen} />
      </Tab.Navigator>

    </View>
  )
}

export default WorkoutScreen