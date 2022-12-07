import { View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import { useNavigation } from '@react-navigation/native';
import color from '../styles/color';

const Program = ({ category, poster, time, title, list }) => {

    const navigation = useNavigation();

    return (
        <View style={{
            height: 280,
            marginTop: 15,
        }}>
            <AppText content={category} fontSize={16} fontWeight='bold' />

            <ScrollView
                horizontal={true}
                style={{ flexDirection: 'row', marginTop: 15, }}
                showsHorizontalScrollIndicator={false}
            >
                {list.map((value) => (
                    <TouchableOpacity key={value.title}
                        activeOpacity={0.5}
                        onPress={() => {
                            navigation.navigate('Detail Program')
                        }}
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            marginRight: 20,
                        }}>
                        <Image source={value.poster} style={{
                            height: 180,
                            width: Dimensions.get("window").width - 70,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }} />

                        <View style={{ alignItems: 'center', paddingTop: 10, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="timer" size={18} color={"grey"} style={{ marginRight: 5 }} />
                                <AppText content={value.time} />
                            </View>
                            <AppText content={value.title} fontSize={16} fontWeight='bold' />
                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </View>
    )
}

export default Program