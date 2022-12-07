import { View, Image, ScrollView, TouchableOpacity, Modal, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'
import * as ImagePicker from 'expo-image-picker';

import AppText from '../../components/AppText'

import { Feather } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Post from '../../components/Post'

const NewsfeedScreen = () => {

  let avatar = require('../../../assets/images/avatar_profile.png')
  let car = require('../../../assets/images/1602389082_jasonstatham_911GT3.jpg')

  const [imageSource, setImageSource] = useState()
  const [isVisible, setIsVisible] = useState(false)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    setImageSource(result)
    !result.cancelled && setIsVisible(true)
  }

  const upload = async () => {
    console.log(imageSource);
  }

  return (
    <View
      style={style.container}
    >
      <HeaderBar title={'Newsfeed'} />

      <TouchableOpacity
        onPress={() => {
          setIsVisible(true)
          setImageSource()
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
          marginVertical: 15,
        }}>
        <Image source={car} style={{ width: 30, height: 30, margin: 10, borderRadius: 15 }} />
        <AppText content={'Share your motivation!'} color={'grey'} />

        <TouchableOpacity
          onPress={pickImage}
          style={{
            position: 'absolute',
            right: 15,
          }}
        >
          <Feather name="camera" size={22} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>

      <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={subStyle.modalContainer}>
          <View style={subStyle.modalControlBar}>
            <View>
              <Feather name="camera" size={18} color="#fff"
                onPress={() => pickImage()} />
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => upload()} >
              <AppText content={'Upload'} color="#fff" fontSize={14} />
              <MaterialIcons name="file-upload" size={20} color="#fff" style={{ marginLeft: 5 }} />
            </TouchableOpacity>
            <Pressable onPress={() => setIsVisible(false)} >
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>

          <View style={subStyle.modalBody}>
            <TextInput placeholder='Enter your caption' />
            <View>
              {imageSource && (
                <Image source={{ uri: imageSource.uri }} resizeMode='contain' style={{
                  height: '95%',
                  marginTop: 3
                }} />
              )}
            </View>
          </View>
        </View>
      </Modal>

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

const subStyle = StyleSheet.create({
  modalContainer: {
    height: 390,
    width: '94%',
    backgroundColor: '#ccc',
    borderRadius: 12,
    position: 'absolute',
    right: '3%',
    top: 110,
  },
  modalControlBar: {
    height: '10%',
    backgroundColor: '#7f8692',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalBody: {
    flex: 1,
    margin: 10,
  }
})