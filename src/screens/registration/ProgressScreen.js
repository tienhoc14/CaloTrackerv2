import { View, StatusBar, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import note from '../../utils/note'
import AppText from '../../components/AppText'
import RadioButton from '../../components/RadioButton'

const ProgressScreen = ({ navigation, route }) => {

    const { userInfor } = route.params
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus(false);
    });

    const [progress, setProgress] = useState({ ...userInfor })

    const WeeklyChange = (unit) => {
        if (userInfor.weightUnit == 'kg') {
            return ['0,25 kg per week', '0.5 kg per week']
        } else {
            return ['0,5 lbs per week', '1 lbs per week']
        }
    }

    return (

        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={5} />
            <View style={{
                alignItems: 'center',
                marginTop: 20,
                flex: 1,
            }}>
                <AppText content={'What is your goal weight?'} fontSize={20} />
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                            width: 100,
                            marginTop: 20,
                        }}
                    >
                        <TextInput
                            onChangeText={text => setProgress({
                                ...progress,
                                goalWeight: text
                            })}
                            keyboardType='decimal-pad'
                            maxLength={3}
                            fontSize={16}
                            style={{ flex: 1 }}
                            textAlign='center'
                        />
                        <AppText content={progress.weightUnit}
                            color={'grey'} fontSize={16} />
                    </View>

                </View>

                <AppText content={'Choose your weekly change'} fontSize={20} />

                <RadioButton getValue={(label) => setProgress({
                    ...progress,
                    weeklyChange: label
                })}
                    listButton={WeeklyChange(progress.weightUnit)} />
            </View>

            {!keyboardStatus &&
                <View style={{
                    bottom: 40,
                }}>
                    <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                        <AppText content={note.content} fontSize={12} />
                    </Text>

                    <AppButton label={'NEXT'} onPress={() => {
                        navigation.navigate('Register', {
                            userInfor: progress
                        })
                        console.log(progress);
                    }} />
                </View>
            }
        </View >
    )
}

export default ProgressScreen

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
    }
})