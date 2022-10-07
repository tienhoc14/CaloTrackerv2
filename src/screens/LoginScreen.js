import { View, StatusBar, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'

import color from '../styles/color'
import AppText from '../components/AppText'
import { Ionicons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';

const LoginScreen = ({ navigation }) => {

  const [focusOn, setFocusOn] = useState(0)

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: color.BGcolor,
        paddingHorizontal: 15,
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
            left: 0
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
            onFocus={() => { setFocusOn(2) }}
            secureTextEntry={true} />
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
        <AppButton label={'LOG IN'} onPress={() => { }} />
      </View>
    </View>
  )
}

export default LoginScreen