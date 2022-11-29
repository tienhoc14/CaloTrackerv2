import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import ItemProfile from '../../components/ItemProfile'

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../components/AppText';

const MoreScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={style.container}>

      <TouchableOpacity
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => { navigation.navigate('Profile') }} >
        <Ionicons name="person-circle" size={40} color="black" style={{
          marginRight: 10
        }} />
        <AppText content={'Tien Hoc'} fontSize={18} />
      </TouchableOpacity>

      <View style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 60,
        marginTop: 20,
        justifyContent: 'space-evenly',
        flex: 1,
      }}>
        <ItemProfile label={'Goal'} />
        <ItemProfile label={'Reminder'} />
        <ItemProfile label={'Friends'} />
        <ItemProfile label={'Notification'} />
        <ItemProfile label={'Step tracker'} />
        <ItemProfile label={'Help'} />
        <ItemProfile label={'Settings'} />
        <ItemProfile label={'Privacy center'} noBorder={'yes'} />

      </View>
    </View>
  )
}

export default MoreScreen