import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import color from '../../styles/color'
import AppText from '../../components/AppText'
import Exercise from '../../components/Exercise'

const ExerciseScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: color.BGcolor,
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Exercise name={'Back Extension'} />
                <Exercise name={'Bar Dips'} />
                <Exercise name={'Barbell Military Press'} />
                <Exercise name={'Barbell Row'} />
                <Exercise name={'Bench Press'} />
                <Exercise name={'Bent Arm'} />
                <Exercise name={'Biceps Curl'} />
                <Exercise name={'Calf Raise'} />
                <Exercise name={'Chin Ups'} />
                <Exercise name={'Deadlift'} />
                <Exercise name={'Decline Bench Press'} />
                <Exercise name={'Dips'} />
                <Exercise name={'Dumbbell Press'} />
                <Exercise name={'Dumbbel Row'} />
                <Exercise name={'Flat Dubbell Fly'} />
                <Exercise name={'Front Squats'} />
                <Exercise name={'Hack Squats'} />
                <Exercise name={'Hip Abduction'} />
            </ScrollView>
        </View>
    )
}

export default ExerciseScreen