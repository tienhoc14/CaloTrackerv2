import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../../styles/tabsStyle'
import AppText from '../../components/AppText'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
import { AntDesign } from '@expo/vector-icons';
import ItemDetails from '../../components/ItemDetails'

const InformationScreen = ({ route }) => {

    const { profile } = route.params

    return (
        <View style={style.container}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
            }}>
                <ItemDetails label={'Fullname'} data={profile.fullName} />

                <ItemDetails label={'Gender'} data={profile.gender} />

                <ItemDetails label={'Date of birth'} data={profile.dob} />
                <ItemDetails label={'Height'} data={profile.height} />
                <ItemDetails label={'Weight'} data={profile.weight} />
                <ItemDetails label={'Activity Level'} data={profile.activity} last={'yes'} />

            </View>
        </View>
    )
}

export default InformationScreen