import { View, Text } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'

const ProgressScreen = () => {
  return (
    <View
      style={style.container}
    >
      <HeaderBar title={'Progress'} />
    </View>
  )
}

export default ProgressScreen