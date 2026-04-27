import { SIGNIN_REQUEST, SIGNIN_RESPONSE } from "@/types/Auth";
import { APP_URL } from "@/constants/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ 
    //   baseUrl: `${APP_URL}/api/auth`,
      baseUrl: "/api/auth",
      credentials: "include" // 🔥 important for cookies
    }),

    endpoints: (builder) => {
        return {

            // 🔐 Signin
            signin: builder.mutation<SIGNIN_RESPONSE, SIGNIN_REQUEST>({
                query: userData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: userData
                    }
                },

         
            }),

            // 🔐 Signout
            signout: builder.mutation<void, void>({
                query: userData => {
                    return {
                        url: "/signout",
                        method: "POST",
                        // body: userData
                    }
                },

            }),
        
        }
    }
})

export const { 
  useSigninMutation,
  useSignoutMutation
} = authApi

