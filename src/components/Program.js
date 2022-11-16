import { View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import imgHomeWorkout from '../../assets/images/home_workout.png'
import imgHomeWorkout2 from '../../assets/images/w_homeworkout.webp'
import { useNavigation } from '@react-navigation/native';

const Program = () => {

    const navigation = useNavigation();

    return (
        <View style={{
            height: 280,
            marginTop: 15,
        }}>
            <AppText content={'HOME WORKOUT'} fontSize={16} fontWeight='bold' />

            <ScrollView
                horizontal={true}
                style={{ flexDirection: 'row', marginTop: 15, }}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('DetailProgram')
                    }}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        marginRight: 20,
                    }}>
                    <Image source={imgHomeWorkout} style={{
                        height: 180,
                        width: Dimensions.get("window").width - 70,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }} />

                    <View style={{ alignItems: 'center', paddingTop: 10, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="timer" size={18} color="grey" />
                            <AppText content={'30:00'} />
                        </View>
                        <AppText content={'30 minute circuit training'} fontSize={16} fontWeight='bold' />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('DetailProgram')
                    }}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        marginRight: 20,
                    }}>
                    <Image source={imgHomeWorkout2} style={{
                        height: 180,
                        width: Dimensions.get("window").width - 70,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }} />

                    <View style={{ alignItems: 'center', paddingTop: 10, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="timer" size={18} color="grey" />
                            <AppText content={'25:00'} />
                        </View>
                        <AppText content={'Home workout for women'} fontSize={16} fontWeight='bold' />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Program