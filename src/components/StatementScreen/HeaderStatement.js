import { View, StyleSheet } from 'react-native'
import UserPane from '../UserPane'

const HeaderStatement = () => {
  return (
    <View style={styles.container}>
      <UserPane />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '7%',
    height: 53,
    paddingHorizontal: 20,
    backgroundColor: '#E9EAEF',
    borderBottomLeftRadius: 25,
    justifyContent: 'center'
  }
})
export default HeaderStatement
