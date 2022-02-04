import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  Pressable
} from 'react-native'
import HeaderMain from '../components/MainScreen/HeaderMain'
import UserNameBlock from '../components/MainScreen/UserNameBlock'
import search from '../../assets/icons/tabs/search.png'
import Statement from '../components/StatementNearbyScreen/Statement'

const SearchForStatementScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderMain />
        <UserNameBlock />
        <View style={styles.content}>
          <Text style={styles.titleText}>Поиск заявок</Text>
          <View style={styles.searchBlock}>
            <TextInput
              style={styles.searchInput}
              placeholder='Поиск заявок по тексту или номеру'
              placeholderTextColor='#132742'
            />
            <Pressable onPress={() => {}}>
              <Image source={search} style={{ width: 20, height: 20 }} />
            </Pressable>
          </View>
          <Text style={styles.sortByText}>Сортировать по:</Text>
          <View style={styles.statementContainer}>
            <Statement />
            <Statement />
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
    paddingHorizontal: 10
  },
  titleText: {
    marginTop: 17
  },
  searchBlock: {
    marginTop: 6,
    height: 32,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  searchInput: {
    width: '80%',
    color: '#132742',
    fontSize: 8
  },
  sortByText: {
    marginTop: 10,
    marginLeft: 5,
    color: '#B0B0B0',
    fontSize: 9
  },
  statementContainer: {
    marginTop: 30
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

export default SearchForStatementScreen
