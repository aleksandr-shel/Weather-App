import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import agent from "./api/agent";
import CurrentWeather from "./features/CurrentWeather/CurrentWeather";
import ForecastSequence from "./features/ForecastSequence/ForecastSequence";
import SelectedDayGraph from "./features/SelectedDay/SelectedDayGraph";
import { fetchWeatherData } from "./store/actions/weatherActions";
import {CircularProgress, Box} from '@mui/material';

function App() {

    const dispatch = useDispatch();
    const {loading} = useSelector(state=> state.weatherReducer);
    useEffect(() => {
        dispatch(fetchWeatherData())
    }, [dispatch, agent]);


    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
            <CircularProgress />
        </Box>
    )

    
    return (
        <>
            <div className="dashboard">
                <CurrentWeather/>
                <SelectedDayGraph/>
                <ForecastSequence/>
            </div>

            <footer className="fixed-bottom">
                Powered by{" "}
                <a
                href="https://www.weatherapi.com/"
                target="_blank"
                title="Weather API"
                >
                    WeatherAPI.com
                </a>
            </footer>
        </>
    );
}

export default App;
