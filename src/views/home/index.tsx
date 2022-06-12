import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useAppDispatch, useAppSelector } from '../../../shared/redux/hooks'
import { usePostChargingSessionMutation } from '../../../shared/redux/services/evenergyApi'
import { useGetPoiQuery } from '../../../shared/redux/services/ocmApi'
import {
  homeLaunched,
  removeCurrentSession,
  setCurrentSession,
} from '../../../shared/redux/slices/app'
import { ChargingSession, GridList } from '../../components'

const Home = function () {
  const dispatch = useAppDispatch()
  const currentSession = useAppSelector((state) => state.app.currentSession)
  const { data } = useGetPoiQuery()
  const [useMutation] = usePostChargingSessionMutation()

  useEffect(() => {
    dispatch(homeLaunched())
  }, [])

  const onElementClick = (id: number, title: string) => {
    Alert.alert(`${title} selected!`, 'Are you sure? You will start immediately to charge!', [
      { text: 'Cancel', style: 'cancel', onPress: () => {} },
      {
        text: 'Start charging!',
        onPress: () => {
          useMutation({ user: 1, card_id: 1, charger_id: id })
          dispatch(setCurrentSession(id))
        },
      },
      {},
    ])
  }

  const onRemoveClick = () => dispatch(removeCurrentSession())

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ChargingSession data={currentSession} onRemove={onRemoveClick} />
        <GridList
          data={data}
          onElementClick={onElementClick}
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
