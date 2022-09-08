import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Avatar, Card, Button, CardContent, CardActions, Typography, Divider} from '@mui/material'
import { setCelsius, setFahrenheit } from '../../store/slices/weatherSlice';

export default function CurrentWeather(){
    let iconSize = 4;
    const {current, isCelsius} = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();

    function setCelsiusDegree(){
        dispatch(setCelsius());
    }

    function setFahrenheitDegree(){
        dispatch(setFahrenheit());
    }

    return(
        <div className='current-weather'>
            <Card style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <Avatar alt={current?.condition?.text} sx={{ width: `${iconSize}em`, height: `${iconSize}em`}} src={current?.condition?.icon} />
                    {
                        isCelsius ?
                        <h2>{new Number(current.temp_c).toFixed(0)}<span>&#176;</span></h2>
                        :
                        <h2>{new Number(current.temp_f).toFixed(0)}<span>&#176;</span></h2>
                    }
                    <div style={{height:'100%'}}>
                        <span className='degrees' onClick={setCelsiusDegree} style={{padding:'0.5em'}}>
                            &#8451;
                        </span>
                        <span>{'|'}</span>
                        <span className='degrees' onClick={setFahrenheitDegree} style={{padding:'0.5em'}}>
                            &#8457;
                        </span>
                    </div>
                    <div style={{fontSize:'small', marginLeft:'1em'}}>
                        <p>Humidity: {current.humidity}%</p>
                        <p>Wind: {current.wind_kph} KPH</p>
                    </div>
                </div>
                <div style={{fontWeight:'lighter', display:'flex',justifyContent:'center', alignContent:'center',flexDirection:'column', marginRight:'1em', textAlign:'center'}}>
                    <p>
                        <span>{new Date(new Date(current.last_updated).getTime() + new Date().getTimezoneOffset() * 60 * 1000).toLocaleString('default',{weekday:'short'})}</span>
                        {' '}
                        <span>{new Date(current.last_updated).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit', hour12:true})}</span>
                    </p>
                    <p>
                        {current?.condition?.text}
                    </p>
                </div>
            </Card>
        </div>
    )
}