import { TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { useNavigation } from '@react-navigation/native'

const Exercise = ({ name, sets, reps, burned }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Detail Exercise', {
                    name: name,
                    sets: sets,
                    reps: reps,
                    burned: burned
                })
            }}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingVertical: 10,
                paddingHorizontal: 5
            }}>
            <AppText content={name} fontSize={16} />
        </TouchableOpacity>
    )
}

export default Exercise