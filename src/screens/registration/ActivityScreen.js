import { View, StatusBar, Text } from 'react-native'
import React, { useState } from 'react'
import LoadingBar from '../../components/LoadingBar'
import color from '../../styles/color'
import AppButton from '../../components/AppButton'
import AppText from '../../components/AppText'
import RadioButton from '../../components/RadioButton'
import note from '../../utils/note'

const ActivityScreen = ({ navigation, route }) => {

    const { userInfor } = route.params
    const [activity, setActivity] = useState()

    const getLevel = (label) => {
        if (label == 'Not very active') return 1.2
        if (label == 'Lightly active') return 1.375
        if (label == 'Active') return 1.55
        if (label == 'Very active') return 1.725
    }

    const updateInfor = (label) => {
        setActivity({
            ...userInfor,
            activity: label,
            activeLevel: getLevel(label)
        })
    }

    return (
        <View
            style={{
                paddingTop: StatusBar.currentHeight + 10,
                flex: 1,
                backgroundColor: color.BGcolor,
                paddingHorizontal: 20,
            }}
        >
            <LoadingBar index={1} />

            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>

                <View
                    style={{
                        marginVertical: 20,
                    }}>
                    <AppText content={'How active are you?'} fontSize={20} />
                </View>

                <RadioButton getValue={updateInfor}
                    listButton={['Not very active', 'Lightly active', 'Active', 'Very active']} />

            </View>

            <View style={{ bottom: 40 }}>
                <Text style={{ textAlign: 'center', marginBottom: 20, }}>
                    <AppText content={note.content} fontSize={12} />
                </Text>

                <AppButton label={'NEXT'} onPress={() => {
                    !activity ? alert('Please choose activity level!') :
                        navigation.navigate('Gender', {
                            userInfor: activity
                        })
                    console.log(activity);
                }} />

            </View>

        </View>
    )
}

export default ActivityScreen