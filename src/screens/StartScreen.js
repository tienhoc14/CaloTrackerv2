import { View, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import color from '../styles/color'
import AppButton from '../components/AppButton'

const StartScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <View style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
            }}>
                <AppText content={'Calories Tracker'} fontSize={30} fontWeight='bold' />
            </View>

            <View
                style={{
                    bottom: 40,
                }}
            >

                <AppButton label={'GET STARTED'} onPress={() => navigation.navigate('Register')} />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingTop: 30,
                    }}
                >
                    <AppText content={'Already have an account? '} />
                    <TouchableOpacity
                        onPress={
                            () => navigation.navigate('Login')
                        }>
                        <AppText content={'Login'} color={'#21BA3A'} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default StartScreen