/**
 * Created by haltayeb on 25-Mar-17.
 */

if(navigator.geolocation){
    var showPosition = function(position){
        updateByGeo(position.coords.latitude, position.coords.longitude);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    //Show search bar!
}





function updateByGeo(lat, lon){
    //Some how transform this values into cities and then send the URL to
    // var url = "http://dd.weather.gc.ca/citypage_weather/xml"+result;
    // sendRequest(url);
}



