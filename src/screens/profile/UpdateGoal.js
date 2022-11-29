import { View } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import ItemDetails from '../../components/ItemDetails'

const UpdateGoal = ({ route }) => {
    const { profile } = route.params

    return (
        <View style={style.container}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
            }}>
                <ItemDetails label={'Current weight'} data={profile.weight + profile.weightUnit} />
                <ItemDetails label={'Goal weight'} data={profile.goalWeight + profile.weightUnit} />
                <ItemDetails label={'Weekly change'} data={profile.weeklyChange} />
                <ItemDetails label={'Activity Level'} data={profile.activity} last={'yes'} />

            </View>
        </View>
    )
}

export default UpdateGoal