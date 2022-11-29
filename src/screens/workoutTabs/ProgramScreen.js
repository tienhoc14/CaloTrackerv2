import { ScrollView, View, } from 'react-native'
import React from 'react'
import color from '../../styles/color'
import Program from '../../components/Program'

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
                <Program category={'HOME WORKOUT'} />
                <Program category={'YOGA'} />
                <Program category={'STRENGTH TRAINING'} />
            </ScrollView>
        </View>
    )
}

export default ProgramScreen