import { View, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'

import color from '../styles/color'
import AppText from '../components/AppText'
import { Ionicons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import { MaterialIcons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation, route }) => {
  const { userInfor } = route.params

  const [focusOn, setFocusOn] = useState(0)
  const [visible, setVisible] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  var yearNow = new Date().getFullYear();
  const age = yearNow - userInfor.dob.split("/")[2]

  const bmr = Math.round(10 * userInfor.weight + 6.25 * userInfor.height - 5 * age + (
    userInfor.gender == 'Male' ? 5 : (-161)
  ))
  const tdee = Math.round(bmr * userInfor.activeLevel)

  const calculateKcal = () => {
    if (userInfor.goal == 'Lost weight') {
      return tdee - (userInfor.weeklyChange == '0,25 kg per week' ? 275 : 550)
    } else if (userInfor.goal == 'Gain weight') {
      return tdee + (userInfor.weeklyChange == '0,25 kg per week' ? 275 : 550)
    } else {
      return tdee
    }
  }

  const handleRegister = async () => {
    console.log(calculateKcal());
    const d = new Date();
    let date = d.getDate()
    let month = d.getMonth() + 1

    if (!fullName) {
      alert("Please enter your full name")
      return
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.email);

        setDoc(doc(db, "user_profile", userCredential.user.email), {
          ...userInfor,
          email: userCredential.user.email,
          fullName: fullName,
          year: userInfor.dob.slice(-4),
          tdee: tdee,
          daily_kcal: calculateKcal(),
        });

        setDoc(doc(db, "macronutrients", userCredential.user.email), {
          carbs: 45,
          fat: 20,
          pro: 35,
        });

        setDoc(doc(db, "progression", userCredential.user.email), {
          weight: [Number(userInfor.weight)],
          date: [`${date}/${month}`]
        });

        setDoc(doc(db, "diary", userCredential.user.email), {});
      })
      .catch((error) => {
        alert(error.code.slice(5));
      });
  }

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: color.BGcolor,
        paddingHorizontal: 20,
      }}
    >

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name="caret-back-outline" size={24} color="black"
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: -5,
          }} />
        <AppText content={'Create account'} fontSize={20} fontWeight={'bold'} />
      </View>

      <View
        style={{
          flex: 1,
          paddingTop: 80,
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: focusOn == 1 ? '#21BA3A' : '#DED7CE',
            padding: 10,
          }}
        >
          <TextInput placeholder='Full name'
            onChangeText={setFullName}
            onFocus={() => { setFocusOn(1) }}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: focusOn == 3 ? '#21BA3A' : '#DED7CE',
            padding: 10,
            marginTop: 40,
          }}
        >
          <TextInput placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType='email-address'
            onFocus={() => { setFocusOn(3) }}
          />
        </View>

        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: focusOn == 2 ? '#21BA3A' : '#DED7CE',
            marginTop: 40,
            justifyContent: 'center',
          }}
        >
          <TextInput placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            onFocus={() => { setFocusOn(2) }}
            secureTextEntry={visible ? false : true} />

          <MaterialIcons name={visible ? 'visibility' : 'visibility-off'} size={24} color="#878685"
            onPress={() => {
              setVisible(!visible)
            }}
            style={{
              position: 'absolute',
              right: 0,
            }} />

        </View>

        <AppText content={'Minimum 8 charaters.'} color={'#878685'} />

      </View>
      <View
        style={{ bottom: 40 }}>
        <AppButton label={'REGISTER'} onPress={handleRegister} />
      </View>
    </View>
  )
}

export default RegisterScreen