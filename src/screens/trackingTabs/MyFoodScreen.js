import { View, } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import style from '../../styles/tabsStyle'

const MyFoodScreen = () => {
    return (
        <View style={style.container}>
            <AppText content={'My Foods'} />
        </View>
    )
}

export default MyFoodScreen