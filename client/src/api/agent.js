import axios from 'axios';

let lat = 43.8152522
let lon = -79.2845772

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
    getData: ()=> requests.get(`/weatherForecast?lat=${lat}&lon=${lon}`),
}

const agent = {
    Weather
}

export default agent;