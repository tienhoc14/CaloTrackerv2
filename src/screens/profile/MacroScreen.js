import { Modal, Pressable, TextInput, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../../styles/tabsStyle'
import ItemDetails from '../../components/ItemDetails'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../firebaseConfig'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AppText from '../../components/AppText'
import AppButton from '../../components/AppButton'

const MacroScreen = ({ route }) => {

    const { profile } = route.params
    const [isVisible, setIsVisible] = useState(false)
    const [onFocus, setOnFocus] = useState()

    const [macros, setMacros] = useState({})
    const [kcal, setKcal] = useState(profile.daily_kcal)

    const getData = async () => {
        const docMacros = await getDoc(doc(db, "macronutrients", auth.currentUser?.email))
        setMacros(docMacros.data())
    }

    useEffect(() => {
        getData()

        return () => {
            console.log('macros');
        }
    }, []);

    const update = () => {
        setIsVisible(false)
    }

    const handleChangeText = (text) => {
        if (onFocus == 1) setKcal(text)
        if (onFocus == 2) setMacros({ ...macros, carbs: text })
        if (onFocus == 3) setMacros({ ...macros, pro: text })
        if (onFocus == 4) setMacros({ ...macros, fat: text })
    }

    const saveHandler = async () => {
        var carbs = Number(macros.carbs)
        var pro = Number(macros.pro)
        var fat = Number(macros.fat)

        if ((carbs + pro + fat) == 100) {
            await updateDoc(doc(db, "macronutrients", auth.currentUser?.email),
                {
                    carbs: carbs,
                    pro: pro,
                    fat: fat,
                });

            await updateDoc(doc(db, "user_profile", auth.currentUser?.email),
                {
                    daily_kcal: kcal
                });

            ToastAndroid.show("Updated macronutrients", ToastAndroid.SHORT);
        } else {
            alert("Total macros must be equal to 100")
        }

    }

    return (
        <View style={style.container}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
            }}>

                <ItemDetails label={`Calories`} data={kcal} onPress={() => {
                    setIsVisible(true)
                    setOnFocus(1)
                }} />
                <ItemDetails label={`Carbohydrates (${Math.round(kcal * macros.carbs / 400)}g)`} data={`${macros.carbs}%`}
                    onPress={() => {
                        setIsVisible(true)
                        setOnFocus(2)
                    }} />
                <ItemDetails label={`Protein (${Math.round(kcal * macros.pro / 400)}g)`} data={`${macros.pro}%`}
                    onPress={() => {
                        setIsVisible(true)
                        setOnFocus(3)
                    }} />
                <ItemDetails label={`Fat (${Math.round(kcal * macros.fat / 900)}g)`} data={`${macros.fat}%`} last={'yes'}
                    onPress={() => {
                        setIsVisible(true)
                        setOnFocus(4)
                    }} />
            </View>

            <View style={{
                marginTop: 15,
                marginHorizontal: '40%'
            }}>
                <AppButton label={'SAVE'} onPress={saveHandler} />
            </View>

            <Modal animationType='fade' transparent={true} visible={isVisible}>
                <View style={style.modalContent}>
                    <View style={style.titleContainer}>
                        <Pressable onPress={update}>
                            <MaterialIcons name="check" size={22} color="#fff" />
                        </Pressable>

                        {onFocus == 1 && <AppText content={'Calories Goal'} color="#fff" fontSize={16} />}
                        {onFocus == 2 && <AppText content={'Percentage of Carbs'} color="#fff" fontSize={16} />}
                        {onFocus == 3 && <AppText content={'Percentage of Protein'} color="#fff" fontSize={16} />}
                        {onFocus == 4 && <AppText content={'Percentage of Fat'} color="#fff" fontSize={16} />}

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
                            placeholder={onFocus == 1 ? 'kcal' : '%'}
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

export default MacroScreen