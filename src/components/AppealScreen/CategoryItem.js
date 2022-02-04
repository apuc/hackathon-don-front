import { StyleSheet, View, Text, Pressable, Image } from 'react-native'

const CategoryItem = ({ title, handler, icon }) => {
  return (
    <Pressable style={styles.container} onPress={() => handler()}>
      <View style={styles.block}>
        <Image
          source={icon}
          resizeMode={'contain'}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 87,
    marginBottom: 33
  },
  block: {
    width: 87,
    height: 87,
    backgroundColor: 'green',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 9,
    color: '#132742',
    fontSize: 10,
    textAlign: 'center'
  }
})

export default CategoryItem
