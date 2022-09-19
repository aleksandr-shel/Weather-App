import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { useEffect} from 'react';
import { fetchWeatherData } from '../store/actions/weatherActions';
import { Box, CircularProgress } from '@mui/material';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SelectedDayGraph from './SelectedDay/SelectedDayGraph';
import ForecastSequence from './ForecastSequence/ForecastSequence';
import {setLocationCoords} from '../store/slices/locationSlice'

export default function WeatherWrapper(){
    const dispatch = useDispatch();
    const {loading} = useSelector(state=> state.weatherReducer);
    const {lat, lon} = useSelector(state => state.locationReducer);
    useEffect(() => {
        if (lat && lon){
            dispatch(fetchWeatherData());
        }
    }, [dispatch, lat, lon]);

    useEffect(() => {
        getLocationCoords();
    }, [getLocationCoords]);
    function getLocationCoords(){
        if (!navigator.geolocation){
            console.log('Browser does not support geolocation')
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError)
        }
    }

    // handle success case
    const onSuccess = (position) => {
        const {
            latitude,
            longitude
        } = position.coords;

        // console.log(`Your location: (${latitude},${longitude})`);
        dispatch(setLocationCoords({lat:latitude, lon: longitude}))
    }

    // handle error case
    const onError = () => {
        console.log(`Failed to get your location!`);
    }

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