import { View, Image, StyleSheet, Text } from 'react-native'
import emblem from '../../../assets/img/main/emblemOfCity.png'

const HeaderMain = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={emblem} style={styles.emblem} />
        <View style={styles.redSqueare}></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textBlack}>
          <Text style={styles.textRed}>H</Text>ародный
        </Text>
        <Text style={styles.textBlack}>
          <Text style={styles.textRed}>К</Text>онтроль
        </Text>
        <Text style={styles.textProblem}>Нашел проблему, сообщи всем!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    paddingRight: 30,
    paddingVertical: 26,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emblem: {
    width: 114,
    height: 106,
    borderRadius: 15
  },
  redSqueare: {
    width: 114,
    height: 107,
    backgroundColor: '#FF5F4A',
    borderRadius: 15,
    opacity: 0.5,
    position: 'absolute'
  },
  textContainer: {
    width: 188,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBlack: {
    fontFamily: 'Roboto-Black',
    fontSize: 25,
    lineHeight: 25
  },
  textRed: {
    fontFamily: 'Roboto-Regular',
    color: '#FF5F4A'
  },
  textProblem: {
    fontSize: 9,
    color: '#132742'
  }
})

export default HeaderMain
