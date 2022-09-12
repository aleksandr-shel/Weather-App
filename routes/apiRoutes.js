let express = require('express');
let router = express.Router();
let axios = require('axios');
let fs = require('fs');

const weatherForecastData = require('../weather_forecast.json')
const newsDataTest = require('../news_data_test.json')
const newsData = require('../news_data.json')
require('dotenv').config();
const googleApiKey = process.env.GOOGLE_API_KEY;
const weatherApiKey = process.env.WEATHER_API_KEY;
const newsApiKey = process.env.NEWS_API_KEY;

function getWeatherData(lat, lon){
    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${lat},${lon}`
    axios(apiUrl).then(response=>{
        console.log(response.data)
    }).catch(error=>{
        console.log(error);
    })
}

async function getData(url){
    let response;
    try{
        response = await axios.get(url);
    }catch(error){
        console.log(error);
    }
    return response.data;
}


//this one definetely better, it comes with the current weather too
async function getWeatherForecast(lat, lon, days=7){
    let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${lat},${lon}&days=${days}`
    return await getData(apiUrl);
}

async function getLocationFromGoogleByCoords(latitude, longitude){
    //This is called Reverse Geocoding
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`;
    return await getData(url);
}

async function getNews(q = 'technology'){
    const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${newsApiKey}&sortBy=publishedAt`;
    return await getData(url);
}

async function getDummyData(){
    const url = 'https://dummyjson.com/products/1';
    return await getData(url);
}
function saveJson(json, jsonFileName){
    fs.writeFile(jsonFileName, JSON.stringify(json), 'utf8', ()=>{console.log('updated news_data.json')})
}

setInterval(async () => {
    // const data = await getDummyData();
    // saveJson(data, 'test.json');

    const data = await getNews();
    saveJson(data, 'news_data.json');
}, 60*60*1000);


router.get('/weatherForecast', async (req,res)=>{
    res.send(weatherForecastData);
    
    //uncomment when ready
    // const {lat, lon} = req.query;

    // const data = await getWeatherForecast(lat, lon)
    // res.send(data)
})


router.get('/tech-news', async(req,res)=>{
    res.send(newsData);

    //do no uncomment!!
    // const data = await getNews();
    // res.send(data);
})

router.get('/location', async(req,res)=>{
    const {lat, lon} = req.query;
    const data = await getLocationFromGoogleByCoords(lat, lon)
    res.send(data)
})


router.get('/test', async(req,res)=>{

})

module.exports = router;