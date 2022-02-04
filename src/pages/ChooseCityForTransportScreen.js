import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native'
import Header from '../components/TransportScheduleDetailsScreen/Header'
import { cities } from '../Constants'
import RegionButton from '../components/LoginScreens/RegionButton'
import { useNavigation } from '@react-navigation/native'

const ChooseCityForTransportScreen = () => {
  const navigation = useNavigation()
  const onCitySelect = async (region) => {
    navigation.navigate('Routes', { region })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Text style={styles.title}>Список доступных регионов:</Text>
        <View style={styles.regionsButtonsBlock}>
          {cities.map((item, index) => {
            return (
              <RegionButton
                key={index}
                title={item}
                regionHandler={() => onCitySelect(item)}
              />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEF'
  },
  title: {
    color: '#132742',
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 20
  },
  regionsButtonsBlock: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  }
})

export default ChooseCityForTransportScreen
