import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonItem from './ButtonItem'
import Button from './Button'
import plus from '../../../../assets/icons/main/buttonItems/plus.png'
import magnifying from '../../../../assets/icons/main/buttonItems/magnifying.png'
import list from '../../../../assets/icons/main/buttonItems/list.png'
import folder from '../../../../assets/icons/main/buttonItems/folder.png'
import person from '../../../../assets/icons/main/buttonItems/person.png'
import question from '../../../../assets/icons/main/buttonItems/question.png'
import directory from '../../../../assets/icons/main/buttonItems/directory.png'
import transport from '../../../../assets/icons/main/buttonItems/transport.png'

const ButtonsBlock = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.buttonItems}>
        <ButtonItem
          isColor
          icon={plus}
          text='Создать заявку'
          isWhiteText
          handler={() => navigation.navigate('Appeal')}
        />
        <ButtonItem
          icon={magnifying}
          text='Поиск заявок'
          handler={() => navigation.navigate('Search')}
        />
        <ButtonItem
          icon={list}
          text='Мои обращения'
          handler={() => navigation.navigate('MyApplications')}
        />
        <ButtonItem
          icon={folder}
          text='Архив обращений'
          handler={() => navigation.navigate('Archive')}
        />
        <ButtonItem
          icon={directory}
          text='Черновики обращений'
          handler={() => navigation.navigate('Drafts')}
        />
        <ButtonItem
          icon={question}
          text='Вопросы и ответы'
          handler={() => navigation.navigate('Question')}
        />
        <ButtonItem
          icon={transport}
          text='Расписание транспорта'
          handler={() => navigation.navigate('Schedule')}
        />
        <ButtonItem
          icon={person}
          text='Тех. поддержка'
          handler={() => navigation.navigate('TechSupport')}
        />
      </View>
      <View style={styles.buttons}>
        <Button text='Исполнительные органы' />
        <Button text='Контролирующие органы' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
    paddingBottom: 48,
    backgroundColor: '#E9EAEF',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  buttonItems: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  buttons: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default ButtonsBlock
