import { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Alert
} from 'react-native'
import axios from 'axios'

import ContactInputBlock from '../components/ContactInputBlock'
import HeaderMain from '../components/MainScreen/HeaderMain'
import SendButton from '../components/SendButton'
import Loader from '../components/Loader'

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getConfirmationCode = async () => {
    setIsLoading(true)
    await axios
      .post('user/send-auth-code', {
        recipient: phone
      })
      .then(async (res) => {
        console.log(res.data)
        navigation.navigate('CodeConfirmation', { user_id: res.data.user_id })
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
        <HeaderMain />
        <Text style={styles.title}>Вход в систему</Text>
        <View style={styles.inputContainer}>
          <ContactInputBlock
            title='Введите ваш номер телефона'
            keyboardType='phone-pad'
            value={phone}
            setValue={setPhone}
          />
        </View>
        <View style={styles.sendButtonContainer}>
          <SendButton
            title='Получить код'
            handler={() => getConfirmationCode()}
          />
        </View>
        <View style={styles.referenceBlock}>
          <Pressable onPress={() => navigation.navigate('Root')}>
            <Text style={[styles.referenceText, { color: '#475261' }]}>
              Пропустить
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('RegistrationForm', { region: 'Донецк' })
            }
          >
            <Text
              style={[
                styles.referenceText,
                { color: '#071B36', fontWeight: 'bold' }
              ]}
            >
              Зарегистрироваться
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  title: {
    color: '#132742',
    fontSize: 22,
    marginTop: 56,
    textAlign: 'center'
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 22
  },
  input: {
    fontSize: 13,
    width: '80%',
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF5F4A',
    paddingRight: 10,
    paddingLeft: 10
  },
  sendButtonContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  referenceBlock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 33
  },
  referenceText: {
    fontSize: 12,
    textDecorationLine: 'underline'
  }
})

export default LoginScreen
