import { View, Dimensions, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'
import { LineChart } from 'react-native-chart-kit'
import AppText from '../../components/AppText'
import color from '../../styles/color'
import CircularProgress from 'react-native-circular-progress-indicator'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { arrayUnion, doc, getDoc, updateDoc, arrayRemove } from 'firebase/firestore'
import { auth, db } from '../../../firebaseConfig'
import { useNavigation } from '@react-navigation/native'

const ProgressScreen = () => {

  const navigation = useNavigation()

  const [goalWeight, setGoalWeight] = useState()
  const [currentWeight, setCurrentWeight] = useState()
  const [newWeight, setNewWeight] = useState()
  const [isVisible, setIsVisible] = useState(false)

  const [dataChart, setDataChart] = useState([0])
  const [labelChart, setLabelChart] = useState(["start"])

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: () => `grey`,
  }

  const getData = async () => {
    const docSnap = await getDoc(doc(db, "user_profile", auth.currentUser?.email))
    setGoalWeight(docSnap.data().goalWeight)
    setCurrentWeight(docSnap.data().weight)

    const progressSnap = await getDoc(doc(db, "progression", auth.currentUser?.email))
    setDataChart(progressSnap.data().weight)
    setLabelChart(progressSnap.data().date)
  }

  useEffect(() => {
    getData()

    const willFocusSubscription = navigation.addListener('focus', () => {
      getData();
    });

    return willFocusSubscription
  }, []);

  const updateWeight = async () => {

    const d = new Date();
    let date = d.getDate()
    let month = d.getMonth() + 1
    date = `${date}/${month}`

    if (newWeight) {

      await updateDoc(doc(db, "user_profile", auth.currentUser?.email), {
        weight: newWeight
      });

      if (labelChart.includes(date)) {
        await updateDoc(doc(db, "progression", auth.currentUser?.email), {
          weight: arrayRemove(dataChart[dataChart.length - 1]),
        });
        await updateDoc(doc(db, "progression", auth.currentUser?.email), {
          weight: arrayUnion(Number(newWeight)),
        });
      } else {
        await updateDoc(doc(db, "progression", auth.currentUser?.email), {
          date: arrayUnion(date),
          weight: arrayUnion(Number(newWeight)),
        });
      }

      setIsVisible(false)
      getData()
    } else {
      alert('Please enter new weight!')
    }
  }

  return (
    <View
      style={style.container}
    >
      <HeaderBar title={'Progress'} />

      <AppText content={'GOAL'} fontWeight='bold' fontSize={16} color='grey' />
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 15,
        marginTop: 10,
        marginBottom: 20,
      }}>

        <View style={{ alignItems: 'center' }}>
          <AppText content={`Goal weight: ${goalWeight}`} fontWeight='bold' fontSize={16} color='grey' />

          <View style={{ marginTop: 15, }}></View>
          <CircularProgress
            value={currentWeight}
            maxValue={goalWeight}
            showProgressValue={false}
            title={goalWeight > currentWeight ? goalWeight - currentWeight : currentWeight - goalWeight + 'KG'}
            subtitle={goalWeight > currentWeight ? 'MORE KG' : 'OVER GOAL'}
            titleStyle={{ color: 'black', fontFamily: 'monospace', fontSize: 26, }}
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

        <View style={{
          alignItems: 'center',
          borderTopWidth: 1,
          borderColor: '#ccc',
          marginHorizontal: 20,
          paddingVertical: 10,
          marginTop: 20,
        }}>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <AppText content={'UPDATE WEIGHT'} fontWeight='bold' color={color.PrimaryColor} />
          </TouchableOpacity>
        </View>
      </View>


      <AppText content={'WEIGHT'} fontWeight='bold' fontSize={16} color='grey' />
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 15,
        marginTop: 10,
      }}>
        <AppText content={`Current weight: ${currentWeight}`} fontWeight='bold' fontSize={16} color='grey' />
        <LineChart
          data={{
            labels: labelChart,
            datasets: [
              {
                data: dataChart
              }
            ],
          }}
          width={Dimensions.get("window").width - 30}
          height={220}
          yAxisSuffix="kg"
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 10,
          }}
        />
      </View>

      <Modal animationType='fade' transparent={true} visible={isVisible}>
        <View style={style.modalContent}>
          <View style={style.titleContainer}>
            <Pressable onPress={updateWeight}>
              <MaterialIcons name="check" size={22} color="#fff" />
            </Pressable>

            <AppText content={'Update Weight'} color="#fff" fontSize={16} />

            <Pressable onPress={() => setIsVisible(false)}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          <View style={{
            borderWidth: 1,
            borderColor: '#fff',
            marginHorizontal: '25%',
            borderRadius: 30,
            padding: 5,
            marginTop: 20,
          }}>
            <TextInput placeholder='Enter your weight'
              placeholderTextColor={'#fff'}
              keyboardType={'decimal-pad'}
              onChangeText={setNewWeight}
              style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'monospace',
                paddingLeft: 10,
              }} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ProgressScreen