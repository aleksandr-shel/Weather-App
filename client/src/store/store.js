import {configureStore} from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';


const store = configureStore({
    reducer: {
        weatherReducer: weatherSlice.reducer
    }
})

export default store;