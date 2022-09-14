import axios from 'axios';

class Coords{
    latitude;
    longitude;
    constructor(){
        //Toronto coordinates
        this.latitude= 43.8152522
        this.longitude = -79.2845772

        //Moscow
        // this.latitude = 55.751244
        // this.longitude = 37.618423
        // getLocationCoords()
    }

    //get location
    getLocationCoords(){
        if (!navigator.geolocation){
            console.log('Browser does not support geolocation')
        } else {
            navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)
        }
    }

    // handle success case
    onSuccess = (position) => {
        const {
            latitude,
            longitude
        } = position.coords;

        // console.log(`Your location: (${latitude},${longitude})`);
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // handle error case
    onError() {
        console.log(`Failed to get your location!`);
    }
}

const coord = new Coords();
coord.getLocationCoords();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = response =>{
    return response.data;
}

const requests = {
    get: (url)=> axios.get(url).then(responseBody),
    post: (url, body)=> axios.post(url, body).then(responseBody),
    put: (url, body)=> axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody)
}

const Weather = {
    getCurrentLocationData: ()=> requests.get(`/weatherForecast?lat=${coord.latitude}&lon=${coord.longitude}`),
    getAnotherLocationData: (q)=> requests.get(`/weatherForecast?q=${q}`),
}

const News = {
    getNews: () => requests.get(`/tech-news`)
}

const agent = {
    Weather,
    News
}

export default agent;