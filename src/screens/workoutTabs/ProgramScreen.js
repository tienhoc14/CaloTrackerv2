import { ScrollView, View, } from 'react-native'
import React from 'react'
import color from '../../styles/color'
import Program from '../../components/Program'

import { dumbbell, home_workout, yoga } from '../../model/data_exercise'

const ProgramScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: color.BGcolor,
        }}>
            <ScrollView
                style={{ marginBottom: 15, }}
                showsVerticalScrollIndicator={false}
            >
                <Program category={'HOME WORKOUT'} list={home_workout} />
                <Program category={'YOGA'} list={yoga} />
                <Program category={'WORKOUT WITH DUMBBELL'} list={dumbbell} />
            </ScrollView>
        </View>
    )
}

export default ProgramScreen