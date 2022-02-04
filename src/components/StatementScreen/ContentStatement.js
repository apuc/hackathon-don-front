import { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput,
  ScrollView,
  Alert
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import ButtonItem from '../MainScreen/ButtonBlock/ButtonItem'
import ButtonAddMedia from './ButtonAddMedia'
import ReferenceToMain from '../ReferenceToMain'
import UserNameInputBlock from '../UserNameInputBlock'
import ContactInputBlock from '../ContactInputBlock'
import SendButton from '../SendButton'
import LocationBlock from '../LocationBlock'
import StepsThreePosition from '../StepsTreePosition'
import Loader from '../Loader'

import addPhoto from '../../../assets/icons/statement/add-photo.png'
import addVideo from '../../../assets/icons/statement/add-video.png'
import plus from '../../../assets/icons/main/buttonItems/plus.png'

import { categories } from '../../Constants'

const ContentStatement = ({ navigation, location, category, note }) => {
  const [isRightEnabled, setIsRightEnabled] = useState(true)
  const [hideFio, setHideFio] = useState(false)
  const [fio, setFio] = useState('')
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(category)
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getUserName = async () => {
      const userData = await AsyncStorage.getItem('userProfile')
      console.log(userData)
      setFio(JSON.parse(userData)?.fio || 'Анонимно')
      setPhone(JSON.parse(userData)?.phone || '38071')
      setEmail(JSON.parse(userData)?.email)
    }

    getUserName()
  }, [])

  const sendApplication = async () => {
    if (!isRightEnabled) {
      return Alert.alert(
        'Народный Контроль',
        'Перед отправкой заявки, ознакомьтесь с Правилами!'
      )
    }

    if (!description) {
      return Alert.alert(
        'Народный Контроль',
        'Перед отправкой заявки, заполните описание проблемы!'
      )
    }

    setIsLoading(true)

    const userId = await AsyncStorage.getItem('userId')

    await axios
      .post(`petition/store${userId ? '' : '-anonymously'}`, {
        ...(userId && { user_id: userId }),
        ...(phone && { phone }),
        description,
        incident_category: [{ incident_category_id: category }],
        address: {
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
          ...(note && { explanation: note })
        }
      })
      .then(async (res) => {
        console.log(res.data)
        Alert.alert(
          'Народный Контроль',
          'Заявка отправлена и в ближайшее время будет рассмотрена!'
        )
        navigation.navigate(userId ? 'Main' : 'ChooseAuthType')
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
    <ScrollView style={styles.container}>
      <ReferenceToMain />
      <View style={styles.stepsBlock}>
        <Text style={styles.stepsText}>
          Ваша заявка почти размещена, заполните дополнительные поля
        </Text>
        <StepsThreePosition isThirdStep />
      </View>
      <Text style={styles.contentText}>Оформление заявки</Text>
      <Text style={styles.referenceText}>Выберите категорию</Text>
      <View style={styles.pick}>
        <RNPickerSelect
          placeholder={{}}
          items={categories.map((item) => {
            return {
              label: item.title,
              value: item.id
            }
          })}
          onValueChange={(value) => setSelectedCategory(value)}
          value={selectedCategory}
        />
      </View>
      <LocationBlock userAddress={note} eventLocation={location} />
      <View style={styles.numberStatement}>
        <View style={styles.number}>
          <View style={styles.point}></View>
          <Text>Прикреплено к заявке №0000000001</Text>
        </View>
        <ButtonItem
          icon={plus}
          isColor
          text='Выбрать другую?'
          isWhiteText
          handler={() => navigation.navigate('StatementNearby')}
        />
      </View>
      <UserNameInputBlock
        fio={fio}
        setFio={setFio}
        hideFio={hideFio}
        setHideFio={setHideFio}
      />
      {phone !== null && (
        <ContactInputBlock
          title='Ваш телефон'
          keyboardType='phone-pad'
          value={phone}
          setValue={setPhone}
        />
      )}
      <ContactInputBlock
        title='Ваша почта'
        keyboardType='email-address'
        value={email}
        setValue={setEmail}
      />
      <Text style={styles.introduceText}>Описание проблемы *</Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        textAlignVertical='top'
        value={description}
        onChangeText={(value) => setDescription(value)}
      />
      <View style={styles.buttonsBlock}>
        <ButtonAddMedia icon={addPhoto} title='Прикрепить фото' />
        <ButtonAddMedia icon={addVideo} title='Добавить видео' />
      </View>
      <View style={styles.rightSwitch}>
        <Text style={styles.rightSwitchText}>С правами ознакомлен</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#fafafa' }}
          thumbColor={isRightEnabled ? '#ff553f' : '#fafafa'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setIsRightEnabled((prev) => !prev)}
          value={isRightEnabled}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.submitContainer}>
        <SendButton
          title='Отправить заявку'
          handler={() => sendApplication()}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 80
  },
  stepsBlock: {
    marginTop: 20,
    alignItems: 'center'
  },
  stepsText: {
    width: '80%',
    textAlign: 'center',
    color: '#132742',
    fontSize: 12
  },
  referenceText: {
    color: '#898989',
    fontSize: 10,
    marginLeft: 12
  },
  contentText: {
    color: '#132742',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 22
  },
  pick: {
    height: 35,
    backgroundColor: '#F8F8F8',
    borderRadius: 3,
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20
  },
  numberStatement: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  number: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%'
  },
  point: {
    width: 10,
    height: 10,
    backgroundColor: '#FF5F4A',
    borderRadius: 10,
    marginRight: 15
  },
  introduceText: {
    fontSize: 10,
    color: '#132742',
    marginVertical: 7
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    marginLeft: 14
  },
  textInput: {
    borderWidth: 0.3,
    borderColor: '#CACACA',
    borderRadius: 3,
    fontSize: 14,
    padding: 10,
    backgroundColor: '#FAFAFA'
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13
  },
  rightSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  rightSwitchText: {
    fontSize: 10
  },
  submitContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 17
  }
})

export default ContentStatement
