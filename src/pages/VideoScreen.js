import { StyleSheet, View } from 'react-native'
import { Video } from 'expo-av'

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: 'https://people-control.itguild.info/media/production%20ID_4434150.mp4'
        }}
        useNativeControls
        resizeMode='cover'
        isLooping
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    height: '100%',
    width: '100%'
  },
  video: {
    width: '100%',
    height: '100%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default VideoScreen
