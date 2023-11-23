
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../utils/Config'

export const userSlice = createApi({
    reducerPath: 'userSlice',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/api/user-signup',
                    method: 'POST',
                    body: data
                }
            }
        }),
        login: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/api/login',
                    method: 'POST',
                    body: data
                }
            }
        })
    }),
})



export const { useRegisterMutation, useLoginMutation } = userSlice