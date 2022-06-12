import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useAppDispatch } from '../../../shared/redux/hooks'
import { useGetPoiQuery } from '../../../shared/redux/services/ocmApi'
import { homeLaunched } from '../../../shared/redux/slices/app'

const Home = function () {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetPoiQuery()

  useEffect(() => {
    dispatch(homeLaunched())
  }, [])

  return (
    <View style={styles.container}>
      {data?.map((item) => (
        <Text>{`${item.AddressInfo.Latitude} ${item.AddressInfo.Longitude}`}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
