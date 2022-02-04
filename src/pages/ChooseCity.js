import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from '../components/LoginScreens/Header'
import RegionButton from '../components/LoginScreens/RegionButton'

import { cities } from '../Constants'

const ChooseCityScreen = () => {
  const navigation = useNavigation()

  const onCitySelect = async (region) => {
    // сохраняем в локальной памяти устройства выбранный город
    await AsyncStorage.setItem('myCity', region)
    navigation.navigate('ChooseAuthType', { region })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title='Добрый день' />
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
    textAlign: 'center'
  },
  regionsButtonsBlock: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  }
})

export default ChooseCityScreen
