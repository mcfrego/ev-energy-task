import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export interface Props {
  data: number | null
  onRemove: () => void
}

const ChargingSession = function ({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>
          {data ? (
            <>
              <Text style={styles.bold}>Active session: </Text>
              {data}
            </>
          ) : (
            <Text style={styles.text}>You have no charging session!</Text>
          )}
        </Text>
      </View>
      {data && (
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text>Remove it!</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default ChargingSession

const styles = StyleSheet.create({
  container: { width: '80%', height: 100, alignItems: 'center' },
  info: {
    backgroundColor: 'lightslategrey',
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: { color: 'white' },
  bold: { fontWeight: '600', fontSize: 20 },
  button: { alignSelf: 'flex-end', marginVertical: 10 },
})
