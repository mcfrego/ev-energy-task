import { createSlice } from '@reduxjs/toolkit'

import { ApplicationState } from '../types'

const initialState: ApplicationState = {
  isLoading: true,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    homeLaunched(state) {
      state.isLoading = false
    },
  },
})

export const { homeLaunched } = appSlice.actions
