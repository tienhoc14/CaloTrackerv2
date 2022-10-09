import { View, StatusBar } from 'react-native'
import React from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'

const BodyIndexScreen = ({ navigation }) => {
    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={4} onpress={() => navigation.goBack()} />

            <AppButton label={'NEXT'} onPress={() => navigation.navigate('Progress')} />

        </View>
    )
}

export default BodyIndexScreen