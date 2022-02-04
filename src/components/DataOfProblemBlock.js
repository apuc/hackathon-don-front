import { StyleSheet, View, Image, Text } from 'react-native'
import clock from '../../assets/icons/StatementNearby/clock.png'

const DateofProblemBlock = ({ date = new Date() }) => {
  return (
    <View style={styles.dateOfProblemBlock}>
      <Image source={clock} style={{ marginTop: 3, width: 24, height: 24 }} />
      <View style={styles.title}>
        <Text style={styles.titleText}>Зафиксированная дата проблемы</Text>
        <Text style={styles.date}>
          {new Date(date).toLocaleDateString()}{' '}
          {new Date(date).toLocaleTimeString()}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dateOfProblemBlock: {
    width: 90,
    flexDirection: 'row',
    marginRight: 20
  },
  title: {
    marginLeft: 6
  },
  titleText: {
    color: '#898989',
    fontSize: 9
  },
  date: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: 'bold'
  }
})

export default DateofProblemBlock
