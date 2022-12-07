import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from '../styles/tabsStyle'

import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import color from '../styles/color';
import TrackingNavigation from '../navigations/TrackingNavigation';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Food from '../components/Food';

const TrackingScreen = ({ route }) => {
    const { mealTitle, date } = route.params
    const navigation = useNavigation()
    const [foodsMatch, setFoodsMatch] = useState()
    const [txtSearch, setTxtSearch] = useState()

    const searchHandler = async (text) => {
        const sname = text.toLowerCase()
        const q = query(collection(db, "food"), where("sname", ">=", sname),
            where('sname', '<=', sname + '\uf8ff'));

        var data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        setFoodsMatch(data)
    }

    return (
        <View style={style.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Ionicons name="caret-back-outline" size={24} color="black"
                    onPress={() => { navigation.goBack() }}
                    style={{
                        position: 'absolute',
                        left: 0,
                    }} />
                <AppText content={mealTitle} fontSize={18} />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
                marginBottom: 20,
                marginHorizontal: '5%',
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 50,
                    paddingVertical: 3,
                    flex: 1,
                    marginRight: 10,
                }}>
                    <EvilIcons name="search" size={24} color="black" style={{ marginHorizontal: 5, }} />
                    <TextInput
                        value={txtSearch}
                        style={{ flex: 1, fontFamily: 'monospace' }}
                        placeholder='Search for a food'
                        onChangeText={searchHandler} />
                    <MaterialIcons name="cancel" size={24} color="grey" style={{ marginHorizontal: 8, }}
                        onPress={() => {
                            setTxtSearch("")
                            setFoodsMatch()
                        }} />
                </View>

                <TouchableOpacity>
                    <MaterialIcons name="qr-code-scanner" size={24} color={color.PrimaryColor}
                        onPress={() => { }} />
                </TouchableOpacity>
            </View>


            {foodsMatch && <AppText content={'SEARCH RESULTS'} />}
            {foodsMatch ?
                foodsMatch.map((food) => (
                    <Food key={food.name} foodTitle={food.name} mealTitle={mealTitle} date={date}
                        calo={food.kcal} quantity={food.size} unit={food.unit}
                        carbs={food.carbs} fat={food.fat} protein={food.protein} />)) :

                <TrackingNavigation mealTitle={mealTitle} date={date} />}

        </View>
    )
}

export default TrackingScreen