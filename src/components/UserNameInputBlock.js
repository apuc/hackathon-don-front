import { StyleSheet, View, Text, TextInput, Switch } from 'react-native'

const UserNameInputBlock = ({ fio, setFio, hideFio, setHideFio }) => {
  return (
    <>
      <View style={styles.introduce}>
        <Text style={styles.introduceText}>Представьтесь, пожалуйста</Text>
        <View style={styles.switch}>
          <Text style={styles.introduceText}>Не отображать ФИО</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#fafafa' }}
            thumbColor={hideFio ? '#ff553f' : '#fafafa'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={() => setHideFio((value) => !value)}
            value={hideFio}
            style={styles.checkbox}
          />
        </View>
      </View>
      <TextInput
        style={styles.nameInput}
        value={fio}
        onChangeText={(value) => setFio(value)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  introduce: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  introduceText: {
    fontSize: 10,
    color: '#132742'
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    marginLeft: 14
  },
  nameInput: {
    borderWidth: 0.3,
    borderColor: '#CACACA',
    height: 35,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 10
  }
})

export default UserNameInputBlock
