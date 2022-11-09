import { TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppText from './AppText'
import color from '../styles/color'

const RadioButton = ({ listButton, getValue }) => {

    const [selectedButton, setSelectedButton] = useState(null)

    return (
        <>
            {listButton.map((label) => {
                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        key={label}
                        onPress={() => {
                            setSelectedButton(label)
                            getValue(label)
                        }}
                        style={[style.button,
                        { backgroundColor: selectedButton == label ? color.PrimaryColor : '#fff' }]}
                    >
                        <AppText content={label} fontWeight={'bold'} fontSize={16}
                            color={selectedButton == label ? '#fff' : 'black'} />
                    </TouchableOpacity>
                )
            })}
        </>
    )
}

export default RadioButton

const style = StyleSheet.create({
    button: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    }
})