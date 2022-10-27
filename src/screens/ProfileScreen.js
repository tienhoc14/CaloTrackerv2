import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import color from '../styles/color'

const ProfileScreen = () => {
    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen