import { View, StatusBar, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import note from '../../utils/note'
import AppText from '../../components/AppText'
import RadioButton from '../../components/RadioButton'

const ProgressScreen = ({ navigation }) => {

    const [keyboardStatus, setKeyboardStatus] = useState(false);

    Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus(false);
    });

    const [switchWeight, setSwitchWeight] = useState(false)
    const [weightUnit, setWeightUnit] = useState('kg')
    const [progress, setProgress] = useState('')
    const [goalWeight, setGoalWeight] = useState('')

    const WeeklyChange = (unit) => {
        if (unit == 'kg') {
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
                            value={goalWeight}
                            onChangeText={text => setGoalWeight(text)}
                            keyboardType='decimal-pad'
                            maxLength={3}
                            fontSize={16}
                            style={{ flex: 1 }}
                            textAlign='center'
                        />
                        <AppText content={weightUnit}
                            color={'grey'} fontSize={16} />
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            setSwitchWeight(s => !s)
                            switchWeight ? setWeightUnit('kg') : setWeightUnit('lbs')
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

                <AppText content={'Choose your weekly change'} fontSize={20} />

                <RadioButton getValue={setProgress}
                    listButton={WeeklyChange(weightUnit)} />
            </View>

            {!keyboardStatus &&
                <View style={{
                    bottom: 40,
                }}>
                    <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                        <AppText content={note.content} fontSize={12} />
                    </Text>

                    <AppButton label={'NEXT'} onPress={() => {
                        navigation.navigate('Register')
                        console.log(goalWeight + weightUnit);
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