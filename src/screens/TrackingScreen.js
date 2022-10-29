import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from '../styles/tabsStyle'

import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import color from '../styles/color';
import TrackingNavigation from '../navigations/TrackingNavigation';

const TrackingScreen = ({ route }) => {
    const { mealTitle } = route.params
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Ionicons name="caret-back-outline" size={24} color="black"
                    onPress={() => { navigation.goBack() }}
                    style={{
                        position: 'absolute',
                        left: 0,
                    }} />
                <AppText content={mealTitle} fontSize={18} />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
                marginHorizontal: '5%',
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 50,
                    paddingVertical: 3,
                    flex: 1,
                    marginRight: 10,
                }}>
                    <EvilIcons name="search" size={24} color="black" style={{ marginHorizontal: 5, }} />
                    <TextInput
                        style={{ flex: 1, fontFamily: 'monospace' }}
                        placeholder='Search for a food' />
                </View>

                <TouchableOpacity>
                    <MaterialIcons name="qr-code-scanner" size={24} color={color.PrimaryColor} />
                </TouchableOpacity>
            </View>

            <TrackingNavigation />

        </View>
    )
}

export default TrackingScreen