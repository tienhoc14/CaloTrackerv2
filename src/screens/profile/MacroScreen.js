import { View } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import ItemDetails from '../../components/ItemDetails'

const MacroScreen = ({ route }) => {

    const { profile } = route.params

    const kcal = 2400
    const carb = 50
    const pro = 30
    const fat = 20
    return (
        <View style={style.container}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
            }}>

                <ItemDetails label={`Calories`} data={2400} />
                <ItemDetails label={`Carbohydrates`} data={`${carb}%`} />
                <ItemDetails label={`Protein`} data={`${pro}%`} />
                <ItemDetails label={`Fat`} data={`${fat}%`} last={'yes'} />

            </View>
        </View>
    )
}

export default MacroScreen