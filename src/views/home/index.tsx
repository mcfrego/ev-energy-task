import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { useAppDispatch } from '../../../shared/redux/hooks'
import { useGetPoiQuery } from '../../../shared/redux/services/ocmApi'
import { homeLaunched } from '../../../shared/redux/slices/app'
import { GridList } from '../../components'

const Home = function () {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetPoiQuery()

  useEffect(() => {
    dispatch(homeLaunched())
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <GridList
          data={data}
          onElementClick={() => {}}
          title="Result list:"
          style={styles.gridList}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  gridList: { marginTop: 30, width: '100%', maxWidth: 400 },
})
