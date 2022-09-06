let express = require('express');
let router = express.Router();
let axios = require('axios')
let weatherForecastData = require('../weather_forecast.json')
const googleApiKey = "AIzaSyBnsJDfhGj4TYhZX7FqEZr0N9rPbTxr0lw";
const weatherApiKey = '4cb14a2ac1a24cfbb5172828220509';


function getWeatherData(lat, lon){
    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${lat},${lon}`
    axios(apiUrl).then(response=>{
        console.log(response.data)
    }).catch(error=>{
        console.log(error);
    })
}


//this one definetely better, it comes with the current weather too
async function getWeatherForecast(lat, lon, days=7){
    let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${lat},${lon}&days=${days}`
    let response;
    try{
        response = await axios.get(apiUrl);
    }catch(error){
        console.log(error);
    }
    return response.data;
}

async function getLocationFromGoogleByCoords(latitude, longitude){
    //This is called Reverse Geocoding
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;
    
    let response;
    try{
        response = await axios.get(url);
    }catch(error){
        console.log(error);
    }
    return response.data;
}


router.get('/weatherForecast', async (req,res)=>{
    res.send(weatherForecastData);
    
    //uncomment when ready
    // const {lat, lon} = req.query;

    // const data = await getWeatherForecast(lat, lon)
    // res.send(data)
})


module.exports = router;