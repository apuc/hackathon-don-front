import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native'
import Map from '../components/LocationFormScreen/Map'
import Header from '../components/TransportScheduleDetailsScreen/Header'
import RegionBlock from '../components/LoginScreens/RegionBlock'
import arrowUp from '../../assets/icons/TransportScheduleDetailsScreen/arrow-up.png'
import arrowDown from '../../assets/icons/TransportScheduleDetailsScreen/arrow-down.png'
import { waypoints } from '../Constants'

const TransportScheduleDetailsScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.regionBlockContainer}>
          <RegionBlock
            selectedCity={route.params.city}
            navigationHandler={() =>
              navigation.navigate('ChooseCityForTransport')
            }
          />
        </View>
        <View style={styles.content}>
          <View style={styles.line}></View>
          <View style={styles.infoBlock}>
            <View style={styles.numberOfRouteBlock}>
              <Text style={styles.numberText}>
                {route.params.numberOfRoute}
              </Text>
              <Text style={styles.routeText}>Маршрут</Text>
            </View>
            <View style={styles.flightBlock}>
              <Text style={styles.titleFlightText}>первый рейс</Text>
              <Text>05:35</Text>
            </View>
            <View style={styles.flightBlock}>
              <Text style={styles.titleFlightText}>последний рейс</Text>
              <Text>19:00</Text>
            </View>
            <View style={styles.intervalBlock}>
              <Text style={styles.titleFlightText}>интервал движения</Text>
              <Text>4-10 мин</Text>
            </View>
          </View>
          <View style={styles.routePathsBlock}>
            <View style={styles.pathBlock}>
              <View style={styles.titleBlock}>
                <Image source={arrowUp} style={{ width: 28, height: 32 }} />
                <Text style={styles.pathText}>Прямой путь маршрута:</Text>
              </View>
              <View style={styles.waypointsBlock}>
                {waypoints.directRoute.map((item, index) => {
                  return (
                    <Text
                      style={[
                        styles.pointsText,
                        (index === 0 ||
                          index === waypoints.directRoute.length - 1) && {
                          fontWeight: 'bold'
                        }
                      ]}
                      key={index}
                    >
                      {item}
                    </Text>
                  )
                })}
              </View>
            </View>
            <View style={styles.pathBlock}>
              <View style={styles.titleBlock}>
                <Image source={arrowDown} style={{ width: 28, height: 32 }} />
                <Text style={styles.pathText}>Обратный путь маршрута:</Text>
              </View>
              <View style={styles.waypointsBlock}>
                {waypoints.backRoute.map((item, index) => {
                  return (
                    <Text
                      style={[
                        styles.pointsText,
                        (index === 0 ||
                          index === waypoints.backRoute.length - 1) && {
                          fontWeight: 'bold'
                        }
                      ]}
                      key={index}
                    >
                      {item}
                    </Text>
                  )
                })}
              </View>
            </View>
          </View>
          <Map />
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
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },
  line: {
    marginTop: 20,
    backgroundColor: '#F8F8F8',
    height: 1
  },
  infoBlock: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  numberOfRouteBlock: {
    width: 60,
    height: 60,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  numberText: {
    color: '#FF5F4A',
    fontSize: 28,
    lineHeight: 28
  },
  routeText: {
    color: '#132742',
    fontSize: 8,
    lineHeight: 8
  },
  flightBlock: {
    width: '25%',
    borderRightWidth: 1,
    borderRightColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleFlightText: {
    color: '#898989',
    fontSize: 10
  },
  intervalBlock: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  routePathsBlock: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pathBlock: {
    width: '47%'
  },
  titleBlock: {
    flexDirection: 'row',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDDE1'
  },
  pathText: {
    width: '60%',
    marginLeft: 10,
    color: '#132742',
    fontSize: 10,
    fontWeight: 'bold'
  },
  waypointsBlock: {
    marginTop: 20,
    paddingHorizontal: 5
  },
  pointsText: {
    marginBottom: 5,
    fontSize: 10
  }
})

export default TransportScheduleDetailsScreen
