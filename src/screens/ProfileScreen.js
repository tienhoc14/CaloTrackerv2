import { Image, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../styles/tabsStyle'
import AppText from '../components/AppText'
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from '../../firebaseConfig';

import { SimpleLineIcons } from '@expo/vector-icons';
import color from '../styles/color';
import ItemProfile from '../components/ItemProfile';

const ProfileScreen = () => {
    const [profile, setProfile] = useState({})

    const getData = async () => {
        const q = query(collection(db, "user_profile"), where("email", "==", auth.currentUser?.email));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setProfile(doc.data());
        });
    }

    useEffect(() => {
        getData()

        return () => {
            console.log('unmount');
        }
    }, []);

    return (
        <View style={style.container} >
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    paddingBottom: 20,
                    marginBottom: 20,
                }}>
                    <TouchableOpacity style={{
                        borderRadius: 40,
                        marginRight: 15,
                    }}>
                        <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg' }}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                            }} />

                        <View style={{
                            backgroundColor: color.PrimaryColor,
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            alignSelf: 'center',
                            borderRadius: 50,
                            padding: 5,
                        }}>
                            <SimpleLineIcons name="pencil" size={10} color="#fff" />
                        </View>

                    </TouchableOpacity>

                    <View>
                        <AppText content={profile.fullName} fontSize={18} fontWeight='bold' />
                        <AppText content={`${profile.age} years old`} />
                    </View>
                </View>

                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <AppText content={'Current weight'} />
                        <AppText content={`${profile.weight} ${profile.weightUnit}`} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 15,
                    }}>
                        <AppText content={'Goal'} />
                        <AppText content={profile.goal} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <AppText content={'Daily calories'} />
                        <AppText content={'2000 cal'} />
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 30, }}>
                <AppText content={'CUSTOMIZATION'} fontSize={18} color='grey' />

                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 20,
                    marginTop: 10,
                }}>
                    <ItemProfile label={'Personal details'} routeTo={'Personal Details'}
                        params={profile} />
                    <ItemProfile label={'Update goal'} routeTo={'Update Goal'}
                        subLabel={'Gain 0.5 kg per week'} params={profile} />
                    <ItemProfile label={'Macronutrients'} routeTo={'Macronutrients'}
                        subLabel={'Calories, Carbs, Protein and Fat'} params={profile} />
                    <ItemProfile label={'Workout routine'} noBorder={true} routeTo={'Workout Routine'}
                        subLabel={'5 times/week'} params={profile} />
                </View>
            </View>
        </View >
    )
}

export default ProfileScreen