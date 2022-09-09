import React from 'react';
import { useSelector } from 'react-redux';
import ForecastDay from './ForecastDay';

export default function ForecastSequence(){

    const {forecast, selectedDay} = useSelector(state => state.weatherReducer);

    return (
        <div className="days-sequence-wrapper">
            <ul className="days-sequence">
                {forecast.map((day, index)=>(
                    <li key={index} style={{backgroundColor: selectedDay === day ? 'gainsboro':''}}>
                        <ForecastDay day={day}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}