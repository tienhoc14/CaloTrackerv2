import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { AntDesign } from '@expo/vector-icons';
import { sub } from 'react-native-reanimated';

const ItemProfile = ({ label, subLabel, noBorder }) => {
    return (
        <>
            <TouchableOpacity style={{
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