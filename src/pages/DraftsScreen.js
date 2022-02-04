import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable
} from 'react-native'
import HeaderMain from '../components/MainScreen/HeaderMain'
import UserNameBlock from '../components/MainScreen/UserNameBlock'
import Statement from '../components/StatementNearbyScreen/Statement'

const DraftsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderMain />
        <UserNameBlock />
        <View style={styles.content}>
          <Text style={styles.titleText}>Черновики обращений</Text>
          <View style={styles.statementContainer}>
            <Statement isDraftScreen />
            <Statement isDraftScreen />
          </View>
        </View>
        <View style={styles.loadMoreContainer}>
          <Pressable style={styles.loadButton}>
            <Text style={styles.buttonText}>Загрузить еще</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20
  },
  titleText: {
    marginTop: 17
  },
  statementContainer: {
    marginTop: 20
  },
  loadMoreContainer: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center'
  },
  loadButton: {
    width: 90
  },
  buttonText: {
    fontSize: 13,
    color: '#132742',
    textDecorationLine: 'underline'
  }
})

export default DraftsScreen
