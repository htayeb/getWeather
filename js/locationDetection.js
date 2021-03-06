var autoDetectedCity;
var theSelectedCity;

navigator.geolocation.getCurrentPosition(success, error);
// function success(pos) {
//     var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 49.2827 + '%2C' + -123.116226 + '&language=en';//Vancouver test
//     var crd = pos.coords;
//
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//
//     $.getJSON(geocoding, function (location) {
//         console.log(location);
//     });
// }
function success(position)
{


    var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en' + '&key=AIzaSyCYnEvWaxaeDj-JlPAKRRDOzBUwsyYZKWI';
    // // Those geocoding to test other city across the country
    // // var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 49.2827 + '%2C' + -123.116226 + '&language=en';//Vancouver test
    // // var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 51.131470 + '%2C' + -114.010559 + '&language=en';//Calgary test
    // // var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 52.146973 + '%2C' + -106.647034 + '&language=en';//Saskatoon test
    // // var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 49.895077 + '%2C' + -97.138451+ '&language=en';//Winnpeg test
    // var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 40.7142700 + '%2C' + -74.0059700+ '&language=en';//Toronto test

    // get the location data from google maps api
    $.getJSON(geocoding).done(function(location)
    {
        var country = extractFromAdress(location.results[0].address_components, "country");
        console.log(country);

        if(country === 'Canada')
        {
            // fetch the results to find the City and Province for auto detect of weather function
            // location.results[3] contains the address of the city, province, country
            var tempLocation = location.results[1].formatted_address;
            console.log(tempLocation);
            // console.log(tempLocation);


            // regExp for the city and province
            var addressPat = /(\w+|\w+ \w+), (AB|BC|ON|MB|QC|SK|NL|NS|NU|NT|YT|PE|NB)/;
            var cityProName = addressPat.exec(tempLocation);

            // location.results[1] contains the city, province, country, info
            // In some cases it may be null, we fetch location.results[2] to get more
            // info about the location and extract the city and province.
            if (cityProName === null) {
                tempLocation = location.results[2].formatted_address;
                cityProName = addressPat.exec(tempLocation);
            }
            console.log(cityProName[0]);
            autoDetectedCity = cityProName[0];

            if (autoDetectedCity) {
                var result = citiesID.find(function (d) {
                    //Ask Hussam about this
                    if (d.city === autoDetectedCity) {
                        if (d.city === autoDetectedCity) {
                            return d.city === autoDetectedCity;
                        }
                    }
                }).key_site;

            }
            var url = "http://dd.weather.gc.ca/citypage_weather/xml" + result;
            theSelectedCity = autoDetectedCity;
            weather(url);
        }
        else{//Show an error
            console.log("EROOR");
             }
    })


}
function error(err)
{
    console.log(err)
}

function extractFromAdress(components, type){
    for (var i=0; i<components.length; i++)
        for (var j=0; j<components[i].types.length; j++)
            if (components[i].types[j]==type) return components[i].long_name;
    return "";
}