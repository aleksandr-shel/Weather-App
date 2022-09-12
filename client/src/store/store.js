import {configureStore} from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import weatherSlice from './slices/weatherSlice';


const store = configureStore({
    reducer: {
        weatherReducer: weatherSlice.reducer,
        newsReducer: newsSlice.reducer
    }
})

export default store;