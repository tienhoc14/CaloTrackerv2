import { View, StatusBar, Text } from 'react-native'
import React, { useState } from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import RadioButton from '../../components/RadioButton'
import note from '../../utils/note'

const GenderScreen = ({ navigation }) => {

    const [gender, setGender] = useState('')

    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={2} />

            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>

                <View
                    style={{
                        marginVertical: 20,
                    }}>
                    <AppText content={'What is your gender?'} fontSize={20} />
                </View>

                <RadioButton getValue={setGender} listButton={['Male', 'Female']} />

            </View>

            <View style={{ bottom: 40 }}>
                <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                    <AppText content={note.content} fontSize={12} />
                </Text>

                <AppButton label={'NEXT'} onPress={() => {
                    navigation.navigate('Birthday')
                    console.log(gender);
                }} />

            </View>

        </View>
    )
}

export default GenderScreen