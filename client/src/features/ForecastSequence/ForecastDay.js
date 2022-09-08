import React from 'react';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDay } from '../../store/slices/weatherSlice';

export default function ForecastDay({day}){

    const {isCelsius} = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch();
    function selectDay(){
        dispatch(setSelectedDay(day))
    }

    return (
        <div 
            style={{display:'flex', flexDirection:'column', textAlign:'center'}}
            onClick={selectDay}
            >
            <span>{new Date(new Date(day.date).getTime() + new Date().getTimezoneOffset() * 60 * 1000).toLocaleString('default',{weekday:'short'})}</span>
            <Avatar style={{margin:'auto'}} alt={day?.day?.condition?.text} src={day?.day?.condition?.icon} />
            
            {
                isCelsius ? 
                <span>
                    <span>{new Number(day.day.maxtemp_c).toFixed(0)}<span>&#176;</span></span>
                    {' '}
                    <span>{new Number(day.day.mintemp_c).toFixed(0)}<span>&#176;</span></span>
                </span>
                :
                <span>
                    <span>{new Number(day.day.maxtemp_f).toFixed(0)}<span>&#176;</span></span>
                    {' '}
                    <span>{new Number(day.day.mintemp_f).toFixed(0)}<span>&#176;</span></span>
                </span>
            }
        </div>
    )
}