import { View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../../styles/tabsStyle'
import HeaderBar from '../../components/HeaderBar'
import { LineChart } from 'react-native-chart-kit'
import AppText from '../../components/AppText'
import color from '../../styles/color'
import CircularProgress from 'react-native-circular-progress-indicator'

const ProgressScreen = () => {

  const data = [55, 56, 57, 56.5, 58, 60, 80]

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: () => `grey`,
  }

  return (
    <View
      style={style.container}
    >
      <HeaderBar title={'Progress'} />

      <AppText content={'GOAL'} fontWeight='bold' fontSize={16} color='grey' />
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 15,
        marginTop: 10,
        marginBottom: 20,
      }}>

        <View style={{ alignItems: 'center' }}>
          <AppText content={'Goal weight: 100kg'} fontWeight='bold' fontSize={16} color='grey' />

          <View style={{ marginTop: 15, }}></View>
          <CircularProgress
            value={80}
            maxValue={100}
            showProgressValue={false}
            title={100 - 80}
            subtitle={'MORE KG'}
            titleStyle={{ color: 'black', fontFamily: 'monospace', fontSize: 26, }}
            subtitleStyle={{ color: 'black', fontSize: 12, fontFamily: 'monospace' }}
            activeStrokeWidth={4}
            activeStrokeSecondaryColor={color.PrimaryColor}
            activeStrokeColor={color.SecondaryColor}
            inActiveStrokeWidth={4}
            inActiveStrokeColor={color.SecondaryColor}
            inActiveStrokeOpacity={0.2}
            duration={2000}
          />
        </View>

        <View style={{
          alignItems: 'center',
          borderTopWidth: 1,
          borderColor: '#ccc',
          marginHorizontal: 20,
          paddingVertical: 10,
          marginTop: 20,
        }}>
          <TouchableOpacity>
            <AppText content={'UPDATE WEIGHT'} fontWeight='bold' color={color.PrimaryColor} />
          </TouchableOpacity>
        </View>
      </View>


      <AppText content={'WEIGHT'} fontWeight='bold' fontSize={16} color='grey' />
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 15,
        marginTop: 10,
      }}>
        <AppText content={'Current weight: '} fontWeight='bold' fontSize={16} color='grey' />
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", 'today'],
            datasets: [
              {
                data: data
              }
            ],
          }}
          width={Dimensions.get("window").width - 30}
          height={220}
          yAxisSuffix="kg"
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  )
}

export default ProgressScreen