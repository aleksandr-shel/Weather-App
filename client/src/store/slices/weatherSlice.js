import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: {},
    forecast: [],
    selectedDay: null,
    loading: true,
    isCelsius: true
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
            state.selectedDay = payload[0];
        },
        setLoading: (state, {payload})=>{
            state.loading = payload;
        },
        setCelsius:(state)=>{
            state.isCelsius = true;
        },
        setFahrenheit:(state) =>{
            state.isCelsius = false;
        },
        setSelectedDay:(state, {payload})=>{
            state.selectedDay = payload;
        }
    }
})


export const {setCurrentWeather, setForecast, setLoading, setCelsius, setFahrenheit, setSelectedDay} = weatherSlice.actions

export default weatherSlice;