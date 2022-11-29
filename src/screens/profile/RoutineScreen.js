import { View } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import ItemDetails from '../../components/ItemDetails'

const RoutineScreen = ({ route }) => {

    const { profile } = route.params

    return (
        <View style={style.container}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
            }}>

                <ItemDetails label={'Workouts / Week'} data={5} />
                <ItemDetails label={'Minutes / Workout'} data={60} />
                <ItemDetails label={'Calories consumption'} data={300} last={'yes'} />

            </View>
        </View>
    )
}

export default RoutineScreen