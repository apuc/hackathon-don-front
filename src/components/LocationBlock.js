import { StyleSheet, View, Text, TextInput } from 'react-native'

const LocationBlock = ({ eventLocation, userAddress, setUserAddress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        {parseFloat(eventLocation?.latitude) &&
        parseFloat(eventLocation?.longitude) ? (
          <Text style={styles.coordText}>
            Координаты:
            {` (${parseFloat(eventLocation.latitude).toFixed(6)}; ${parseFloat(
              eventLocation.longitude
            ).toFixed(6)})`}
          </Text>
        ) : (
          <Text style={styles.coordText}>Координаты не выбраны</Text>
        )}

        {!!setUserAddress ? (
          <TextInput
            placeholder='Примечание'
            placeholderTextColor={'#132742'}
            style={styles.input}
            onChangeText={setUserAddress}
            value={userAddress}
          />
        ) : (
          <Text style={styles.addressText}>{userAddress}</Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  text: {
    width: '90%',
    marginLeft: 16
  },
  coordText: {
    fontSize: 10,
    marginBottom: 5
  },
  addressText: {
    fontSize: 12,
    lineHeight: 14
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#888',
    padding: 10
  }
})

export default LocationBlock
