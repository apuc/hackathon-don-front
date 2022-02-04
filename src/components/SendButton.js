import { StyleSheet, Pressable, Text } from 'react-native'

const SendButton = ({ title, handler, disabled }) => {
  return (
    <Pressable style={styles.sendButton} onPress={handler} disabled={disabled}>
      <Text style={styles.sendButtonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  sendButton: {
    width: '69%',
    height: 48,
    backgroundColor: '#FF5F4A',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 14
  }
})

export default SendButton
