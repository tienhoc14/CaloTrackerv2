import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../../styles/tabsStyle'
import AppText from '../../components/AppText'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const InformationScreen = ({ route }) => {

    const { profile } = route.params

    return (
        <View style={style.container}>
            <AppText content={'DETAILS'} fontWeight='bold' fontSize={16} />

            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 10,
            }}>
                <AppText content={profile.fullName} />
                <AppText content={profile.gender} />
                <AppText content={profile.dob} />
                {/* <AppText content={profile.phone} /> */}
                {/* <AppText content={profile.nationality} /> */}
            </View>
        </View>
    )
}

export default InformationScreen