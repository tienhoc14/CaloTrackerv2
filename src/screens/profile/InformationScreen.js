import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../../styles/tabsStyle'
import AppText from '../../components/AppText'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const InformationScreen = () => {
    const [profile, setProfile] = useState({})

    const getData = async () => {
        const docRef = doc(db, "user_profile", "T8lcx9gpREt79yUEui5Q");
        const docSnap = await getDoc(docRef);
        setProfile(docSnap.data())
    }

    useEffect(() => {
        getData()

        return () => {
            console.log('unmount');
        }
    }, []);

    return (
        <View style={style.container}>
            <AppText content={'DETAILS'} fontWeight='bold' fontSize={16} />

            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 10,
            }}>
                <AppText content={profile.full_name} />
                <AppText content={profile.gender} />
                <AppText content={profile.DoB} />
                <AppText content={profile.phone} />
                <AppText content={profile.nationality} />
            </View>
        </View>
    )
}

export default InformationScreen