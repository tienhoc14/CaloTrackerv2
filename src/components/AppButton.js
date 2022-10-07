import { TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'

const AppButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#21BA3A',
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