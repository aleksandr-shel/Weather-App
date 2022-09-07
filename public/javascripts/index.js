
let current = {

}

let forecast = []


function setCurrentWeather(current){

}


//this one definetely better, it comes with the current weather too
function getWeatherForecast(lat, lon, days=7){
    // let apiUrl = '/api/weatherForecast'
    let apiUrl = `/api/weatherForecast?lat=${lat}&lon=${lon}`


    axios(apiUrl).then(response=>{
        console.log(response.data)
    }).catch(error=>{
        console.log(error);
    })
}
class Coords{
    latitude;
    longitude;
    constructor(){
        //Toronto coordinates
        this.latitude= 43.8152522
        this.longitude = -79.2845772
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
        console.log(latitude, longitude)
    }

    // handle error case
    onError() {
        console.log(`Failed to get your location!`);
    }
}

const coord = new Coords();
getWeatherForecast(coord.latitude, coord.longitude)