import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface SessionState {
  user: number
  card_id: number
  charger_id: number
}

export const evenergyApi = createApi({
  reducerPath: 'evenergyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_EVENERGY_BASE_URL,
  }),
  endpoints: (builder) => ({
    postChargingSession: builder.mutation<SessionState, SessionState>({
      query: (SessionState) => ({
        url: '/chargingsession',
        method: 'POST',
        body: SessionState,
      }),
    }),
  }),
})

export const { usePostChargingSessionMutation } = evenergyApi
