import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import burger from '../../assets/icons/main/burger.png'
import ball from '../../assets/icons/main/ball.png'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserPane = () => {
  const navigation = useNavigation()

  const [fio, setFio] = useState('')

  useEffect(() => {
    const getUserName = async () => {
      const userData = await AsyncStorage.getItem('userProfile')
      setFio(JSON.parse(userData)?.fio || 'Анонимно')
    }

    getUserName()
  }, [])
  
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.userName}
        onPress={() => navigation.navigate('Appeal')}
      >
        <Image source={burger} style={{ width: 24, height: 17 }} />
        <Text style={styles.userText}>{fio}</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('MyApplications')}>
        <Image source={ball} style={{ width: 34, height: 37 }} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userText: {
    marginLeft: '15%',
    color: '#132742',
    fontSize: 13
  }
})

export default UserPane
