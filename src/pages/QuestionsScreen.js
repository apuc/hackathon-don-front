import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import ReferenceToMain from '../components/ReferenceToMain'
import HeaderStatement from '../components/StatementScreen/HeaderStatement'

import PickerBlock from '../components/QuestionsScreen/PickerBlock'

const QuestionsScreen = () => {
  return (
    <SafeAreaView>
      <HeaderStatement />
      <ScrollView style={styles.container}>
        <ReferenceToMain />
        <Text style={styles.mainTitle}>Вопросы и ответы</Text>
        <View style={styles.lineContainer}>
          <View style={styles.redLine}></View>
        </View>
        <PickerBlock />
        <PickerBlock />
        <PickerBlock />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 80
  },
  mainTitle: {
    textAlign: 'center',
    color: '#132742',
    fontSize: 22,
    fontWeight: 'bold'
  },
  lineContainer: {
    margin: 20,
    alignItems: 'center'
  },
  redLine: {
    width: '40%',
    height: 2,
    backgroundColor: '#FF5F4A'
  }
})

export default QuestionsScreen
