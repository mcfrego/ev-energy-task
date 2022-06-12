import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ocmApi = createApi({
  reducerPath: 'ocmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getPoi: builder.query<any, void>({
      query: () => ({ url: '/poi', headers: { 'X-API-Key': process.env.API_KEY } }),
    }),
  }),
})

export const { useGetPoiQuery } = ocmApi
