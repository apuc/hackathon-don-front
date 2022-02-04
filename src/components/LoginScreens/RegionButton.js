import { StyleSheet, Pressable, Text } from 'react-native'

const RegionButton = ({ title, regionHandler }) => {
  return (
    <Pressable style={styles.container} onPress={() => regionHandler()}>
      <Text>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 63,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  }
})

export default RegionButton
