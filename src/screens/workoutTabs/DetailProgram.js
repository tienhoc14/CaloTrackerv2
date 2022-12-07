import { View, } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import AppText from '../../components/AppText'

const DetailProgram = () => {
  return (
    <View style={style.container}>
      <AppText content={'Detail program'} />
    </View>
  )
}

export default DetailProgram