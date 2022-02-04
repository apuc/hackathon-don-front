import { useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Pressable
} from 'react-native'
import LocationBlock from '../components/LocationBlock'
import HeaderMain from '../components/MainScreen/HeaderMain'
import UserNameBlock from '../components/MainScreen/UserNameBlock'
import ReferenceToMain from '../components/ReferenceToMain'
import Map from '../components/LocationFormScreen/Map'
import StepsThreePosition from '../components/StepsTreePosition'

const LocationFormScreen = ({ navigation, route }) => {
  const [userAddress, setUserAddress] = useState('')
  const [eventLocation, setEventLocation] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderMain />
        <UserNameBlock />
        <View style={styles.content}>
          <ReferenceToMain />
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>
              Заполните данные о локации проблемы
            </Text>
            <StepsThreePosition isSecondStep />
          </View>
          <Text style={styles.title}>Форма выбора локации</Text>
          <Map
            eventLocation={eventLocation}
            setEventLocation={setEventLocation}
          />
          <View style={styles.line}></View>
          <View style={styles.locationContainer}>
            <LocationBlock
              eventLocation={eventLocation}
              userAddress={userAddress}
              setUserAddress={setUserAddress}
            />
          </View>
          {/* <View style={styles.buttonsBlock}>
            <Pressable style={[styles.button, styles.addAddressButton]}>
              <Text style={styles.addressText}>Добавить адрес вручную</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.createDraftButton]}>
              <Text style={styles.draftText}>Создать черновик</Text>
            </Pressable>
          </View> */}
          <Pressable
            style={styles.sendButton}
            onPress={() =>
              navigation.navigate('Statement', {
                location: eventLocation,
                category: route?.params?.category || '1',
                note: userAddress
              })
            }
          >
            <Text style={styles.sendButtonText}>Создать заявку</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  content: {
    paddingHorizontal: 20
  },
  stepContainer: {
    alignItems: 'center'
  },
  stepText: {
    width: '80%',
    textAlign: 'center',
    color: '#132742',
    fontSize: 12
  },
  title: {
    textAlign: 'center',
    color: '#132742',
    fontSize: 18,
    fontWeight: 'bold'
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F8F8F8',
    marginTop: 25
  },
  locationContainer: {
    marginTop: 20
  },
  buttonsBlock: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '45%',
    height: 31,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addAddressButton: {
    height: 40,
    backgroundColor: '#CED1D9'
  },
  createDraftButton: {
    height: 40,
    borderWidth: 0.2,
    borderColor: '#132742'
  },
  addressText: {
    textAlign: 'center',
    fontSize: 10,
    color: '#3E3939',
    fontWeight: '500'
  },
  draftText: {
    fontSize: 10,
    color: '#132742',
    fontWeight: '300'
  },
  sendButton: {
    marginTop: 15,
    marginBottom: 50,
    height: 48,
    backgroundColor: '#FF5F4A',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 12
  }
})

export default LocationFormScreen
