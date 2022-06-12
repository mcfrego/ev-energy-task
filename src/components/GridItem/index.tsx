import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export interface Props {
  data: any
  onElementClick: (id: number) => void
}

const GridItem = function ({ data, onElementClick }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onElementClick(data.ID)}>
      <View>
        <Text style={styles.title}>{data.OperatorInfo.Title}</Text>
        <Text
          style={
            styles.subtitle
          }>{`${data.AddressInfo.Town} - ${data.AddressInfo.StateOrProvince}`}</Text>
      </View>
      <Text style={styles.text}>{`ID: ${data.ID}`}</Text>
    </TouchableOpacity>
  )
}

export default GridItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    width: '48%',
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: { fontSize: 20, marginBottom: 4, textDecorationLine: 'underline' },
  subtitle: { fontSize: 14 },
  text: { fontSize: 10, fontStyle: 'italic' },
})
