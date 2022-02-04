import { Image, StyleSheet, Pressable, View, Text } from 'react-native'
import check from '../../../assets/icons/LoginScreens/check.png'

const CheckBox = ({ title, isSmallText, isChecked, setIsChecked }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => setIsChecked((value) => !value)}
    >
      <View style={styles.checkbox}>
        {isChecked && <Image source={check} style={{ width: 11, height: 7 }} />}
      </View>
      <Text style={isSmallText ? styles.smallText : styles.largeText}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80
  },
  checkbox: {
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6
  },
  smallText: {
    color: '#868686',
    fontSize: 10,
    width: 70
  },
  largeText: {
    color: '#132742',
    fontSize: 9
  }
})

export default CheckBox
