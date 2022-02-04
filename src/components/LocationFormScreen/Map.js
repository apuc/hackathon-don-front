import { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, Image, Alert } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { initialRegion } from '../../Constants'

const Map = ({ eventLocation, setEventLocation }) => {
  const [userLocation, setUserLocation] = useState(null)

  const mapRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert(
          'Народный Контроль',
          'Ошибка при получении разрешения на геолокацию'
        )
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      !!setEventLocation && setEventLocation(location.coords)
      if (mapRef && mapRef.current && mapRef.current.animateToRegion) {
        mapRef.current.animateToRegion(
          {
            ...(eventLocation ? eventLocation : location.coords),
            latitudeDelta: initialRegion.latitudeDelta,
            longitudeDelta: initialRegion.longitudeDelta
          },
          1500
        )
      }
    })()
  }, [])

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        provider={'google'}
        style={styles.map}
        initialRegion={initialRegion}
        minZoomLevel={7}
        showsUserLocation
        onUserLocationChange={(e) => setUserLocation(e.nativeEvent.coordinate)}
        onPress={(e) =>
          setEventLocation && setEventLocation(e.nativeEvent.coordinate)
        }
      >
        {userLocation && (
          <Marker coordinate={userLocation}>
            <Callout>
              <Text>Вы здесь</Text>
            </Callout>
          </Marker>
        )}
        {eventLocation && (
          <Marker coordinate={eventLocation} description='Проблема здесь'>
            <Image
              source={require('../../../assets/icons/statement/marker.png')}
              style={{ height: 32, width: 24 }}
            />
            <Callout style={{ width: 70 }}>
              <Text style={{ textAlign: 'center' }}>Проблема здесь</Text>
            </Callout>
          </Marker>
        )}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: 287,
    height: 287,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 25
  },
  map: {
    width: '100%',
    height: '100%'
  }
})

export default Map
