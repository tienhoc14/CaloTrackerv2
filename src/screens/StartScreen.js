import { View, SafeAreaView, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppText from '../components/AppText'
import color from '../styles/color'
import AppButton from '../components/AppButton'
import { auth } from '../../firebaseConfig'

const StartScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('AppStack')
            } else {
                setIsLoading(false)
            }
        })

        return unsubcribe
    }, [])

    return (
        <SafeAreaView
            style={{
                paddingTop: StatusBar.currentHeight,
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
                {isLoading ? <ActivityIndicator size={'large'} color={color.PrimaryColor} /> :
                    <>
                        <AppButton label={'GET STARTED'} onPress={() => navigation.navigate('Goal')} />

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
                                <AppText content={'Login'} color={color.PrimaryColor} />
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>

        </SafeAreaView>
    )
}

export default StartScreen