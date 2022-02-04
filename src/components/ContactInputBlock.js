import { StyleSheet, View, Text, TextInput } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'

const ContactInputBlock = ({ title, keyboardType, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {keyboardType === 'phone-pad' ? (
        <MaskedTextInput
          mask='+38 (071) 999-99-99'
          defaultValue={value}
          onChangeText={(text, rawText) => {
            setValue(rawText)
          }}
          style={styles.input}
          keyboardType={'phone-pad'}
        />
      ) : (
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          value={value}
          onChangeText={(value) => setValue(value)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
    width: '65%'
  },
  title: {
    fontSize: 10,
    color: '#132742',
    marginBottom: 7
  },
  input: {
    borderWidth: 0.3,
    borderColor: '#CACACA',
    height: 35,
    paddingVertical: 8,
    fontSize: 14,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10
  }
})

export default ContactInputBlock
