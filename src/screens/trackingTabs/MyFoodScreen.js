import { View, } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import style from '../../styles/tabsStyle'
import Food from '../../components/Food'

const MyFoodScreen = () => {
    return (
        <View style={style.container}>
            <AppText content={'My Foods'} />

            <Food foodTitle={'Bun cha'} calo={'123 kcal'} quantity={'100g'} />
            <Food foodTitle={'Taco'} calo={'300 kcal'} quantity={'50g'} />
            <Food foodTitle={'Thit bo'} calo={'250 kcal'} quantity={'100g'} />
        </View>
    )
}

export default MyFoodScreen