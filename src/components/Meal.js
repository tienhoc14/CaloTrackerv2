import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Meal = ({ mealTitle, description, calo }) => {
    
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => { }}
            style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingTop: 15,
                paddingBottom: calo ? 10 : 15,
                paddingHorizontal: 30,
                marginTop: 15,
            }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View>
                    <AppText content={mealTitle} fontWeight='bold' fontSize={16} />
                    <AppText content={description} fontSize={12} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Tracking', {
                            mealTitle: mealTitle
                        })
                    }}>
                    <Ionicons name="ios-add-circle" size={30} color={'#ccc'} />
                </TouchableOpacity>
            </View>

            {calo && (
                <View style={{
                    alignItems: 'center',
                    borderTopColor: '#ccc',
                    borderTopWidth: 0.5,
                    paddingTop: 5,
                    marginTop: 10,
                }}>
                    <AppText content={`${calo} calories`} fontSize={12} />
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Meal