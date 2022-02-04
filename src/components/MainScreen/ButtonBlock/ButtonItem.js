import { Image, StyleSheet, Pressable, Text } from 'react-native'

const ButtonItem = ({ isColor, icon, text, isWhiteText, handler }) => {
  return (
    <Pressable
      style={[
        styles.container,
        isColor ? styles.redBackground : styles.whiteBackground,
        { margin: 6 }
      ]}
      onPress={handler}
    >
      <Image
        source={icon}
        resizeMode={'contain'}
        style={{ width: 30, height: 30 }}
      />
      <Text
        style={[
          styles.text,
          isWhiteText ? styles.textColorWhite : styles.textColorBlack
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 5
  },
  redBackground: {
    backgroundColor: '#FF5F4A'
  },
  whiteBackground: {
    backgroundColor: '#FAFAFA'
  },
  text: {
    textAlign: 'center',
    fontSize: 8,
    marginTop: 3
  },
  textColorWhite: {
    color: '#FFFFFF'
  },
  textColorBlack: {
    color: '#132742'
  }
})

export default ButtonItem
