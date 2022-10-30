import { View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import style from '../../styles/tabsStyle'

const RecentScreen = () => {
    return (
        <View style={style.container}>
            <AppText content={'Recently Tracked'} />
        </View>
    )
}

export default RecentScreen