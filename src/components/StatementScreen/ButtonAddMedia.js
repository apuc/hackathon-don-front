import { Image, StyleSheet, Pressable, Text } from 'react-native'

const ButtonAddMedia = ({ icon, title }) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={icon}
        resizeMode={'contain'}
        style={{ width: 30, height: 30 }}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '44%',
    height: 35,
    backgroundColor: '#F8F8F8',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 10,
    marginLeft: 10
  }
})

export default ButtonAddMedia
