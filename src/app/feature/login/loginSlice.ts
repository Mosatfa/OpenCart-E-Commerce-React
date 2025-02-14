import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserLogin, IUserResponse } from '../../../interfaces';

// تعريف API لخدمة تسجيل الدخول
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/auth/' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<IUserResponse,IUserLogin>({
      query: (userData) => ({
        url: 'login',
        method: 'POST',
        body: userData,        
      }),
    }),
  }),
});

// providerTags , invalidtags => caching
export const { useLoginUserMutation } = loginApi;
