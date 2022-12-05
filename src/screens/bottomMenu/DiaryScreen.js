import { View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderBar from '../../components/HeaderBar'
import style from '../../styles/tabsStyle'
import CircularProgress from 'react-native-circular-progress-indicator'
import AppText from '../../components/AppText'
import color from '../../styles/color'

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Meal from '../../components/Meal'
import { auth, db } from '../../../firebaseConfig'
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native'

const DiaryScreen = ({ }) => {

  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)

  const [profile, setProfile] = useState({})
  const [macros, setMacros] = useState({})

  const [dateNow, setDateNow] = useState(new Date())
  const date = dateNow
  const today = new Date().toDateString()

  const [eBreak, setEBreak] = useState(0)
  const [eLunch, setELunch] = useState(0)
  const [eDinner, seteDinner] = useState(0)
  const [eSnack, setESnack] = useState(0)

  const [eaten, setEaten] = useState(0)
  const [burned, setBurned] = useState(0)

  const [addWater, setAddWater] = useState(false)
  const [countWater, setCountWater] = useState(0)

  const [breakfast, setBreakfast] = useState()
  const [lunch, setLunch] = useState()
  const [dinner, setDinner] = useState()
  const [snack, setSnack] = useState()

  const caloGoal = profile.daily_kcal

  const getData = async () => {
    setIsLoading(true)
    setEaten(0)

    const docSnap = await getDoc(doc(db, "user_profile", auth.currentUser?.email))
    setProfile(docSnap.data())

    const docMacros = await getDoc(doc(db, "macronutrients", auth.currentUser?.email))
    setMacros(docMacros.data())

    const docDiary = await getDoc(doc(db, "diary", auth.currentUser?.email))

    let arr = []
    try {
      arr.push(docDiary.data()[date.toLocaleDateString()].Breakfast)
      arr.push(docDiary.data()[date.toLocaleDateString()].Lunch)
      arr.push(docDiary.data()[date.toLocaleDateString()].Dinner)
      arr.push(docDiary.data()[date.toLocaleDateString()].Snack)

      setBreakfast(arr[0])
      setLunch(arr[1])
      setDinner(arr[2])
      setSnack(arr[3])
    } catch (err) {
      setBreakfast()
      setLunch()
      setDinner()
      setSnack()
    }

    let i = 0, total = 0
    arr.forEach(meal => {
      i += 1
      if (meal) {
        let kcal = 0
        meal.forEach(food => {
          kcal += food.kcal
        });
        i == 1 && setEBreak(kcal)
        i == 2 && setELunch(kcal)
        i == 3 && seteDinner(kcal)
        i == 4 && setESnack(kcal)
        total += kcal
      }
      setEaten(total)
    });
    setIsLoading(false)

    if (docDiary.data()[date.toLocaleDateString()]) {
      docDiary.data()[date.toLocaleDateString()].waterTaken ?
        setCountWater(docDiary.data()[date.toLocaleDateString()].waterTaken * 4) :
        setCountWater(0)
    } else {
      setCountWater(0)
    }

  }

  const renderWater = (i) => {
    if (addWater) {
      return i < countWater ? color.PrimaryColor : 'grey'
    } else {
      return i <= countWater ? color.PrimaryColor : 'grey'
    }
  }

  const setWaterTaken = async (number) => {
    const dateSet = date.toLocaleDateString()
    await setDoc(doc(db, "diary", auth.currentUser?.email), {
      [dateSet]: { waterTaken: number == 0 ? 0 : (number / 4) }
    }, { merge: true });
  }

  useEffect(() => {
    getData()

    const willFocusSubscription = navigation.addListener('focus', () => {
      getData();
    });

    return willFocusSubscription
  }, []);

  const moveDate = (value) => {
    date.setDate(date.getDate() + value)
    setDateNow(date)
    getData()
  }

  return (
    <View style={style.container}>

      <HeaderBar title={'Diary'} />

      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ alignItems: 'center', flex: 1 }}>
          {isLoading ?
            <ActivityIndicator size={'small'} color={color.PrimaryColor} /> :
            <AppText content={eaten} fontSize={18} />
          }
          <AppText content={'EATEN'} />
        </View>

        <View style={{ flex: 1, }}>
          <CircularProgress
            value={eaten - burned}
            maxValue={caloGoal}
            showProgressValue={false}
            title={caloGoal - eaten + burned}
            subtitle={'CALO LEFT'}
            titleStyle={{ color: 'black', fontSize: 26, fontFamily: 'monospace' }}
            subtitleStyle={{ color: 'black', fontSize: 12, fontFamily: 'monospace' }}
            activeStrokeWidth={4}
            activeStrokeSecondaryColor={color.PrimaryColor}
            activeStrokeColor={color.SecondaryColor}
            inActiveStrokeWidth={4}
            inActiveStrokeColor={color.SecondaryColor}
            inActiveStrokeOpacity={0.2}
            duration={2000}
          />
        </View>

        <View style={{ alignItems: 'center', flex: 1 }}>
          <AppText content={burned} fontSize={18} />
          <AppText content={'BURNED'} />
        </View>
      </View>

      {/* three macros */}
      <TouchableOpacity
        onPress={() => {
        }}
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 15,
          marginTop: 15,
          flexDirection: 'row',
        }}>
        <View style={{ alignItems: 'center', flex: 1, }}>
          <AppText content={'Carbs'} />
          <AppText content={`0/${Math.round(profile.daily_kcal * macros.carbs / 100 / 4)}g`} />
        </View>
        <View style={{ alignItems: 'center', flex: 1, }}>
          <AppText content={'Protein'} />
          <AppText content={`0/${Math.round(profile.daily_kcal * macros.pro / 100 / 4)}g`} />
        </View>
        <View style={{ alignItems: 'center', flex: 1, }}>
          <AppText content={'Fat'} />
          <AppText content={`0/${Math.round(profile.daily_kcal * macros.fat / 100 / 9)}g`} />
        </View>
      </TouchableOpacity>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
        <Ionicons name="caret-back-outline" size={24} color="grey"
          onPress={() => moveDate(-1)} />

        <TouchableOpacity>
          <AppText color='grey'
            content={date.toDateString() == today ? "TODAY" : date.toLocaleDateString()} />
        </TouchableOpacity>

        <Ionicons name="caret-forward-outline" size={24} color="grey"
          onPress={() => moveDate(1)} />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 15, }}>
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          paddingVertical: 15,
          paddingHorizontal: 30,
        }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <AppText content={'Water'} fontSize={16} />
            <AppText content={`${countWater / 4}L`}
              fontSize={16} />
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(1)}
              onPress={() => {
                setAddWater(!addWater)
                setCountWater(addWater ? 1 : 0)
                setWaterTaken(addWater ? 1 : 0)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(2)}
              onPress={() => {
                setAddWater(false)
                setCountWater(2)
                setWaterTaken(2)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(3)}
              onPress={() => {
                setAddWater(false)
                setCountWater(3)
                setWaterTaken(3)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(4)}
              onPress={() => {
                setAddWater(false)
                setCountWater(4)
                setWaterTaken(4)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(5)}
              onPress={() => {
                setAddWater(false)
                setCountWater(5)
                setWaterTaken(5)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(6)}
              onPress={() => {
                setAddWater(false)
                setCountWater(6)
                setWaterTaken(6)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(7)}
              onPress={() => {
                setAddWater(false)
                setCountWater(7)
                setWaterTaken(7)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(8)}
              onPress={() => {
                setAddWater(false)
                setCountWater(8)
                setWaterTaken(8)
              }} />
          </View>

        </View>

        {/* listmeal */}
        <Meal mealTitle={'Breakfast'} date={date.toLocaleDateString()} calo={eBreak} foods={breakfast}
          description={`Recommended ${Math.round(caloGoal * 0.3)} kcal`} />

        <Meal mealTitle={'Lunch'} date={date.toLocaleDateString()} calo={eLunch} foods={lunch}
          description={`Recommended ${Math.round(caloGoal * 0.3)} kcal`} />

        <Meal mealTitle={'Dinner'} date={date.toLocaleDateString()} calo={eDinner} foods={dinner}
          description={`Recommended ${Math.round(caloGoal * 0.25)} kcal`} />

        <Meal mealTitle={'Snacks'} date={date.toLocaleDateString()} calo={eSnack} foods={snack}
          description={`Recommended ${Math.round(caloGoal * 0.15)} kcal`} />

        <Meal mealTitle={'Exercise'} description={'Recommended 30 minutes'} />
      </ScrollView>
    </View >
  )
}

export default DiaryScreen