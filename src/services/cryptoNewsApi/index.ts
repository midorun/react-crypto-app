import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const defaultNewsLimit = 100;
const baseUrl = '\'https://bing-news-search1.p.rapidapi.com/news/search';
const headers = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '8f6179286amsh75d0c7cc64297dep1b054djsn521f383298c4'
};

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getNews: (limit = defaultNewsLimit) => ({
      url: '/'
      h
    })
  })
});