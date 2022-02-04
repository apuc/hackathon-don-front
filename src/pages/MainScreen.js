import { useState, useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
  ActivityIndicator
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import HeaderMain from '../components/MainScreen/HeaderMain'
import UserNameBlock from '../components/MainScreen/UserNameBlock'
import ButtonsBlock from '../components/MainScreen/ButtonBlock/ButtonsBlock'
import ProblemItem from '../components/MainScreen/ProblemItem'

import img1 from '../../assets/img/main/actualProblems/img1.png'
import img2 from '../../assets/img/main/actualProblems/img2.png'
import imageSmall from '../../assets/img/main/actualProblems/imgRound.png'
import { categories } from '../Constants'

const MainScreen = ({ navigation }) => {
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    const getUserInfo = async () => {
      const userId = await AsyncStorage.getItem('userId')
      if (userId) {
        await axios
          .get(`user/show/${userId}`)
          .then(async (res) => {
            console.log(res.data)
            await AsyncStorage.setItem(
              'userProfile',
              JSON.stringify({
                ...res.data.data.user_profile,
                email: res.data.data.emil,
                phone: res.data.data.phone
              })
            ).then(() => setDataLoaded(true))
          })
          .catch((err) => {
            Alert.alert(
              'Народный Контоль',
              'Ошибка при получении информации о пользователе!'
            )
            console.warn(err)
          })
      }
    }

    getUserInfo()
  }, [])

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault()

        Alert.alert(
          'Народный Контроль',
          'Вы действительно хотите выйти из аккаунта?',
          [
            { text: 'Нет', style: 'cancel', onPress: () => {} },
            {
              text: 'Да',
              style: 'destructive',
              onPress: async () => {
                await AsyncStorage.setItem('token', '')
                navigation.dispatch(e.data.action)
              }
            }
          ]
        )
      }),
    [navigation]
  )

  if (!dataLoaded) {
    return (
      <View>
        <ActivityIndicator style={{ paddingTop: 200 }} size='large' />
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderMain />
        <UserNameBlock />
        <ButtonsBlock />
        <View style={styles.problemBlock}>
          <Text style={styles.problemBlockText}>Актуальные проблемы</Text>
          <Pressable>
            <Text style={styles.textButton}>Показать все</Text>
          </Pressable>
        </View>
        <ScrollView
          contentContainerStyle={styles.itemsBlock}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => {
            return (
              <ProblemItem
                image={index % 2 ? img1 : img2}
                imageSmall={imageSmall}
                title={item.title}
                key={index}
              />
            )
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  problemBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginTop: 34,
    marginBottom: 24
  },
  problemBlockText: {
    color: '#132742',
    fontSize: 16,
    fontWeight: '700'
  },
  textButton: {
    marginTop: 5,
    fontSize: 9,
    textDecorationLine: 'underline'
  },
  itemsBlock: {
    flexDirection: 'row',
    paddingLeft: 18,
    marginBottom: 20
  }
})

export default MainScreen
