import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8f6179286amsh75d0c7cc64297dep1b054djsn521f383298c4'
  }

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => ({
        url: '/coins',
        headers: headers
      })
    })
  })
})