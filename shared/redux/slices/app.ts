import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ApplicationState } from '../types'

const initialState: ApplicationState = {
  isLoading: true,
  currentSession: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    homeLaunched(state) {
      state.isLoading = false
    },
    setCurrentSession(state, action: PayloadAction<number>) {
      state.currentSession = action.payload
    },
    removeCurrentSession(state) {
      state.currentSession = null
    },
  },
})

export const { homeLaunched, setCurrentSession, removeCurrentSession } = appSlice.actions
