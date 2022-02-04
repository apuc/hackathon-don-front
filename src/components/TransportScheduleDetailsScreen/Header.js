import { StyleSheet, View, Image, Text } from 'react-native'
import emblem from '../../../assets/img/main/emblemOfCity.png'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emblem}>
        <View style={styles.imageContainer}>
          <Image source={emblem} style={styles.image} />
          <View style={styles.mask}></View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Text style={styles.redColor}>Н</Text>ародный{' '}
            <Text style={styles.redColor}>К</Text>онтроль
          </Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.title}>Расписание транспорта</Text>
      <View style={styles.redLine}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20
  },
  emblem: {
    width: 160,
    alignItems: 'center'
  },
  imageContainer: {
    width: 78,
    height: 75
  },
  image: {
    width: 78,
    height: 75,
    borderRadius: 15
  },
  mask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#FF5F4A',
    opacity: 0.5,
    borderRadius: 15
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  },
  redColor: {
    color: '#FF5F4A'
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F8F8F8',
    marginTop: 25
  },
  title: {
    fontSize: 20,
    marginTop: 23,
    color: '#132742'
  },
  redLine: {
    marginTop: 20,
    width: 120,
    height: 2,
    backgroundColor: '#FF5F4A'
  }
})

export default Header
