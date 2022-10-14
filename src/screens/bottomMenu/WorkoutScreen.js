import { View, Text } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'

const WorkoutScreen = () => {
  return (
    <View
      style={style.container}
    >

      <HeaderBar title={'Workout'} />

      <Text>WorkoutScreen</Text>
    </View>
  )
}

export default WorkoutScreen