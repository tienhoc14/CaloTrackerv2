import { View, Text, StatusBar, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderBar from '../../components/HeaderBar'
import style from '../../styles/tabsStyle'
import CircularProgress from 'react-native-circular-progress-indicator'
import AppText from '../../components/AppText'
import color from '../../styles/color'

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Meal from '../../components/Meal'

const DiaryScreen = ({ navigation }) => {

  const [eaten, setEaten] = useState(2000)
  const [burned, setBurned] = useState(389)

  const [addWater, setAddWater] = useState(false)
  const [countWater, setCountWater] = useState(0)

  const caloGoal = 2200

  const renderWater = (i) => {
    if (addWater) {
      return i < countWater ? color.PrimaryColor : 'grey'
    } else {
      return i <= countWater ? color.PrimaryColor : 'grey'
    }
  }

  return (
    <View style={style.container}>

      <HeaderBar title={'Diary'} />

      <View
        style={{
          paddingTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View style={{ alignItems: 'center', flex: 1 }}>
          <AppText content={eaten} fontSize={18} />
          <AppText content={'EATEN'} />
        </View>

        <View style={{ flex: 1, }}>
          <CircularProgress
            value={eaten - burned}
            maxValue={caloGoal}
            title={'CALO LEFT'}
            titleStyle={{ color: 'black', fontSize: 12, fontFamily: 'monospace' }}
            progressValueStyle={{ color: 'black', fontWeight: '400', fontSize: 26, }}
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

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
      }}>
        <Ionicons name="caret-back-outline" size={24} color="grey" />


        <TouchableOpacity>
          <AppText content={'TODAY, OCT 15'} color='grey' />
        </TouchableOpacity>

        <Ionicons name="caret-forward-outline" size={24} color="grey" />

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
            <AppText content={'0L'} fontSize={16} />
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(1)}
              onPress={() => {
                setAddWater(!addWater)
                setCountWater(1)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(2)}
              onPress={() => {
                setAddWater(false)
                setCountWater(2)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(3)}
              onPress={() => {
                setAddWater(false)
                setCountWater(3)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(4)}
              onPress={() => {
                setAddWater(false)
                setCountWater(4)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(5)}
              onPress={() => {
                setAddWater(false)
                setCountWater(5)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(6)}
              onPress={() => {
                setAddWater(false)
                setCountWater(6)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(7)}
              onPress={() => {
                setAddWater(false)
                setCountWater(7)
              }} />
            <MaterialCommunityIcons name="cup" size={30} color={renderWater(8)}
              onPress={() => {
                setAddWater(false)
                setCountWater(8)
              }} />
          </View>

        </View>

        <Meal mealTitle={'Brealfast'} calo={456} description={'Recommended 500 calories'} />
        <Meal mealTitle={'Lunch'} description={'Recommended 500 calories'} />
        <Meal mealTitle={'Dinner'} description={'Recommended 500 calories'} />
        <Meal mealTitle={'Snacks'} description={'Recommended 500 calories'} />
        <Meal mealTitle={'Exercise'} description={'Recommended 30 mins'} />
      </ScrollView>
    </View>
  )
}

export default DiaryScreen