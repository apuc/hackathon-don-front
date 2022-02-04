import { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native'
import axios from 'axios'

import HeaderMain from '../components/MainScreen/HeaderMain'
import UserNameBlock from '../components/MainScreen/UserNameBlock'
import ReferenceToMain from '../components/ReferenceToMain'
import CategoryItem from '../components/AppealScreen/CategoryItem'
import StepsThreePosition from '../components/StepsTreePosition'
import Loader from '../components/Loader'

import { categories } from '../Constants'

const AppealScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get('categories')
        .then(async (res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => setIsLoading(false))
    }

    getCategories()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderMain />
        <UserNameBlock />
        <View style={styles.content}>
          <ReferenceToMain />
          <View style={styles.mainTextBlock}>
            <Text style={styles.mainText}>
              Для создания или поиска заявки - выберите нужную категорию
              обращения
            </Text>
          </View>
          <StepsThreePosition />
          <Text style={styles.title}>Категория обращения</Text>
          <View style={styles.categories}>
            {categories.map((item, index) => {
              return (
                <CategoryItem
                  key={index}
                  title={item.title}
                  handler={() =>
                    navigation.navigate('LocationForm', { category: index + 1 })
                  }
                  icon={item.icon}
                />
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
    backgroundColor: '#E5E5E5',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  content: {
    paddingHorizontal: 20
  },
  mainTextBlock: {
    alignItems: 'center'
  },
  mainText: {
    width: '77%',
    textAlign: 'center',
    color: '#132742',
    fontSize: 12,
    lineHeight: 15
  },
  title: {
    color: '#132742',
    fontSize: 18
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 19
  }
})

export default AppealScreen
