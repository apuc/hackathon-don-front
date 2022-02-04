import { useState, useEffect } from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import ReferenceToMain from '../components/ReferenceToMain'
import HeaderStatement from '../components/StatementScreen/HeaderStatement'
import DateofProblemBlock from '../components/DataOfProblemBlock'
import LocationBlock from '../components/LocationBlock'
import Map from '../components/LocationFormScreen/Map'
import Loader from '../components/Loader'

import img from '../../assets/img/DetailsScreen/img1.png'
import videoFile from '../../assets/img/DetailsScreen/video.png'
import landscaping from '../../assets/icons/appeal/landscaping.png'
import photo from '../../assets/icons/statement/add-photo.png'
import video from '../../assets/icons/statement/add-video.png'

const DetailsOfStatementScreen = ({ route }) => {
  const [fio, setFio] = useState('')
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getApplicationInfo = async () => {
      if (data?.id) {
        setIsLoading(true)
        await axios
          .get(`petition/show/${data?.id}`)
          .then(async (res) => {
            console.log(res.data.data)
          })
          .catch((err) => {
            console.warn(err)
          })
          .finally(() => setIsLoading(false))
      }
    }

    const getUserName = async () => {
      const userData = await AsyncStorage.getItem('userProfile')
      setFio(JSON.parse(userData)?.fio || 'Анонимно')
    }

    getApplicationInfo()
    getUserName()

    setData(route?.params?.data)
    console.log(route?.params?.data)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <SafeAreaView>
      <HeaderStatement />
      <ScrollView style={styles.container}>
        <ReferenceToMain />
        <Text style={styles.mainTitle}>
          {data?.incident_category[0]?.mnemonic_name ||
            'Порыв воды в подвале жилого дома, уже 2 недели. Киевский район'}
        </Text>
        <View style={styles.lineContainer}>
          <View style={styles.redLine}></View>
        </View>
        <View style={styles.descriptionBlock}>
          <Image source={img} />
          <View style={styles.rightDescriptionBlock}>
            <Text style={styles.descriptionText}>
              {data?.description ||
                'Вот прямо сейчас я провисела на телефоне вашей горячей линии больше часа и звонок просто отбился, когда я была уже 45-я в очереди.'}
            </Text>
            <View style={styles.infoBlock}>
              <View style={styles.categoriesBlock}>
                <Image source={landscaping} style={{ width: 29, height: 25 }} />
                <Text style={styles.categoriesTitle}>
                  {data?.incident_category[0]?.title ||
                    'Состояние благоустройства города'}
                </Text>
              </View>
              <DateofProblemBlock />
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <LocationBlock
          eventLocation={data?.address}
          userAddress={data?.address?.explanation}
        />
        {parseFloat(data?.address?.latitude) &&
        parseFloat(data?.address?.longitude) ? (
          <Map
            eventLocation={{
              latitude: parseFloat(data?.address?.latitude),
              longitude: parseFloat(data?.address?.longitude)
            }}
          />
        ) : null}
        <Text style={styles.someText}>Заявку оставил</Text>
        <Text>{fio || 'Иванов Иван Иванович'}</Text>
        <View style={styles.mediaContainer}>
          <View style={styles.blocks}>
            <View style={styles.titleBlock}>
              <Image source={photo} style={{ width: 23, height: 20 }} />
              <Text style={styles.titleText}>В заявке присутствуют фото</Text>
            </View>
            <View style={styles.photoBlock}>
              <Image source={img} style={styles.img} />
              <Image source={img} style={styles.img} />
              <Image source={img} style={styles.img} />
              <Image source={img} style={styles.img} />
            </View>
          </View>
          <View style={styles.blocks}>
            <View style={styles.titleBlock}>
              <Image source={video} style={{ width: 24, height: 20 }} />
              <Text style={styles.titleText}>В заявке присутствует видео</Text>
            </View>
            <View style={styles.videoBlock}>
              <Image source={videoFile} style={{ width: '100%' }} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 80
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#132742'
  },
  lineContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  redLine: {
    width: '40%',
    height: 2,
    backgroundColor: '#FF5F4A'
  },
  descriptionBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightDescriptionBlock: {
    marginTop: 10,
    width: '73%'
  },
  descriptionText: {
    fontSize: 13,
    color: '#132742'
  },
  infoBlock: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoriesBlock: {
    marginRight: 20,
    width: '40%',
    flexDirection: 'row'
  },
  categoriesTitle: {
    marginLeft: 10,
    color: '#132742',
    fontSize: 9
  },
  line: {
    height: 1,
    backgroundColor: '#F6F6F6'
  },
  someText: {
    marginTop: 20,
    color: '#132742',
    fontSize: 8
  },
  mediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10
  },
  titleBlock: {
    flexDirection: 'row'
  },
  blocks: {
    width: '48%'
  },
  titleText: {
    marginLeft: 5,
    color: '#132742',
    fontSize: 9
  },
  photoBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20
  },
  img: {
    marginBottom: 10
  },
  videoBlock: {
    marginTop: 20
  }
})

export default DetailsOfStatementScreen
