import { TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'

const Exercise = ({ name }) => {
    return (
        <TouchableOpacity style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            paddingVertical: 10,
            paddingHorizontal:5
        }}>
            <AppText content={name} fontSize={16} />
        </TouchableOpacity>
    )
}

export default Exercise