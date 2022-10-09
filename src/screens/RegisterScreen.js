import { View, StatusBar, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'

import color from '../styles/color'
import AppText from '../components/AppText'
import { Ionicons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import { MaterialIcons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {

  const [focusOn, setFocusOn] = useState(0)
  const [visible, setVisible] = useState(false)

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
        <AppButton label={'LOG IN'} onPress={() => { }} />
      </View>
    </View>
  )
}

export default RegisterScreen