import React from 'react';
import { useSelector } from 'react-redux';
import {Avatar, Card, Button, CardContent, CardActions, Typography} from '@mui/material'

export default function CurrentWeather(){
    let iconSize = 4;
    const {current} = useSelector(state => state.weatherReducer);

    return(
        <div className='current-weather'>
            <Card>
                <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <Avatar alt={current?.condition?.text} sx={{ width: `${iconSize}em`, height: `${iconSize}em`}} src={current?.condition?.icon} />
                    <h2>{new Number(current.temp_c).toFixed(0)}<span>&#176;</span></h2>
                </div>
            </Card>
        </div>
    )
}