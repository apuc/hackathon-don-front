import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
  Image
} from 'react-native'

import Button from '../components/MainScreen/ButtonBlock/Button'
import ReferenceToMain from '../components/ReferenceToMain'
import HeaderStatement from '../components/StatementScreen/HeaderStatement'

import telegram from '../../assets/icons/questions/telegram.png'
import instagram from '../../assets/icons/questions/instagram.png'

const TechSupportScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <HeaderStatement />
      <ScrollView style={styles.container}>
        <ReferenceToMain />
        <Text style={styles.mainTitle}>Техническая поддержка</Text>
        <View style={styles.lineContainer}>
          <View style={styles.redLine}></View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable onPress={() => navigation.navigate('StatementNearby')}>
            <Text style={styles.mainText}>Тепловая карта проблемных зон</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Search')}>
            <Text style={styles.mainText}>Поиск заявок</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Appeal')}>
            <Text style={styles.mainText}>Создать заявку</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('MyApplications')}>
            <Text style={styles.mainText}>Мои обращения</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Drafts')}>
            <Text style={styles.mainText}>Черновики обращений</Text>
          </Pressable>
          <View style={styles.buttons}>
            <Button text='Исполнительные органы' />
            <Button text='Контролирующие органы' />
          </View>
          <Pressable onPress={() => Linking.openURL('https://vk.com/')}>
            <Text style={styles.mainText}>Чат тех. поддержки</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Question')}>
            <Text style={styles.mainText}>Вопросы и ответы</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL('https://people-control.itguild.info/')
            }
          >
            <Text style={[styles.mainText, styles.link]}>На сайт</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL('https://people-control.itguild.info/')
            }
          >
            <Text style={[styles.mainText, styles.link, { fontSize: 10 }]}>
              Правила и соглашение на использование данных
            </Text>
          </Pressable>
          <Text style={[styles.mainText, { fontSize: 10 }]}>
            Разработано в рамках проекта "Хакатон"
          </Text>
          <View style={styles.iconsContainer}>
            <Pressable
              onPress={() => Linking.openURL('https://t.me/People_Control_bot')}
            >
              <Image source={telegram} style={{ width: 32, height: 32 }} />
            </Pressable>
            <Pressable
              onPress={() => Linking.openURL('https://instagram.com/')}
            >
              <Image source={instagram} style={{ width: 32, height: 32 }} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 80
  },
  mainTitle: {
    textAlign: 'center',
    color: '#132742',
    fontSize: 22,
    fontWeight: 'bold'
  },
  lineContainer: {
    margin: 20,
    alignItems: 'center'
  },
  redLine: {
    width: '40%',
    height: 2,
    backgroundColor: '#FF5F4A'
  },
  mainText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    textAlign: 'center',
    color: '#132742',
    paddingBottom: 10
  },
  buttons: {
    width: '100%',
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingTop: 20
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 120,
    paddingTop: 10,
    paddingBottom: 120
  }
})

export default TechSupportScreen
