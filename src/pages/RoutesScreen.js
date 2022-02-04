import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable
} from 'react-native'
import Header from '../components/TransportScheduleDetailsScreen/Header'
import RegionBlock from '../components/LoginScreens/RegionBlock'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { routes } from '../Constants'
import { useNavigation } from '@react-navigation/native'

const RoutesScreen = ({ route }) => {
  const navigation = useNavigation()

  const [city, setCity] = useState('')

  useEffect(() => {
    ;(async () => {
      const cityAsync = await AsyncStorage.getItem('myCity')
      setCity(cityAsync)
    })()
  }, [])

  const buttonHandler = (numberOfRoute) => {
    navigation.navigate('TransportScheduleDetails', {
      numberOfRoute,
      city: route?.params?.region || city
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.regionBlockContainer}>
          <RegionBlock
            selectedCity={route?.params?.region || city}
            navigationHandler={() =>
              navigation.navigate('ChooseCityForTransport')
            }
          />
        </View>
        <View style={styles.content}>
          <View style={styles.line}></View>
          <View style={styles.routesBlock}>
            {routes.map((item, index) => {
              return (
                <Pressable
                  style={styles.routeContainer}
                  value={item}
                  onPress={() => buttonHandler(item)}
                  key={index}
                >
                  <Text style={styles.numberText}>{item}</Text>
                  <Text style={styles.routeText}>Маршрут</Text>
                </Pressable>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEF'
  },
  regionBlockContainer: {
    marginTop: 20
  },
  content: {
    paddingHorizontal: 10,
    marginBottom: 30
  },
  line: {
    marginTop: 20,
    backgroundColor: '#F8F8F8',
    height: 1
  },
  routesBlock: {
    marginTop: 18,
    marginLeft: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  routeContainer: {
    width: 72,
    height: 72,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: '#FF5F4A',
    fontSize: 28,
    fontWeight: 'bold'
  },
  routeText: {
    color: '#132742',
    fontSize: 8,
    lineHeight: 8
  }
})

export default RoutesScreen
