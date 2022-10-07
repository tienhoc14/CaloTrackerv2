import { View, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'

const StartScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
                flex: 1,
                backgroundColor: '#F2EDE8',
                paddingHorizontal: 20,
            }}
        >
            <View style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
            }}>
                <AppText content={'Calories Tracker'} fontSize={25} fontWeight='bold' />
            </View>

            <View
                style={{
                    bottom: 40,
                }}
            >
                <TouchableOpacity
                    onPress={
                        () => navigation.navigate('Register')
                    }
                    style={{
                        backgroundColor: '#21BA3A',
                        height: 50,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <AppText content={'GET STARTED'} color='#fff' fontWeight={'bold'} />
                </TouchableOpacity>

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