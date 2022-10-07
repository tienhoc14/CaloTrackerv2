import { View, Text } from 'react-native'
import React from 'react'

const AppText = ({ content, fontSize, color, fontWeight }) => {
    return (
        <Text style={{
            fontFamily: 'monospace',
            fontSize: fontSize,
            color: color,
            fontWeight: fontWeight
        }} >
            {content}
        </Text>
    )
}

export default AppText