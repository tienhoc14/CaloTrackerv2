import { View, StatusBar, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'

import color from '../styles/color'
import AppText from '../components/AppText'
import { Ionicons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import { MaterialIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';


const LoginScreen = ({ navigation }) => {

  const [focusOn, setFocusOn] = useState(0)
  const [visible, setVisible] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('login');
        console.log(userCredential.user.email);
        navigation.navigate('AppStack')
      })
      .catch((error) => {
        console.log(error.message)
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
        <AppText content={'Login'} fontSize={20} fontWeight={'bold'} />
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
          <TextInput placeholder='Email'
            style={{ fontFamily: 'monospace' }}
            keyboardType='email-address'
            value={email}
            onChangeText={text => setEmail(text)}
            onFocus={() => { setFocusOn(1) }}
          />
        </View>

        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: focusOn == 2 ? '#21BA3A' : '#DED7CE',
            marginTop: 40,
          }}
        >
          <TextInput placeholder='Password'
            style={{ fontFamily: 'monospace' }}
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

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 40,
          }}
        >
          <AppText content={'FORGOT YOUR PASSWORD?'} fontSize={16} />
        </TouchableOpacity>
      </View>
      <View
        style={{ bottom: 40 }}>
        <AppButton label={'LOG IN'} onPress={handleLogin} />
      </View>
    </View>
  )
}

export default LoginScreen