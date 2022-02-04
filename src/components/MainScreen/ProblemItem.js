import { useNavigation } from '@react-navigation/native'
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable
} from 'react-native'

const ProblemItem = ({ image, imageSmall, title }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Video')}
    >
      <ImageBackground
        resizeMode='contain'
        source={image}
        style={styles.background}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.mask}>
          <Image source={imageSmall} style={{ width: 30, height: 30 }} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 160,
    marginRight: 8,
    borderRadius: 8
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  mask: {
    flexDirection: 'row',
    height: 47,
    backgroundColor: '#363636',
    opacity: 0.7,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  text: {
    width: '70%',
    color: '#FFFFFF',
    fontSize: 9.5,
    paddingLeft: 5
  }
})

export default ProblemItem
