import { View, } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import style from '../../styles/tabsStyle'
import Food from '../../components/Food'

const FavoriteScreen = () => {
    return (
        <View style={style.container}>
            <AppText content={'Favorite'} />

        </View>
    )
}

export default FavoriteScreen