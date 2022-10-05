import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// process.env.REACT_APP_SHAZAM_CORE_API
const countryCode ='US'

export const shazamCoreApi = createApi({
    reducerPath : "shazamCoreApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders : (headers) => {
            headers.set('X-RapidAPI-Key' , process.env.REACT_APP_SHAZAM_CORE_API)

            return headers
        },
    }),

    endpoints: (builder) => ({
        // getTopCharts : builder.query({query : () =>  `/charts/country?country_code=${countryCode}`})
        getTopCharts : builder.query({query : () =>  '/charts/world'})
    })
})


export const {
    useGetTopChartsQuery
} = shazamCoreApi