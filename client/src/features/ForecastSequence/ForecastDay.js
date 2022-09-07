import React from 'react';
import { Avatar } from '@mui/material';

export default function ForecastDay({day}){
    return (
        <div 
            style={{display:'flex', flexDirection:'column', textAlign:'center'}}
            >
            <span>{new Date(new Date(day.date).getTime() + new Date().getTimezoneOffset() * 60 * 1000).toLocaleString('default',{weekday:'short'})}</span>
            <Avatar style={{margin:'auto'}} alt={day?.day?.condition?.text} src={day?.day?.condition?.icon} />
            <span>
                <span>{new Number(day.day.maxtemp_c).toFixed(0)}<span>&#176;</span></span>
                {' '}
                <span>{new Number(day.day.mintemp_c).toFixed(0)}<span>&#176;</span></span>
            </span>
        </div>
    )
}