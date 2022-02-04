import { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Alert } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ContactInputBlock from '../components/ContactInputBlock'
import SendButton from '../components/SendButton'
import UserNameInputBlock from '../components/UserNameInputBlock'
import Header from '../components/LoginScreens/Header'
import RegionBlock from '../components/LoginScreens/RegionBlock'
import CheckBox from '../components/LoginScreens/CheckBox'
import Loader from '../components/Loader'

const RegistrationFormScreen = ({ navigation, route }) => {
  const [fio, setFio] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [hideFio, setHideFio] = useState(false)
  const [isDriver, setIsDriver] = useState(false)
  const [confirmNumber, setConfirmNumber] = useState(true)
  const [confirmEmail, setConfirmEmail] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const tryAuth = async () => {
    if (!phone) {
      return Alert.alert('Народный Контроль', 'Укажите ваш номер телефона!')
    }

    if (!email) {
      return Alert.alert('Народный Контроль', 'Укажите ваш email!')
    }

    setIsLoading(true)

    await axios
      .post('user/store', {
        email,
        phone,
        fio,
        password: '12345678'
      })
      .then(async (res) => {
        await AsyncStorage.setItem('user', JSON.stringify(res.data.user))
        navigation.navigate('Login')
        Alert.alert('Народный Контоль', 'Регистрация прошла успешно!')
      })
      .catch((err) => {
        Alert.alert(
          'Народный Контоль',
          'Ошибка! Проверьте правильность введенных данных.'
        )
        console.warn(err)
      })
      .finally(() => setIsLoading(false))
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title='Зарегистрируйтесь' isSecondStep />
        <RegionBlock selectedCity={route.params.region} />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.line}></View>
          <UserNameInputBlock
            fio={fio}
            setFio={setFio}
            hideFio={hideFio}
            setHideFio={setHideFio}
          />
          <View style={styles.contactInputBlock}>
            <ContactInputBlock
              title='Ваш телефон'
              keyboardType='phone-pad'
              value={phone}
              setValue={setPhone}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                title='Подтвердить номер'
                isSmallText
                isChecked={confirmNumber}
                setIsChecked={setConfirmNumber}
              />
            </View>
          </View>
          <View style={styles.contactInputBlock}>
            <ContactInputBlock
              title='Ваша почта'
              keyboardType='email-address'
              value={email}
              setValue={setEmail}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                title='Подтвердить почту'
                isSmallText
                isChecked={confirmEmail}
                setIsChecked={setConfirmEmail}
              />
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.isDriver}>
            <CheckBox
              title='Я водитель'
              isChecked={isDriver}
              setIsChecked={setIsDriver}
            />
          </View>
          <View style={styles.sendButtonContainer}>
            <SendButton title='Зарегистрироваться' handler={() => tryAuth()} />
          </View>
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
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F8F8F8',
    marginTop: 25,
    marginBottom: 20
  },
  contactInputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  checkboxContainer: {
    marginLeft: 17,
    marginTop: 10
  },
  isDriver: {
    alignItems: 'center'
  },
  sendButtonContainer: {
    alignItems: 'center',
    marginVertical: 32
  }
})

export default RegistrationFormScreen
