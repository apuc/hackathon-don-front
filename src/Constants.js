import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const url = 'https://people-control.itguild.info/api/v1/'

axios.defaults.baseURL = url

axios.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      if (await AsyncStorage.getItem('token')) {
        const token = await AsyncStorage.getItem('token')

        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

export const initialRegion = {
  latitude: 48.016974,
  longitude: 37.811276,
  latitudeDelta: 0.0122,
  longitudeDelta: 0.0121
}

import roadCondition from '../assets/icons/appeal/roadCondition.png'
import landscaping from '../assets/icons/appeal/landscaping.png'
import communications from '../assets/icons/appeal/communications.png'
import buildings from '../assets/icons/appeal/buildings.png'
import garbage from '../assets/icons/appeal/garbage.png'
import animals from '../assets/icons/appeal/animals.png'
import lowQualityGoods from '../assets/icons/appeal/lowQualityGoods.png'
import naturalDisasters from '../assets/icons/appeal/naturalDisasters.png'
import vandalism from '../assets/icons/appeal/vandalism.png'
import laborСode from '../assets/icons/appeal/labor.png'
import criminal from '../assets/icons/appeal/criminal.png'
import trafficRegulations from '../assets/icons/appeal/trafficRegulations.png'

export const categories = [
  {
    id: '1',
    title: 'Состояние дорог и прилегающих территорий',
    icon: roadCondition
  },
  { id: '2', title: 'Состояние благоустройства города', icon: landscaping },
  {
    id: '3',
    title: 'Прорывы водо- тепло- коммуникаций, обрывы электро коммуникаций',
    icon: communications
  },
  { id: '4', title: 'Постройки в аварийном состоянии', icon: buildings },
  { id: '5', title: 'Уборка территории и вывоз отходов', icon: garbage },
  { id: '6', title: 'Скопление животных', icon: animals },
  { id: '7', title: 'Некачественные товары', icon: lowQualityGoods },
  { id: '8', title: 'Последствия стихийных бедствий', icon: naturalDisasters },
  { id: '9', title: 'Проявления вандализма', icon: vandalism },
  { id: '10', title: 'Нарушение КЗОТ', icon: laborСode },
  { id: '11', title: 'Скопление криминальных элементов', icon: criminal },
  { id: '12', title: 'Нарушение ПДД', icon: trafficRegulations }
]

export const cities = [
  'Донецк',
  'Макеевка',
  'Ясиноватая',
  'Шахтерск',
  'Докучаевск',
  'Мариуполь',
  'Волноваха'
]

export const waypoints = {
  directRoute: [
    'ДС "Микрорайон Широкий"',
    'ул. Генерала Максима Козыря',
    'ул. Шутова - Ленинский проспект',
    'Одесская улица - улица Пухова',
    'ул. Ивана Ткаченко',
    'пр-ктЛенинский',
    'ул. Университетская',
    'пр-кт Гурова',
    'ул. Университетская',
    'ул. Артёма',
    'Железнодорожный вокзал'
  ],
  backRoute: [
    'Железнодорожный вокзал',
    'Киевский район',
    'ул. Артёма',
    'ул. Университетская',
    'площадь Коммунаров',
    'пр-кт Ленинский',
    'ул. Ивана Ткаченко',
    'ул. Пухова',
    'ул. Одесская',
    'пр-кт Ленинский',
    'ул. Шутова',
    'Кировский район',
    'ул. Генерала Максима Козыря',
    'ДС "Микрорайон Широкий"'
  ]
}

export const routes = [37, 23, 10, 17, 28, 14, 8, 25]
