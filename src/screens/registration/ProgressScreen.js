import { View, StatusBar } from 'react-native'
import React from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'

const ProgressScreen = ({ navigation }) => {
    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={5} onpress={() => navigation.goBack()} />

            <AppButton label={'NEXT'} onPress={() => navigation.navigate('Register')} />

        </View>
    )
}

export default ProgressScreen