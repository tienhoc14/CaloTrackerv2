import { View, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import color from '../styles/color';
import AppText from '../components/AppText';

const SettingsScreen = ({ navigation }) => {

    const handleLogout = () => {
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
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <TouchableOpacity
                onPress={handleLogout}
                style={style.btnLogout}>
                <AppText content={'LOG OUT'} color='#f78875' fontSize={16} fontWeight='bold' />
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen

const style = StyleSheet.create({
    btnLogout: {
        borderWidth: 1,
        borderColor: '#f78875',
        position: 'absolute',
        bottom: 30,
        right: '20%',
        left: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 50,
    }
})