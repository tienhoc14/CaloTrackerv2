import { View, Text } from 'react-native'
import React from 'react'
import style from '../styles/tabsStyle'

import { Ionicons } from '@expo/vector-icons';

const TrackingScreen = () => {
    return (
        <View style={style.container}>
            <View>
                <Ionicons name="caret-back-outline" size={24} color="black" />
            </View>
        </View>
    )
}

export default TrackingScreen