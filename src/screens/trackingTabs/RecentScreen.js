import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppText from '../../components/AppText'
import Food from '../../components/Food'
import style from '../../styles/tabsStyle'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig'

const RecentScreen = ({ mealTitle, date }) => {

    const [allFood, setAllFood] = useState([])

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "food"));

        var data = []
        querySnapshot.forEach(doc => {
            data.push(doc.data())
        })

        setAllFood(data)
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, []);

    return (
        <View style={style.container}>
            <AppText content={'Recently Tracked'} />

            {allFood.map((value, index) => {
                return <Food key={index} foodTitle={value.name} mealTitle={mealTitle} date={date}
                    calo={value.kcal} quantity={value.size} unit={value.unit}
                    carbs={value.carbs} fat={value.fat} protein={value.protein} />
            })}
        </View>
    )
}

export default RecentScreen