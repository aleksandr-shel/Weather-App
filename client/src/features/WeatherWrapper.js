import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect} from 'react';
import { fetchWeatherData } from '../store/actions/weatherActions';
import { Box, CircularProgress } from '@mui/material';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SelectedDayGraph from './SelectedDay/SelectedDayGraph';
import ForecastSequence from './ForecastSequence/ForecastSequence';
import Clothes from './Clothes/Clothes';


export default function WeatherWrapper(){
    const dispatch = useDispatch();
    const {loading} = useSelector(state=> state.weatherReducer);
    useEffect(() => {
        dispatch(fetchWeatherData())
    }, [dispatch]);


    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
            <CircularProgress />
        </Box>
    )

    return(
        <div className="weather-wrapper">
            <CurrentWeather/>
            {/* <Clothes/> */}
            <SelectedDayGraph/>
            <ForecastSequence/>
        </div>
    )
}