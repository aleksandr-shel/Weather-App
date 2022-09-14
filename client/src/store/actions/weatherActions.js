import agent from "../../api/agent"
import { setCurrentWeather, setForecast, setLoading, setLocation } from "../slices/weatherSlice";



export function fetchWeatherData(){
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const data = await agent.Weather.getCurrentLocationData();
        // console.log(data);
        dispatch(setCurrentWeather(data.current));
        dispatch(setForecast(data.forecast.forecastday));
        dispatch(setLocation(data.location))
        dispatch(setLoading(false))
    }
}


export function fetchAnotherLocationWeatherData(q){
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const data = await agent.Weather.getAnotherLocationData(q);
        // console.log(data);
        dispatch(setCurrentWeather(data.current));
        dispatch(setForecast(data.forecast.forecastday));
        dispatch(setLocation(data.location))
        dispatch(setLoading(false))
    }
}