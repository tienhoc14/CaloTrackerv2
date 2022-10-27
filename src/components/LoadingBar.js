import { View } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoadingBar = ({ index }) => {
    const navigation = useNavigation()
    const color = (i) => {
        return i <= index ? '#21BA3A' : 'black'
    }

    return (
        <View
            style={{
                justifyContent: 'center',
            }}
        >
            <Ionicons name="caret-back-outline" size={24} color="black"
                onPress={() => { navigation.goBack() }}
                style={{
                    position: 'absolute',
                    left: -5,
                }} />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <AntDesign name="minus" size={40} color={color(0)} />
                <AntDesign name="minus" size={40} color={color(1)} />
                <AntDesign name="minus" size={40} color={color(2)} />
                <AntDesign name="minus" size={40} color={color(3)} />
                <AntDesign name="minus" size={40} color={color(4)} />
                <AntDesign name="minus" size={40} color={color(5)} />
            </View>
        </View>
    )
}

export default LoadingBar