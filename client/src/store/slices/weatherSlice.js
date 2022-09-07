import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: {},
    forecast: [],
    selectedDay: null,
    loading: false,
    isCelsius: true,
}


const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers: {
        setCurrentWeather: (state, {payload})=>{
            state.current = payload;
        },
        setForecast: (state, {payload})=>{
            state.forecast = payload;
        },
        setLoading: (state, {payload})=>{
            state.loading = payload;
        }
    }
})


export const {setCurrentWeather, setForecast, setLoading} = weatherSlice.actions

export default weatherSlice;