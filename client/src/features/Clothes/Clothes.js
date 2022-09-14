import React from "react";
import { useSelector } from 'react-redux';


export default function Clothes(){

    const {current, loading, forecast} = useSelector(state => state.weatherReducer);


    function recommendBasedOnTemperature(temp){
        if (temp < -20){
            return "Better not go outside if you don't really need to. But if you have to then put on your warmest jacket."
        } else if (temp >= -20 && temp < -10){
            return "-20,-10"
        } else if (temp >= -10 && temp < 0){
            return "-10,0"
        } else if (temp >= 0 && temp < 10){
            return "0,10"
        } else if (temp >= 10 && temp < 20){
            return "10,20"
        } else if (temp >= 20 && temp < 30){
            return "20,30"
        } else if (temp >= 30){
            return "Better not go outside if you don't really need to. But if you have to then take some water with you, you will need it."
        } 
    }
    // console.log('current', current);
    // console.log('forecast[0]', forecast[0])

    if (loading) return null;

    return(
        <div className='clothes-recomendation'>
            <h3>Recommendations</h3>
            {recommendBasedOnTemperature(current.temp_c)}
        </div>
    )
}