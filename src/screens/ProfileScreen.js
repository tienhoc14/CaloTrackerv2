import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import style from '../styles/tabsStyle'
import AppText from '../components/AppText'

import { SimpleLineIcons } from '@expo/vector-icons';
import color from '../styles/color';
import ItemProfile from '../components/ItemProfile';

const ProfileScreen = () => {
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
                        <Image source={{ uri: 'https://cdna.artstation.com/p/assets/images/images/041/150/252/large/nokin-_-27-corr.jpg?1630915179' }}
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
                        <AppText content={'Nguyen Van A'} fontSize={18} fontWeight='bold' />
                        <AppText content={'21 years old'} />
                    </View>
                </View>

                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <AppText content={'Current weight'} />
                        <AppText content={'60 kg'} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 15,
                    }}>
                        <AppText content={'Goal weight'} />
                        <AppText content={'70 kg'} />
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
                    <ItemProfile label={'Personal details'} />
                    <ItemProfile label={'Update goal'}
                        subLabel={'Gain 0.5 kg per week'} />
                    <ItemProfile label={'Macronutrients'}
                        subLabel={'Calories, Carbs, Protein and Fat'} />
                    <ItemProfile label={'Workout routine'} noBorder={true}
                        subLabel={'5 times/week'} />
                </View>
            </View>
        </View >
    )
}

export default ProfileScreen