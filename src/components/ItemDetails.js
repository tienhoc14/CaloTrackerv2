import { View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import AppText from './AppText';

const ItemDetails = ({ label, data, last, onPress }) => {
    const fontSize = 16

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderBottomWidth: 1,
                justifyContent: 'center',
                borderBottomColor: last ? '#fff' : '#ccc',
                paddingVertical: 20,
            }}>
            <AppText content={label} fontSize={fontSize} />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                right: 0,
            }}>
                <AppText content={data} fontSize={fontSize} color="grey" />
                <AntDesign name="right" size={16} color="grey" style={{ marginLeft: 10, }} />
            </View>
        </TouchableOpacity>
    )
}

export default ItemDetails