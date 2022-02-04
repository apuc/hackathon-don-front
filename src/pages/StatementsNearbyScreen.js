import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Pressable
} from 'react-native'
import closeButton from '../../assets/icons/StatementNearby/ex.png'
import Statement from '../components/StatementNearbyScreen/Statement'

const StatementsNearbyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textBlock}>
          <Text style={{ color: '#FFFFFF' }}>Заявки поблизости</Text>
          <Pressable
            style={styles.closeButtonContainer}
            onPress={() => navigation.navigate('Statement')}
          >
            <Image source={closeButton}></Image>
          </Pressable>
        </View>
        <View style={styles.statementsBlock}>
          <Statement isSearchNearByScreen />
          <Statement isSearchNearByScreen />
          <Statement isSearchNearByScreen />
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
  container: {
    backgroundColor: '#676565',
    flex: 1,
    paddingHorizontal: 10
  },
  textBlock: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 80,
    paddingRight: 30
  },
  closeButtonContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statementsBlock: {
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
    color: '#FFFFFF',
    textDecorationLine: 'underline'
  }
})

export default StatementsNearbyScreen
