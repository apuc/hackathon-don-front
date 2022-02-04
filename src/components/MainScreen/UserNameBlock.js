import { StyleSheet, View, Image, Text } from 'react-native'
import UserPane from '../UserPane'

const UserNameBlock = () => {
  return (
    <View style={styles.container}>
      <UserPane />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FAFAFA',
    borderRadius: 5
  }
})

export default UserNameBlock
