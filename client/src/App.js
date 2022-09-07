import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentWeather from "./features/CurrentWeather/CurrentWeather";
import ForecastSequence from "./features/ForecastSequence/ForecastSequence";
import { fetchWeatherData } from "./store/actions/weatherActions";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData())
    }, [dispatch]);

    return (
        <>
        <div className="dashboard">
            <CurrentWeather/>
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
