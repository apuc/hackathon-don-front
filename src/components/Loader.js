import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size='large' color='#FF5F4A' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  }
})

export default Loader
