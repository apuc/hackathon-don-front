import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import HeaderMain from '../components/MainScreen/HeaderMain'
import UserNameBlock from '../components/MainScreen/UserNameBlock'
import Statement from '../components/StatementNearbyScreen/Statement'

const MyAppealsScreen = () => {
  const [statements, setStatements] = useState([])

  useEffect(() => {
    const getApplications = async () => {
      const userId = await AsyncStorage.getItem('userId')
      if (userId) {
        await axios
          .get(`petition/show-by-user/${userId}`)
          .then(async (res) => {
            setStatements(res.data.data)
          })
          .catch((err) => {
            console.warn(err)
          })
      }
    }

    getApplications()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderMain />
        <UserNameBlock />
        <View style={styles.content}>
          <Text style={styles.titleText}>Мои обращения</Text>
          <View style={styles.statementContainer}>
            {statements.map((item, index) => {
              return <Statement data={item} key={index} />
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20
  },
  titleText: {
    marginTop: 17
  },
  statementContainer: {
    marginTop: 20
  },
  loadMoreContainer: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center'
  },
  loadButton: {
    width: 90
  },
  buttonText: {
    fontSize: 13,
    color: '#132742',
    textDecorationLine: 'underline'
  }
})

export default MyAppealsScreen
