import { View, } from 'react-native'
import React from 'react'
import color from '../../styles/color'
import Program from '../../components/Program'

const ProgramScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: color.BGcolor,
        }}>

            <Program />
            <Program />

        </View>
    )
}

export default ProgramScreen