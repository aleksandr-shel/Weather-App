import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // lat: 43.8152522,
    // lon: -79.2845772
    // lat: 55.751244,
    // lon: 37.618423
    lat: 0,
    lon: 0
}

const locationSlice = createSlice({
    name:'location',
    initialState,
    reducers:{
        setLocationCoords:(state, {payload:{lat, lon}})=>{
            state.lat = lat;
            state.lon = lon;
        }
    }
})

export const {setLocationCoords} = locationSlice.actions;

export default locationSlice;