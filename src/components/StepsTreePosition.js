import { StyleSheet, Text, View } from 'react-native'

const StepsThreePosition = ({ isSecondStep, isThirdStep }) => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View style={styles.step}></View>
        {isSecondStep && <View style={styles.step}></View>}
        {isThirdStep && (
          <>
            <View style={styles.step}></View>
            <View style={styles.step}></View>
          </>
        )}
      </View>
      <Text style={styles.stepText}>
        Шаг {isSecondStep ? '2' : isThirdStep ? '3' : '1'} из 3
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 27,
    marginBottom: 26
  },
  slider: {
    width: 120,
    height: 2,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row'
  },
  step: {
    width: '33.33333%',
    height: '100%',
    backgroundColor: 'red'
  },
  stepText: {
    fontSize: 12,
    marginTop: 6
  }
})

export default StepsThreePosition
