import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'

import AppText from '../../components/AppText'

import { Feather } from '@expo/vector-icons';
import Post from '../../components/Post'

const NewsfeedScreen = () => {
  let avatar = require('../../../assets/images/avatar_profile.png')
  let car = require('../../../assets/images/1602389082_jasonstatham_911GT3.jpg')

  return (
    <View
      style={style.container}
    >
      <HeaderBar title={'Newsfeed'} />

      <TouchableOpacity
        onPress={() => { console.log('parent'); }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
          marginVertical: 15,
        }}>
        <Image source={car} style={{ width: 30, height: 30, margin: 10, borderRadius: 15 }} />
        <AppText content={'Share something...'} color={'grey'} />

        <TouchableOpacity
          onPress={() => { console.log('child'); }}
          style={{
            position: 'absolute',
            right: 15,
          }}
        >
          <Feather name="camera" size={22} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Post urlImage={car} />

        <Post urlImage={avatar} />
      </ScrollView>
    </View>
  )
}

export default NewsfeedScreen