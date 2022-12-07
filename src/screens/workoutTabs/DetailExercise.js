import { StyleSheet, TextInput, View, } from 'react-native'
import React, { useState } from 'react'
import style from '../../styles/tabsStyle'
import AppText from '../../components/AppText'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebaseConfig'

const DetailExercise = ({ route }) => {

    const { name, sets, reps, burned } = route.params
    const arep = burned / reps

    const [nSet, setNSet] = useState(`${sets}`)
    const [nRep, setNRep] = useState(`${reps}`)

    const logExercise = async () => {

    }

    return (
        <View style={style.container}>
            <AppText content={name.toUpperCase()} fontSize={16} />

            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingHorizontal: 15,
                marginTop: 15,
            }}>
                <View style={subStyle.itemStyle}>
                    <AppText content={'Number of sets'} fontSize={16} />
                    <TextInput
                        keyboardType='decimal-pad'
                        value={nSet}
                        onChangeText={setNSet}
                        style={subStyle.input} />
                </View>
                <View style={subStyle.itemStyle}>
                    <AppText content={'Repetitions/Set'} fontSize={16} />
                    <TextInput
                        keyboardType='decimal-pad'
                        value={nRep}
                        onChangeText={setNRep}
                        style={subStyle.input} />
                </View>
                <View style={[subStyle.itemStyle, subStyle.lastItem]}>
                    <AppText content={'Calories Burned'} fontSize={16} />
                    <AppText content={nSet * nRep * arep} fontSize={16} />
                </View>
            </View>

            <View style={{
                marginTop: 15,
                marginHorizontal: '30%'
            }}>
                <AppButton label={'LOG EXERCISE'} onPress={logExercise} />
            </View>
        </View >
    )
}

export default DetailExercise

const subStyle = StyleSheet.create({
    itemStyle: {
        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingHorizontal: 10
    },
    lastItem: {
        borderBottomWidth: 0,
    },
    input: {
        color: color.PrimaryColor,
        fontFamily: 'monospace',
        fontSize: 16,
        textAlign: 'right',
        width: 40,
    }
})