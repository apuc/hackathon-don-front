import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font'
import * as Updates from 'expo-updates'
import { Image } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ChooseCityScreen from './src/pages/ChooseCity'
import ChooseAuthTypeScreen from './src/pages/ChooseAuthType'
import RegistrationFormScreen from './src/pages/RegistrationForm'
import LoginScreen from './src/pages/Login'
import CodeConfirmationScreen from './src/pages/CodeConfirmation'
import MainScreen from './src/pages/MainScreen'

import StatementScreen from './src/pages/StatementScreen'
import AppealScreen from './src/pages/AppealScreen'
import LocationFormScreen from './src/pages/LocationFormScreen'
import StatementsNearbyScreen from './src/pages/StatementsNearbyScreen'
import SearchForStatementScreen from './src/pages/SearchForStatementScreen'
import ArchiveScreen from './src/pages/ArchiveScreen'
import MyAppealsScreen from './src/pages/MyAppeals'
import DraftsScreen from './src/pages/DraftsScreen'
import DetailsOfStatementScreen from './src/pages/DetailsOfStatementScreen'
import QuestionsScreen from './src/pages/QuestionsScreen'
import VideoScreen from './src/pages/VideoScreen'
import TechSupportScreen from './src/pages/TechSupportScreen'
import TransportScheduleDetailsScreen from './src/pages/TransportScheduleDetailsScreen'
import RoutesScreen from './src/pages/RoutesScreen'
import ChooseCityForTransportScreen from './src/pages/ChooseCityForTransportScreen'

import schedule from './assets/icons/tabs/schedule.png'
import scheduleActive from './assets/icons/tabs/scheduleActive.png'
import myApplications from './assets/icons/tabs/myApplications.png'
import myApplicationsActive from './assets/icons/tabs/myApplicationsActive.png'
import home from './assets/icons/tabs/home.png'
import homeActive from './assets/icons/tabs/homeActive.png'
import techSupport from './assets/icons/tabs/techSupport.png'
import techSupportActive from './assets/icons/tabs/techSupportActive.png'
import search from './assets/icons/tabs/search.png'
import searchActive from './assets/icons/tabs/searchActive.png'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  const [city, setCity] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    async function prepare() {
      const tempCity = await AsyncStorage.getItem('myCity')
      const tempToken = await AsyncStorage.getItem('token')
      setCity(tempCity)
      setToken(tempToken)

      try {
        const update = await Updates.checkForUpdateAsync()
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync()
          Updates.reloadAsync()
        }
      } catch (e) {
        console.log(e)
      }
    }

    prepare()
  }, [])

  const [loaded] = useFonts({
    'Roboto-Light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto/Roboto-Black.ttf')
  })

  if (!loaded || city === '') {
    return null
  }

  const Schedule = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Routes' component={RoutesScreen} />
        <Stack.Screen
          name='TransportScheduleDetails'
          component={TransportScheduleDetailsScreen}
        />
        <Stack.Screen
          name='ChooseCityForTransport'
          component={ChooseCityForTransportScreen}
        />
      </Stack.Navigator>
    )
  }

  const Home = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Statement' component={StatementScreen} />
        <Stack.Screen name='Appeal' component={AppealScreen} />
        <Stack.Screen name='LocationForm' component={LocationFormScreen} />
        <Stack.Screen
          name='StatementNearby'
          component={StatementsNearbyScreen}
        />
        <Stack.Screen name='Archive' component={ArchiveScreen} />
        <Stack.Screen name='Drafts' component={DraftsScreen} />
        <Stack.Screen name='Details' component={DetailsOfStatementScreen} />
        <Stack.Screen name='Question' component={QuestionsScreen} />
        <Stack.Screen name='Video' component={VideoScreen} />
      </Stack.Navigator>
    )
  }

  const Root = () => {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        backBehavior='initialRoute'
        screenOptions={{ tabBarShowLabel: false, headerShown: false }}
      >
        <Tab.Screen
          name='Schedule'
          component={Schedule}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={!focused ? schedule : scheduleActive}
                  style={{ width: 16, height: 20 }}
                />
              )
            }
          }}
        />
        <Tab.Screen
          name='MyApplications'
          component={MyAppealsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={!focused ? myApplications : myApplicationsActive}
                  style={{ width: 20, height: 20 }}
                />
              )
            }
          }}
        />
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={!focused ? home : homeActive}
                  style={{ width: 20, height: 20 }}
                />
              )
            }
          }}
        />
        <Tab.Screen
          name='TechSupport'
          component={TechSupportScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={!focused ? techSupport : techSupportActive}
                  style={{ width: 16, height: 20 }}
                />
              )
            }
          }}
        />
        <Tab.Screen
          name='Search'
          component={SearchForStatementScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={!focused ? search : searchActive}
                  style={{ width: 20, height: 20 }}
                />
              )
            }
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!city && (
          <Stack.Screen name='ChooseCity' component={ChooseCityScreen} />
        )}
        {!token && (
          <>
            <Stack.Screen
              name='ChooseAuthType'
              component={ChooseAuthTypeScreen}
            />
            {city && (
              <Stack.Screen name='ChooseCity' component={ChooseCityScreen} />
            )}
            <Stack.Screen
              name='RegistrationForm'
              component={RegistrationFormScreen}
            />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen
              name='CodeConfirmation'
              component={CodeConfirmationScreen}
            />
          </>
        )}
        <Stack.Screen name='Root' component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
