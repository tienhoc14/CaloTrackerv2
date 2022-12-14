import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Meal = ({ mealTitle, description, calo, date, foods }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {

            }}
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

                    <View style={{ flexDirection: 'row' }}>
                        {foods ? foods.map(({ name }, index) => {
                            return <AppText content={index + 1 < foods.length ? `${name}, ` : name}
                                fontSize={12} key={index} />
                        })
                            : <AppText content={description} fontSize={12} />}
                    </View>

                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (mealTitle == "Exercise") {
                            navigation.navigate('Workout')
                        } else {
                            navigation.navigate('Tracking', {
                                mealTitle: mealTitle,
                                date: date
                            })
                        }
                    }}>
                    <Ionicons name="ios-add-circle" size={30} color={'#ccc'} />
                </TouchableOpacity>
            </View>

            {foods && (
                <View style={{
                    alignItems: 'center',
                    borderTopColor: '#ccc',
                    borderTopWidth: 0.5,
                    paddingTop: 5,
                    marginTop: 10,
                }}>
                    <AppText content={`${calo} kcal`} fontSize={12} />
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Meal