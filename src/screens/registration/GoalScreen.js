import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import RadioButton from '../../components/RadioButton'
import note from '../../utils/note'

const GoalScreen = ({ navigation }) => {

    const [goal, setGoal] = useState('')

    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={0} />

            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>

                <View
                    style={{
                        marginVertical: 20,
                    }}>
                    <AppText content={'What is your goal?'} fontSize={20} />
                </View>

                <RadioButton getValue={setGoal}
                    listButton={['Lost weight', 'Maintain weight', 'Gain weight']} />

            </View>

            <View style={{ bottom: 40 }}>
                <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                    <AppText content={note.content} fontSize={12} />
                </Text>

                <AppButton label={'NEXT'} onPress={() => {
                    navigation.navigate('Activity')
                    console.log(goal);
                }} />
            </View>
        </View>
    )
}

export default GoalScreen