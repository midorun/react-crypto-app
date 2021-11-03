import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TCryptoAPiResponse } from 'services/cryptoCurrencyApi/types';

const defaultCoinsLimit = 10;
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const headers = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '8f6179286amsh75d0c7cc64297dep1b054djsn521f383298c4'
};

export const cryptoCurrencyApi = createApi({
  reducerPath: 'cryptoCurrencyApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCoins: builder.query<TCryptoAPiResponse, number | void>({
      query: (limit = defaultCoinsLimit) => ({
        url: `/coins?limit=${limit}`,
        headers: headers
      })
    })

  })
});