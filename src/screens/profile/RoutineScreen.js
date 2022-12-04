import { Modal, Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import style from '../../styles/tabsStyle'
import ItemDetails from '../../components/ItemDetails'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AppText from '../../components/AppText';

const RoutineScreen = ({ route }) => {

    const { profile } = route.params
    const [isVisible, setIsVisible] = useState(false)
    const [onFocus, setOnFocus] = useState()

    const [workout, setWorkout] = useState(5)
    const [minutes, setMinutes] = useState(60)
    const [burn, setBurn] = useState(300)

    const update = () => {
        setIsVisible(false)
    }

    const handleChangeText = (text) => {
        if (onFocus == 1) setWorkout(text)
        if (onFocus == 2) setMinutes(text)
        if (onFocus == 3) setBurn(text)
    }

    return (
        <View style={style.container}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
            }}>

                <ItemDetails label={'Workouts / Week'} data={workout} onPress={() => {
                    setIsVisible(true)
                    setOnFocus(1)
                }} />
                <ItemDetails label={'Minutes / Workout'} data={minutes} onPress={() => {
                    setIsVisible(true)
                    setOnFocus(2)
                }} />
                <ItemDetails label={'Calories consumption'} data={burn} last={'yes'} onPress={() => {
                    setIsVisible(true)
                    setOnFocus(3)
                }} />
            </View>

            <Modal animationType='fade' transparent={true} visible={isVisible}>
                <View style={style.modalContent}>
                    <View style={style.titleContainer}>
                        <Pressable onPress={update}>
                            <MaterialIcons name="check" size={22} color="#fff" />
                        </Pressable>

                        {onFocus == 1 && <AppText content={'Workous per week'} color="#fff" fontSize={16} />}
                        {onFocus == 2 && <AppText content={'Minutes of workout'} color="#fff" fontSize={16} />}
                        {onFocus == 3 && <AppText content={'Calories consumption'} color="#fff" fontSize={16} />}

                        <Pressable onPress={() => setIsVisible(false)}>
                            <MaterialIcons name="close" color="#fff" size={22} />
                        </Pressable>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#fff',
                        marginHorizontal: '40%',
                        borderRadius: 30,
                        padding: 5,
                        marginTop: 20,
                    }}>
                        <TextInput
                            placeholderTextColor={'#fff'}
                            keyboardType={'decimal-pad'}
                            onChangeText={handleChangeText}
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                fontFamily: 'monospace',
                                textAlign: 'center'
                            }} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default RoutineScreen