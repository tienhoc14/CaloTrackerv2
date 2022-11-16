import { View, Text } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import AppText from '../../components/AppText'

const UpdateGoal = ({ route }) => {
    const { profile } = route.params

    return (
        <View style={style.container}>
            <AppText content={'DETAILS'} fontWeight='bold' fontSize={16} />

            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 10,
            }}>
                <AppText content={profile.weight} />
                <AppText content={profile.goalWeight} />
                <AppText content={profile.goal} />
                <AppText content={profile.weeklyChange} />
            </View>
        </View>
    )
}

export default UpdateGoal