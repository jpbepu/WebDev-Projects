

var icon = document.querySelector('icon')
var notification = document.querySelector('.notification')
const key = "9eef721a3d10e8892fadf49cc476c843"



//Fetching Browser's geolocation proprieties-------------------
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
}else{
    notification.style.display = "block";
    notification.innerHTML = "<p>Browser doesn't Support Geolocation</p>";   
}}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }

//handling errors-----------------
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }


function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon={longitude}&APPID=${key}`;
    fetch(api) 
    .then ( function(response){
        let data = response.json();
        return data;
    })
    }

    getLocation()

