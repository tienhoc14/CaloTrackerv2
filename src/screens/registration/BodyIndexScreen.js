import { View, StatusBar, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import note from '../../utils/note'
import AppText from '../../components/AppText'

const BodyIndexScreen = ({ navigation, route }) => {

    const { userInfor } = route.params
    const [bodyIndex, setBodyIndex] = useState({ ...userInfor })

    const [switchHeight, setSwitchHeight] = useState(false)
    const [switchWeight, setSwitchWeight] = useState(false)

    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={4} />

            <View style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 20,
            }}>
                <AppText content={'What is your height?'} fontSize={20} />
                <View>
                    <View
                        style={style.inputWrapper}
                    >
                        <TextInput
                            onChangeText={text => setBodyIndex({
                                ...bodyIndex,
                                height: text,
                                heightUnit: switchHeight ? 'ft' : 'cm'
                            })}
                            keyboardType='decimal-pad'
                            maxLength={3}
                            fontSize={16}
                            style={{ flex: 1 }}
                            textAlign='center'
                        />
                        <AppText content={!switchHeight ? 'cm' : 'ft'}
                            color={'grey'} fontSize={16} />
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            setSwitchHeight(s => !s)
                            setBodyIndex({
                                ...bodyIndex,
                                heightUnit: !switchHeight ? 'ft' : 'cm'
                            })
                        }}
                        activeOpacity={1}
                        style={style.switchWrapper}
                    >
                        <View style={[style.switchButton, {
                            backgroundColor: switchHeight ? color.PrimaryColor : color.BGcolor
                        }]}>
                            <AppText content={'ft'}
                                color={switchHeight ? '#fff' : 'black'} />
                        </View>

                        <View style={[style.switchButton, {
                            backgroundColor: !switchHeight ? color.PrimaryColor : color.BGcolor
                        }]}>
                            <AppText content={'cm'}
                                color={!switchHeight ? '#fff' : 'black'} />
                        </View>
                    </TouchableOpacity>
                </View>

                <AppText content={'What is your current weight?'} fontSize={20} />
                <View>
                    <View
                        style={style.inputWrapper}
                    >
                        <TextInput
                            onChangeText={text => setBodyIndex({
                                ...bodyIndex,
                                weight: text,
                                weightUnit: switchWeight ? 'lbs' : 'kg'
                            })}
                            keyboardType='decimal-pad'
                            maxLength={3}
                            fontSize={16}
                            style={{ flex: 1 }}
                            textAlign='center'
                        />
                        <AppText content={!switchWeight ? 'kg' : 'lbs'}
                            color={'grey'} fontSize={16} />
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            setSwitchWeight(s => !s)
                            setBodyIndex({
                                ...bodyIndex,
                                weightUnit: !switchWeight ? 'lbs' : 'kg'
                            })
                        }}
                        activeOpacity={1}
                        style={style.switchWrapper}
                    >
                        <View style={[style.switchButton, {
                            backgroundColor: switchWeight ? color.PrimaryColor : color.BGcolor
                        }]}>
                            <AppText content={'lbs'}
                                color={switchWeight ? '#fff' : 'black'} />
                        </View>

                        <View style={[style.switchButton, {
                            backgroundColor: !switchWeight ? color.PrimaryColor : color.BGcolor
                        }]}>
                            <AppText content={'kg'}
                                color={!switchWeight ? '#fff' : 'black'} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ bottom: 40 }}>
                <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                    <AppText content={note.content} fontSize={12} />
                </Text>

                <AppButton label={'NEXT'} onPress={() => {
                    if (bodyIndex.weight > 200) {
                        alert("can nang phai nho hon 200")
                    } else {
                        console.log(bodyIndex);
                        navigation.navigate('Progress', {
                            userInfor: bodyIndex
                        })
                    }
                }} />
            </View>
        </View>
    )
}

export default BodyIndexScreen

const style = StyleSheet.create({
    switchWrapper: {
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    switchButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: 100,
        marginTop: 20,
    }
})