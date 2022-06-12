import { configureStore } from '@reduxjs/toolkit'

import { ocmApi } from '../services/ocmApi'
import { appSlice } from '../slices/app'

let additionalMiddlewares = new Array()
if (__DEV__) {
  const logger = require('redux-logger')
  const loggerMiddleware = logger.createLogger({
    duration: true,
  })
  additionalMiddlewares = [loggerMiddleware]
}

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [ocmApi.reducerPath]: ocmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ocmApi.middleware)
      .concat(...additionalMiddlewares),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
