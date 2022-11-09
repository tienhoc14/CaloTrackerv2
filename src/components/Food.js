import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';

const Food = ({ foodTitle, calo, quantity }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('FoodDetails', {
                    foodTitle: foodTitle
                })
            }}
            style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingVertical: 15,
                paddingHorizontal: 30,
                marginTop: 15,
            }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View>
                    <AppText content={foodTitle} fontWeight='bold' fontSize={16} />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AppText content={calo} fontSize={12} color='grey' />
                        <Entypo name="dot-single" size={20} color="grey" />
                        <AppText content={quantity} fontSize={12} color='grey' />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => { }}>
                    <Ionicons name="ios-add-circle" size={30} color={'#ccc'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Food