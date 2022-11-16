import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemProfile = ({ label, subLabel, noBorder, routeTo, params }) => {
    const navigation = useNavigation()

    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(routeTo, {
                        profile: params
                    })
                }}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <View>
                    <AppText content={label} fontSize={16} />
                    {subLabel && <AppText content={subLabel} fontSize={14} color='grey' />}
                </View>
                <AntDesign name="right" size={14} color="grey" style={{
                    position: 'absolute',
                    right: 0,
                }} />
            </TouchableOpacity>

            {!noBorder && <View style={{ borderTopWidth: 1, borderColor: '#ccc', marginVertical: 15, }}></View>}
        </>
    )
}

export default ItemProfile