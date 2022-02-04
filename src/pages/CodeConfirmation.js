import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
  Alert
} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import HeaderMain from '../components/MainScreen/HeaderMain'
import SendButton from '../components/SendButton'
import Loader from '../components/Loader'

const CodeConfirmationScreen = ({ navigation, route }) => {
  const [code, setCode] = useState(['', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)

  const inputRefs = useRef(new Array(code.length))

  // При вводе значения в инпут фокус автоматически переходит к следующему инпуту
  const handleChange = (index, value) => {
    const inputs = inputRefs.current
    let tempCode = [...code]
    tempCode[index] = value
    setCode([...tempCode])
    if (index < inputs.length - 1) {
      inputs[index + 1].focus()
    } else {
      inputs[index].blur()
    }
  }

  useEffect(() => {
    if (code.join('').length === 4) {
      handleAuth()
    }
  }, [code])

  const handleAuth = async () => {
    setIsLoading(true)
    await axios
      .post('user/check-auth-code', {
        code: '1234',
        user_id: route?.params?.user_id
      })
      .then(async (res) => {
        console.log(res.data)
        await AsyncStorage.setItem('userId', route?.params?.user_id.toString())
        await AsyncStorage.setItem('token', res.data.token)
        navigation.navigate('Root')
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
        <Text style={styles.title}>Введите код</Text>
        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>
            Мы отправили вам код, он придет в течение 3-х минут
          </Text>
        </View>
        <View style={styles.codeContainer}>
          {code.map((item, index) => {
            return (
              <TextInput
                autoFocus={index === 0}
                style={styles.codeInput}
                maxLength={1}
                key={index}
                keyboardType={'phone-pad'}
                ref={(ref) => {
                  inputRefs.current[index] = ref
                }}
                onChangeText={(value) => handleChange(index, value)}
                value={code[index]}
              />
            )
          })}
        </View>
        <View style={styles.sendButtonContainer}>
          <SendButton title='Войти в систему' handler={() => handleAuth()} />
        </View>
        <View style={styles.referenceTextContainer}>
          <Pressable
            onPress={() => {
              setCode(['', '', '', ''])
              Alert.alert('Народный Контроль', 'Код отправлен!')
            }}
          >
            <Text style={[styles.referenceText, { color: '#909090' }]}>
              Отправить код повторно
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  title: {
    color: '#132742',
    fontSize: 17,
    marginTop: 56,
    textAlign: 'center'
  },
  descriptionTextContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  descriptionText: {
    color: '#909090',
    fontSize: 12,
    textAlign: 'center',
    width: '90%'
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 65,
    marginTop: 18
  },
  codeInput: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#9D9D9D',
    textAlign: 'center',
    marginRight: 10
  },
  sendButtonContainer: {
    marginTop: 24,
    alignItems: 'center'
  },
  referenceTextContainer: {
    alignItems: 'center'
  },
  referenceText: {
    width: '70%',
    marginTop: 25,
    textDecorationLine: 'underline'
  }
})

export default CodeConfirmationScreen
