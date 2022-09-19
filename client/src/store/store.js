import {configureStore} from '@reduxjs/toolkit';
import locationSlice from './slices/locationSlice';
import newsSlice from './slices/newsSlice';
import weatherSlice from './slices/weatherSlice';


const store = configureStore({
    reducer: {
        weatherReducer: weatherSlice.reducer,
        newsReducer: newsSlice.reducer,
        locationReducer: locationSlice.reducer
    }
})

export default store;