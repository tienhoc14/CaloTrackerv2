import { TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import color from '../styles/color'

const AppButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color.PrimaryColor,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppText content={label} color='#fff' fontWeight={'bold'} />
    </TouchableOpacity>
  )
}

export default AppButton