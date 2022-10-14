import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import HeaderBar from '../../components/HeaderBar'
import style from '../../styles/tabsStyle'
import CircularProgress from 'react-native-circular-progress-indicator'
import AppText from '../../components/AppText'
import color from '../../styles/color'

const DiaryScreen = ({ navigation }) => {

  const [caloRemaining, setCaloRemaining] = useState(0)
  const [eaten, setEaten] = useState(2000)
  const [burned, setBurned] = useState(389)

  const caloGoal = 2200

  return (
    <View style={style.container}>

      <HeaderBar title={'Diary'} />

      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <AppText content={eaten} fontSize={18} />
          <AppText content={'EATEN'} />
        </View>

        <View>
          <CircularProgress
            value={eaten - burned}
            maxValue={caloGoal}
            title={'CALO LEFT'}
            titleStyle={{ color: 'black', fontSize: 12, fontFamily: 'monospace' }}
            progressValueStyle={{ color: 'black', fontWeight: '400', fontSize: 26, }}
            activeStrokeWidth={4}
            activeStrokeSecondaryColor={color.PrimaryColor}
            activeStrokeColor={color.SecondaryColor}
            inActiveStrokeWidth={4}
            inActiveStrokeColor={color.SecondaryColor}
            inActiveStrokeOpacity={0.2}
            duration={2000}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <AppText content={burned} fontSize={18} />
          <AppText content={'BURNED'} />
        </View>
      </View>

    </View>
  )
}

export default DiaryScreen