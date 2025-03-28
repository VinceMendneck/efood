import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantById: builder.query<Restaurants, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
