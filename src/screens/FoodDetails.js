import { View } from 'react-native'
import React from 'react'
import style from '../styles/tabsStyle'
import AppText from '../components/AppText'

const FoodDetails = ({ route }) => {

    const { foodTitle } = route.params

    return (
        <View style={style.container}>
            <AppText content={foodTitle} />
        </View>
    )
}

export default FoodDetails