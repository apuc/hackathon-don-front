import { useState } from 'react'
import { StyleSheet, View, Pressable, Text, Image } from 'react-native'
import arrowDown from '../../../assets/icons/questions/arrow-down.png'
import arrowUp from '../../../assets/icons/questions/arrow-up.png'

const PickerBlock = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.picker}
        onPress={() => {
          setIsActive((prev) => !prev)
        }}
      >
        <Text style={styles.pickerText}>
          Базовый принцип работы приложения:
        </Text>
        <View style={styles.pickerArrow}>
          <Image
            source={isActive ? arrowUp : arrowDown}
            style={{ width: 17, height: 9 }}
          />
        </View>
      </Pressable>
      {isActive && (
        <Text style={styles.pickerDescriptionText}>
          Пользователь видит проблемную ситуацию {'\n->'}
          выбираем тип ситуации {'\n->'} отмечаем на карте 
          своё место положение (фиксируем кнопкой) {'\n->'} фотографируем 
          (выбираем фото) {'\n->'} добавляем описание (можно
          пропустить) и информацию о себе {'\n->'} отправляем фото + описание +
          личную инфу + координаты события на месте {'\n'}(по желанию можно выбрать
          координаты на карте перед отправкой) {'\n->'} заявка попадает в общий
          канал и в канал по категории проблемы
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  picker: {
    flexDirection: 'row'
  },
  pickerText: {
    width: '85%',
    fontSize: 15,
    color: '#FF5F4A',
    fontWeight: '500',
    padding: 5
  },
  pickerArrow: {
    width: 33,
    height: 33,
    backgroundColor: '#E9EAEF',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerDescriptionText: {
    marginTop: 15,
    fontSize: 14
  }
})

export default PickerBlock
