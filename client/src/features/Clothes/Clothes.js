import React from "react";
import { useSelector } from 'react-redux';


export default function Clothes(){

    const {current, loading, forecast} = useSelector(state => state.weatherReducer);


    function suggestBasedOnTemperature(temp){

    }
    console.log('current', current);
    console.log('forecast[0]', forecast[0])

    if (loading) return null;

    return(
        <div className='clothes-recomendation'>
            Clothes Recomendations
        </div>
    )
}