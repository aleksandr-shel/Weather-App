import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Chart} from 'react-charts';
import {Stack, Box, Typography, Divider} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function SelectedDayGraph(){

    const {selectedDay, isCelsius} = useSelector(state => state.weatherReducer);

    const states = [
        'Temperature',
        'Precipitation',
        'Wind',
    ]

    const [graphState, setGraphState] = useState(states[0]);

    const data = [
        {
          label: 'React Charts',
          data: selectedDay.hour,
        },
      ]
    const primaryAxis = React.useMemo(
        () => ({
            getValue: d => new Date(d.time).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit', hour12:true}),
        }),
        []
    )
    
    const secondaryAxes = React.useMemo(
        ()=> [
            {
                getValue: d =>{
                    switch(graphState){
                        case states[0]:
                            return isCelsius ? d.temp_c : d.temp_f;
                        case states[1]:
                            return d.chance_of_rain || d.chance_of_snow;
                        // case states[2]:
                        //     return d.wind_kph;
                        default:
                            return isCelsius ? d.temp_c : d.temp_f
                    }
              },
              stacked: true,
            },
        ],
        [isCelsius, graphState]
    )

    return (
        <div className='selected-day-graph'>
            <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                {states.map((state,i)=>(
                    <Box key={i} style={{borderBottom: graphState === state ? 'solid 1px orange' : '', cursor:'pointer'}} onClick={()=>setGraphState(state)}>
                        {state}
                    </Box>
                ))}
            </Stack>
            {graphState === states[2] ? 
                <Stack direction='row' style={{height:'100%', display:'flex', justifyContent:'space-evenly'}}>
                    {selectedDay.hour.map((day, i)=>{
                        if (i % 3 === 0){
                            return (
                            <Box sx={{height:'100%', display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                <Box>{day.wind_kph} kph</Box>
                                <Box style={{rotate:`${day.wind_degree}deg`}}>
                                    <ArrowUpwardIcon fontSize='large'/>
                                </Box>
                                <Box>
                                    {new Date(day.time).toLocaleTimeString([],{hour:'numeric', hour12:true})}
                                </Box>
                            </Box>
                            )
                        }
                    })}
                </Stack>
                :
                <Chart
                    options={{
                            data,
                            primaryAxis,
                            secondaryAxes,
                            tooltip: false
                        }}
                    />
            }
        </div>
    )
}