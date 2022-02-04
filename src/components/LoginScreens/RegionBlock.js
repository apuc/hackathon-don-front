import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Text, Pressable } from 'react-native'

const RegionBlock = ({ selectedCity, navigationHandler }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>Ваш регион:</Text>
      <View style={styles.region}>
        <Text style={styles.textLabel}>{selectedCity}</Text>
      </View>
      <Pressable
        style={styles.reference}
        onPress={() =>
          navigationHandler
            ? navigationHandler()
            : navigation.navigate('ChooseCity')
        }
      >
        <Text style={styles.referenceText}>Изменить регион</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textLabel: {
    color: '#132742',
    fontSize: 12
  },
  region: {
    width: '36%',
    height: 53,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  reference: {
    width: '20%',
    marginRight: 25
  },
  referenceText: {
    color: '#23344B',
    fontSize: 9,
    textDecorationLine: 'underline'
  }
})

export default RegionBlock
