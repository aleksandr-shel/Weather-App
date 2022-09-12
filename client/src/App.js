import React from "react";
import {Grid} from '@mui/material';
import News from "./features/News/News";
import Clothes from "./features/Clothes/Clothes";
import WeatherWrapper from "./features/WeatherWrapper";

function App() {
    
    return (
        <>
            <Grid container spacing={2}>
                {/* <Grid item xs={2.5}>
                    <Clothes/>
                </Grid> */}
                <Grid item xs={9}>
                    <WeatherWrapper/>
                    <Clothes/>
                </Grid>
                <Grid item xs={3}>
                    <News/>
                </Grid>
            </Grid>
            <footer className="fixed-bottom">
                Powered by{" "}
                <a
                    href="https://www.weatherapi.com/"
                    title="Weather API"
                >
                    WeatherAPI.com
                </a>
            </footer>
        </>
    );
}

export default App;
