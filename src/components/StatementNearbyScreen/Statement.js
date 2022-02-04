import { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Alert,
  Modal
} from 'react-native'

import tube from '../../../assets/img/StatementsNearby/Tube.png'
import photo from '../../../assets/icons/StatementNearby/photo.png'
import video from '../../../assets/icons/StatementNearby/video.png'
import LocationBlock from '../LocationBlock'
import { useNavigation } from '@react-navigation/native'
import DateofProblemBlock from '../DataOfProblemBlock'
import Map from '../LocationFormScreen/Map'

const Statement = ({ isSearchNearByScreen, isDraftScreen, data }) => {
  const navigation = useNavigation()

  const [showModal, setShowModal] = useState(false)

  const showModalMap = () => {
    if (
      parseFloat(data?.address?.latitude) &&
      parseFloat(data?.address?.longitude)
    ) {
      setShowModal(true)
    } else {
      Alert.alert('Народный Контроль', 'Координаты заявки не указаны!')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.statusBlock}>
          <View style={styles.icon}>
            <View style={styles.innerIcon}></View>
          </View>
          <Text style={styles.statusText}>В обработке</Text>
        </View>
        <View style={styles.nameOfProblem}>
          <Text style={styles.problemText}>
            {data?.incident_category[0]?.mnemonic_name ||
              'прорывы водо-комуникаций'}
          </Text>
        </View>
        <Text style={styles.numberOfStatement}>№000000{data?.id || 1}</Text>
      </View>
      <View style={styles.descriptionBlock}>
        <View style={styles.iconBlock}>
          <Image source={tube} />
        </View>
        <View>
          <Text style={styles.descriptionTitle}>
            {data?.incident_category[0]?.title ||
              'Авария, прорыв трубы с горячей водой'}
          </Text>
          <Text style={styles.descriptionText}>
            {data?.description ||
              'Вот прямо сейчас я провисела на телефоне вашей горячей линии больше часа и звонок просто отбился, когда я была уже 45-я в очереди.'}
          </Text>
          <View style={styles.mediaBlock}>
            <DateofProblemBlock date={data?.created_at} />
            <View style={styles.mediaContainer}>
              <Image source={photo} style={{ width: 19, height: 16 }} />
            </View>
            <View style={styles.mediaContainer}>
              <Image source={video} style={{ width: 17, height: 16 }} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.locationContainer}>
        <LocationBlock
          eventLocation={data?.address}
          userAddress={data?.address?.explanation}
        />
      </View>
      {isSearchNearByScreen && !isDraftScreen && (
        <View style={styles.buttonsBlock}>
          <Pressable style={[styles.addToButton, styles.button]}>
            <Text style={styles.addButtonText}>Добавить к заявке</Text>
          </Pressable>
          <Pressable
            style={[styles.detailsButton, styles.button]}
            onPress={() => navigation.navigate('Details', { data })}
          >
            <Text style={styles.detailsButtonText}>Детали</Text>
          </Pressable>
        </View>
      )}
      {!isSearchNearByScreen && !isDraftScreen && (
        <View style={styles.buttonsBlock}>
          <Pressable
            style={[styles.detailsButton, styles.button]}
            onPress={() => navigation.navigate('Details', { data })}
          >
            <Text style={styles.detailsButtonText}>Детали</Text>
          </Pressable>
          <Pressable
            style={styles.referenceToMap}
            onPress={() => showModalMap()}
          >
            <Text style={styles.referenceToMapText}>Посмотреть на карте</Text>
          </Pressable>
        </View>
      )}
      {isDraftScreen && (
        <View style={styles.continueContainer}>
          <Pressable style={styles.continueButton}>
            <Text style={styles.buttonText}>Продолжить заполнение</Text>
          </Pressable>
        </View>
      )}
      <Modal
        animationType='fade'
        transparent={false}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Map
              eventLocation={{
                latitude: parseFloat(data?.address?.latitude),
                longitude: parseFloat(data?.address?.longitude)
              }}
            />
            <Pressable
              style={styles.button}
              onPress={() => setShowModal(!showModal)}
            >
              <Text style={styles.textStyle}>Закрыть</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderColor: '#E9EAEF',
    borderWidth: 0.4,
    marginBottom: 6,
    paddingHorizontal: 10,
    paddingVertical: 22
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statusBlock: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: '#FEF1F1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  innerIcon: {
    width: 10,
    height: 10,
    backgroundColor: '#FF5F4A',
    borderRadius: 5
  },
  statusText: {
    color: '#132742',
    fontSize: 10,
    fontWeight: 'bold'
  },
  nameOfProblem: {
    width: 130,
    height: 14,
    backgroundColor: '#132742',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  problemText: {
    color: '#FFFFFF',
    fontSize: 9
  },
  numberOfStatement: {
    color: '#FF5F4A',
    fontSize: 9
  },
  descriptionBlock: {
    width: '75%',
    marginTop: 20,
    flexDirection: 'row'
  },
  iconBlock: {
    marginRight: 10
  },
  descriptionTitle: {
    color: '#132742',
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  descriptionText: {
    marginTop: 6,
    color: '#132742',
    fontSize: 10
  },
  mediaBlock: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateOfProblemBlock: {
    width: 90
  },
  title: {
    flexDirection: 'row'
  },
  titleText: {
    marginLeft: 6,
    color: '#898989',
    fontSize: 9
  },
  mediaContainer: {
    paddingTop: 10,
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  line: {
    height: 1,
    backgroundColor: '#F6F6F6'
  },
  locationContainer: {
    marginTop: 10
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    width: '45%',
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addToButton: {
    backgroundColor: '#FF5F4A'
  },
  addButtonText: {
    fontSize: 9,
    color: '#FFFFFF'
  },
  detailsButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E9EAEF'
  },
  detailsButtonText: {
    fontSize: 9,
    color: '#132742'
  },
  referenceToMap: {
    width: '45%',
    padding: 10
  },
  referenceToMapText: {
    marginTop: 5,
    color: '#132742',
    fontSize: 9,
    textDecorationLine: 'underline'
  },
  continueContainer: {
    paddingTop: 15,
    alignItems: 'center'
  },
  continueButton: {
    width: '60%',
    height: 35,
    backgroundColor: '#132742',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 9,
    color: '#FFFFFF'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    marginVertical: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})

export default Statement
