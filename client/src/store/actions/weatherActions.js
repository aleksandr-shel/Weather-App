import agent from "../../api/agent"
import { setLocationCoords } from "../slices/locationSlice";
import { setCurrentWeather, setForecast, setLoading, setLocation } from "../slices/weatherSlice";




export function fetchWeatherData(){
    return async (dispatch)=>{
        dispatch(setLoading(true));

        const location = await agent.Location.getLocation();

        // const data = await agent.Weather.getCurrentLocationData();
        const data = await agent.Weather.getAnotherLocationData(location.results[0].formatted_address);
        console.log('loaded data')
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
        console.log('loaded data')
        if (data !== ''){
            dispatch(setCurrentWeather(data.current));
            dispatch(setForecast(data.forecast.forecastday));
            dispatch(setLocation(data.location))
        }
        dispatch(setLoading(false))
    }
}