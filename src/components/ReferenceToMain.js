import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Pressable, Image, Text } from 'react-native'
import arrow from '../../assets/icons/statement/arrow.png'

const ReferenceToMain = () => {
  const navigation = useNavigation()

  return (
    <Pressable
      hitSlop={10}
      style={styles.reference}
      onPress={() => navigation.goBack()}
    >
      <Image source={arrow} style={{ width: 18, height: 10 }} />
      <Text style={styles.referenceText}>На главную</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  reference: {
    marginVertical: 17,
    flexDirection: 'row',
    alignItems: 'center'
  },
  referenceText: {
    color: '#898989',
    fontSize: 15,
    marginLeft: 12
  }
})

export default ReferenceToMain
