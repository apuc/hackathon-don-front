import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Pressable } from 'react-native'

const FooterButton = ({ icon, isHomeButton, screen }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={[styles.container, isHomeButton && styles.homeBorder]}
      onPress={() => screen && navigation.navigate(screen)}
    >
      <Image source={icon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeBorder: {
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 50
  }
})

export default FooterButton
