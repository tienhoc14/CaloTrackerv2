import { View, Text } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'

const NewsfeedScreen = () => {
  return (
    <View
    style={style.container}
    >
      <HeaderBar title={'Newsfeed'} />
      <Text>NewsfeedScreen</Text>
    </View>
  )
}

export default NewsfeedScreen