import { ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppText from './AppText'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { auth, db } from '../../firebaseConfig';
import { arrayRemove, arrayUnion, doc, getDoc, increment, setDoc } from 'firebase/firestore';

const Food = ({ foodTitle, calo, quantity, unit, mealTitle, date, carbs, fat, protein }) => {

    const navigation = useNavigation()
    const [oldMeal, setOldMeal] = useState()

    const getData = async () => {
        const docDiary = await getDoc(doc(db, "diary", auth.currentUser?.email))

        if (docDiary.data()[date]) {
            if (docDiary.data()[date][mealTitle]) {
                setOldMeal(docDiary.data()[date][mealTitle])
            }
        }
    }

    const logFood = async () => {

        let food = { quantity: 0 }
        if (oldMeal) {
            food = oldMeal.find((food) => {
                return food.name === foodTitle
            })

            if (typeof food !== 'undefined') {
                await setDoc(doc(db, "diary", auth.currentUser?.email), {
                    [date]: {
                        [mealTitle]: arrayRemove({
                            name: foodTitle,
                            quantity: food.quantity,
                            kcal: food.quantity / quantity * calo
                        }),
                    }
                }, { merge: true });

            } else {
                food = { quantity: 0 }
            }
        }

        await setDoc(doc(db, "diary", auth.currentUser?.email), {
            [date]: {
                [mealTitle]: arrayUnion({
                    name: foodTitle,
                    quantity: quantity + food.quantity,
                    kcal: (quantity + food.quantity) / quantity * calo
                }),
                macros: {
                    carbs: increment(carbs),
                    fat: increment(fat),
                    protein: increment(protein),
                }
            }
        }, { merge: true });

        ToastAndroid.show(`Logged ${foodTitle}`, ToastAndroid.SHORT);
        getData()
    }

    useEffect(() => {
        getData()

        const willFocusSubscription = navigation.addListener('focus', () => {
            getData();
        });

        return willFocusSubscription
    }, []);

    return (
        <TouchableOpacity
            onPress={async () => {
                // navigation.navigate('FoodDetails', {
                //     foodTitle: foodTitle
                // })
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
                        <AppText content={`${calo}kcal`} fontSize={12} color='grey' />
                        <Entypo name="dot-single" size={20} color="grey" />
                        <AppText content={quantity + unit} fontSize={12} color='grey' />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={logFood}>
                    <Ionicons name="ios-add-circle" size={30} color={'#ccc'} />
                </TouchableOpacity>
            </View >
        </TouchableOpacity >
    )
}

export default Food