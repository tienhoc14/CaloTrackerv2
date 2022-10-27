import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const SettingsScreen = ({navigation}) => {

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Start' }],
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Button title='Sign out' onPress={handleSignout} />
        </View>
    )
}

export default SettingsScreen