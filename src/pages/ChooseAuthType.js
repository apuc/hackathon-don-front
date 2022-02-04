import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'

import Header from '../components/LoginScreens/Header'
import RegionBlock from '../components/LoginScreens/RegionBlock'
import SendButton from '../components/SendButton'

const ChooseAuthTypeScreen = ({ navigation, route }) => {
  const [city, setCity] = useState('')

  useEffect(() => {
    const getCity = async () => {
      let tempCity = await AsyncStorage.getItem('myCity')
      setCity(tempCity)
    }
    getCity()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title='Зарегистрируйтесь' isSecondStep />
        <RegionBlock selectedCity={route?.params?.region || city} />
        <View style={styles.line} />
        <Pressable
          style={styles.anonim}
          onPress={() =>
            navigation.navigate('Root', {
              screen: 'Home',
              params: {
                screen: 'Appeal'
              }
            })
          }
        >
          <Text style={styles.anonimText}>Разместить заявку анонимно</Text>
        </Pressable>
        <Text style={styles.orText}>или</Text>
        <View style={styles.profileButtonContainer}>
          <SendButton
            title='Зарегистрироваться'
            handler={() =>
              navigation.navigate('RegistrationForm', {
                region: route?.params?.region || city
              })
            }
          />
        </View>
        <Text style={styles.orText}>есть аккаунт?</Text>
        <Pressable
          style={styles.anonim}
          onPress={() =>
            navigation.navigate('Login')
          }
        >
          <Text
            style={{ ...styles.anonimText, textDecorationLine: 'underline' }}
          >
            Войти
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEF'
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F8F8F8',
    marginTop: 25
  },
  anonim: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  anonimText: {
    width: '100%',
    textAlign: 'center',
    color: '#104080',
    fontSize: 18
  },
  orText: {
    textAlign: 'center',
    marginTop: 10
  },
  profileButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  }
})

export default ChooseAuthTypeScreen
