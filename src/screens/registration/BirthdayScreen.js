import { View, StatusBar, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import note from '../../utils/note'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

const BirthdayScreen = ({ navigation }) => {

    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState('Choose date')

    const maxDate = new Date().getFullYear() - 18
    const minDate = maxDate - 62

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);

        let tempDate = new Date(currentDate)
        let dateString = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setDateString(dateString)
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            maximumDate: new Date(maxDate, 11, 31),
            minimumDate: new Date(minDate, 0, 1)
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={3} />

            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>

                <View
                    style={{
                        marginVertical: 20,
                    }}>
                    <AppText content={'What is your date of birth?'} fontSize={20} />
                </View>

                <TouchableOpacity
                    onPress={showDatepicker}
                    style={{
                        borderWidth: 2,
                        borderColor: color.PrimaryColor,
                        width: '60%',
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                    }}
                >
                    <AppText content={dateString} fontWeight={'bold'} />
                </TouchableOpacity>

            </View>

            <View style={{ bottom: 40 }}>
                <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                    <AppText content={note.content} fontSize={12} />
                </Text>

                <AppButton label={'NEXT'} onPress={() => navigation.navigate('BodyIndex')} />

            </View>

        </View>
    )
}

export default BirthdayScreen