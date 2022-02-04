import { SafeAreaView } from 'react-native'
import ContentStatement from '../components/StatementScreen/ContentStatement'
import HeaderStatement from '../components/StatementScreen/HeaderStatement'

const StatementScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <HeaderStatement />
      <ContentStatement
        navigation={navigation}
        location={route?.params?.location}
        category={route?.params?.category.toString()}
        note={route?.params?.note}
      />
    </SafeAreaView>
  )
}

export default StatementScreen
