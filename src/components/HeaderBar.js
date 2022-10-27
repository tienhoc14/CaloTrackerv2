import { View, TouchableOpacity } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import AppText from './AppText';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = ({ title }) => {

    const navigation = useNavigation()

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity>
                <Ionicons name="person-circle" size={28} color="black" />
            </TouchableOpacity>
            <AppText content={title} fontSize={18} />
            <TouchableOpacity onPress={() => { navigation.navigate('Settings') }} >
                <Ionicons name="settings-outline" size={28} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderBar