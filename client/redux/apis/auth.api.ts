import { SIGNIN_REQUEST, SIGNIN_RESPONSE } from "@/types/Auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { removeStorage } from "../utils/authStorage";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5500",
    credentials: "include" // 🔥 important for cookies
  }),

  endpoints: (builder) => ({

    // 🔐 Signin
    signin: builder.mutation<SIGNIN_RESPONSE, SIGNIN_REQUEST>({
      query: (userData) => ({
        url: "/admin",
        method: "POST",
        body: userData
      })
    }),

    // 🔓 Admin Signout
    signoutAdmin: builder.mutation<void, void>({
      query: () => ({
        url: "/admin/signout", // POST /admin/signout
        method: "POST",
      }),
      transformResponse: () => {
        removeStorage("admin"); // clear localStorage/session if used
      },
    }),

  })
});

export const { 
    useSigninMutation,
    useSignoutAdminMutation,
} = authApi
