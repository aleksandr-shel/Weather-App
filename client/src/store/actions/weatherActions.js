import agent from "../../api/agent"
import { setCurrentWeather, setForecast, setLoading } from "../slices/weatherSlice";



export function fetchWeatherData(){
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const data = await agent.Weather.getData();
        console.log(data.current);
        console.log(data.forecast.forecastday);
        dispatch(setCurrentWeather(data.current));
        dispatch(setForecast(data.forecast.forecastday));
        dispatch(setLoading(false))
    }
}