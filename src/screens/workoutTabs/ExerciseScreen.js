import { View, ScrollView } from 'react-native'
import React from 'react'
import color from '../../styles/color'
import Exercise from '../../components/Exercise'

import { strength, } from '../../model/data_exercise'

const ExerciseScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: color.BGcolor,
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {strength.map((value) => (
                    <Exercise name={value.name} key={value.name}
                        sets={value.sets} reps={value.reps} burned={value.burned} />
                ))}
            </ScrollView>
        </View>
    )
}

export default ExerciseScreen