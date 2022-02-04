import { StyleSheet, Text, Pressable } from 'react-native'

const Button = ({ text }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 63,
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF5F4A44'
  },
  text: {
    color: '#132742',
    fontSize: 9
  }
})

export default Button
