
// findWeather id, on click get the city name and search for site key to get 
// the url for the city.

$('#findWeather').click(function(){
    theSelectedCity = $('#cityName').val();
    $('#notFound').hide();
    if(theSelectedCity) {
        var result = citiesID.find(function (d) {
            if(d.city!=theSelectedCity){

            }else if(d.city===theSelectedCity) {
                return d.city === theSelectedCity;
            }
        }).key_site;

    }else{

        $('#notFound').show();
    }

    var url = "http://dd.weather.gc.ca/citypage_weather/xml"+result;
    weather(url);
});



function weather(urlAddress) {
    var xmlSource = urlAddress;
    // build the yql query. Could be just a string
    console.log(urlAddress)
    // Cache function to get the most recent data from weather Canada while respecting YQL cache system
    var cacheBuster = Math.floor((new Date().getTime()) / 3600 / 1000);
    var yqlURL = [
        "http://query.yahooapis.com/v1/public/yql",
        "?q=" + encodeURIComponent("select * from xml where url='" + xmlSource + "'"),
        "&format=xml&diagnostics=false&_nocache=" + cacheBuster +"&callback=cbFunc"

    ].join("");
    console.log(yqlURL);
    // Request that YSQL string, and run a callback function.
    // Pass a defined function to prevent cache-busting.
    $.ajax({
        url: yqlURL,
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'cbFunc'
    });
    // $.getJSON( yqlURL, cbFunc );
    function cbFunc(data) {
        console.log(data.results[0]);
        xmlContent = $(data.results[0]);

        // The City name and the region
        var location = xmlContent.find("location");
        var city = location.find("name");
        var region = location.find("region");
        // var cityRegion = city[0].textContent + ' ' +region[0].textContent;
        $('#theCity').html(theSelectedCity)

        // Weather data from current condition
        var currentCondition = xmlContent.find("currentConditions");
        // find the time and date
        var year = currentCondition.find("year");
        year = year[0].textContent;
        var month = currentCondition.find("month");
        month = month[0].textContent;
        var day = currentCondition.find("day");
        day = day[0].textContent;
        var theTime = year + ' - ' + month + ' - ' + day;
        // $('#theDay').html(theTime);
        var date = currentCondition.find("textSummary");
        date = date[0].textContent;
        var patDate = /.+2017/
        date = patDate.exec(date);
        $('#theDay').html(date);
        // find the general weather
        var condition = currentCondition.find("condition");

        condition = condition[0].textContent;
        // console.log(condition);
        if (condition === "") {
            var tempCon = currentCondition.find("temperature");
            tempCon = tempCon[0].textContent + ' C&deg;'
            $('#theCondition').html(tempCon);

        } else {
            $('#theCondition').html(condition);
        }
        // Display the current condition
        var hour = xmlContent.find("dateTime").attr('zone', 'PDT');

        hour = hour.find('hour');
        hour = hour[1].textContent


        $('img#condition').attr('class', '');
        if ((condition.search('Cloudy')) !== -1) {
            if (hour >= 6 && hour <= 19) {
                $('img#condition').addClass('conditionCloudDay')
            } else {
                $('img#condition').addClass('conditionCloudNight')
            }
        } else if ((condition.search('Snow')) !== -1) {
            $('img#condition').attr('class', '');
            $('img#condition').addClass('conditionSnow');

        } else if ((condition.search('Rain')) !== -1) {
            $('img#condition').attr('class', '');
            $('img#condition').addClass('conditionRain')

        } else {
            $('img#condition').attr('class', '');

            if (hour >= 6 && hour <= 19) {
                $('img#condition').addClass('conditionDay')
            } else {
                $('img#condition').addClass('conditionNight')
            }
        }

        // find the temperature
        var temperature = currentCondition.find('temperature');
        temperature = temperature[0].textContent + ' &deg;C';
        $('#theTemp').html(temperature);
        // Another Var to fill temp with large screens
        $('#theTempL').html(temperature);
        console.log(temperature);


        // Find the winder and assign it
        var wind = currentCondition.find("wind");
        var direction = wind.find("direction");
        direction = direction[0].textContent;
        wind = wind.find('speed');
        var windText = direction + ' ' + wind[0].textContent + ' km/h';
        console.log(windText)
        $('#theWind').html(windText);

        // From forecastGroup, forecast for the next two nights and days
        var forecastGroup = xmlContent.find("forecastGroup");
        var forcasts = forecastGroup.find('forecast');

        // First night or day for the next two nights and two days
        for (var i = 1; i < 5; i++) {

            var period1 = forcasts.find("period");
            var temp = forcasts.find("temperature");
            var summery = forcasts.find('textSummary');
            summery = summery[i].textContent;
            var dayName = '#day' + i + 'Name';
            var deyDeg = '#nextDay' + i + 'Deg';
            var imgIcone = 'img#day' + i + 'Icon';
            $(dayName).html(period1[i].textContent);
            $(deyDeg).html(temp[i].textContent + ' &deg;C');
            // plot the condition
            period1 = period1[i].textContent;
            if (period1.search("night") !== -1) {
                if (summery.search("rain") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("rainSmallNight");
                } else if (summery.search("snow") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("snowSmallNight");
                } else if (summery.search("cloud") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("couldSmallNight");
                } else if (summery.search("shower") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("showerSmallNight");
                } else {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("clearSmallNight");
                }
            } else {
                $(imgIcone).attr('class', '');
                if (summery.search("rain") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("rainSmallDay");
                } else if (summery.search("snow") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("snowSmallDay");
                } else if (summery.search("cloud") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("couldSmallDay");
                } else if (summery.search("shower") !== -1) {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("showerSmallDay");
                } else {
                    $(imgIcone).attr('class', '');
                    $(imgIcone).addClass("clearSmallDay");
                }
            }//else
        }//for loop
    };
}

//
// $.getJSON(yqlURL, function(data){
//     //console.log(data.results[0]);
//     xmlContent = $(data.results[0]);
//
//     // The City name and the region
//     var location = xmlContent.find("location");
//     var city = location.find("name");
//     var region = location.find("region");
//     // var cityRegion = city[0].textContent + ' ' +region[0].textContent;
//     $('#theCity').html(theSelectedCity)
//
//     // Weather data from current condition
//     var currentCondition = xmlContent.find("currentConditions");
//     // find the time and date
//     var year = currentCondition.find("year");
//     year = year[0].textContent;
//     var month = currentCondition.find("month");
//     month = month[0].textContent;
//     var day = currentCondition.find("day");
//     day = day[0].textContent;
//     var theTime = year + ' - ' + month + ' - ' + day;
//     // $('#theDay').html(theTime);
//     var date = currentCondition.find("textSummary");
//     date = date[0].textContent;
//     var patDate = /.+2017/
//     date = patDate.exec(date);
//     $('#theDay').html(date);
//     // find the general weather
//     var condition = currentCondition.find("condition");
//
//     condition = condition[0].textContent;
//     // console.log(condition);
//     if(condition===""){
//         var tempCon = currentCondition.find("temperature");
//         tempCon = tempCon[0].textContent + ' C&deg;'
//         $('#theCondition').html(tempCon);
//
//     }else {
//        $('#theCondition').html(condition);
//     }
//     // Display the current condition
//     var hour = xmlContent.find("dateTime").attr('zone', 'PDT');
//
//     hour = hour.find('hour');
//     hour = hour[1].textContent
//
//
//     $('img#condition').attr('class','');
//     if((condition.search('Cloudy'))!==-1){
//         if(hour >=6 && hour <=19){
//             $('img#condition').addClass('conditionCloudDay')
//         }else {
//             $('img#condition').addClass('conditionCloudNight')
//         }
//     } else if((condition.search('Snow'))!==-1){
//         $('img#condition').attr('class','');
//         $('img#condition').addClass('conditionSnow');
//
//     } else if((condition.search('Rain'))!==-1){
//         $('img#condition').attr('class','');
//         $('img#condition').addClass('conditionRain')
//
//     } else {
//         $('img#condition').attr('class','');
//
//         if(hour >=6 && hour <=19){
//             $('img#condition').addClass('conditionDay')
//         }else {
//             $('img#condition').addClass('conditionNight')
//         }
//     }
//
//     // find the temperature
//     var temperature = currentCondition.find('temperature');
//     temperature = temperature[0].textContent + ' &deg;C';
//     $('#theTemp').html(temperature);
//     // Another Var to fill temp with large screens
//     $('#theTempL').html(temperature);
//     console.log(temperature);
//
//
//     // Find the winder and assign it
//     var wind = currentCondition.find("wind");
//     var direction = wind.find("direction");
//     direction=direction[0].textContent;
//     wind = wind.find('speed');
//     var windText = direction+ ' '+wind[0].textContent + ' km/h';
//     console.log(windText)
//     $('#theWind').html(windText);
//
//     // From forecastGroup, forecast for the next two nights and days
//     var forecastGroup  = xmlContent.find("forecastGroup");
//     var forcasts = forecastGroup.find('forecast');
//
//     // First night or day for the next two nights and two days
//    for (var i = 1; i<5; i++) {
//
//         var period1 = forcasts.find("period");
//         var temp = forcasts.find("temperature");
//         var summery = forcasts.find('textSummary');
//         summery = summery[i].textContent;
//         var dayName = '#day'+i+'Name';
//         var deyDeg = '#nextDay'+i+'Deg';
//         var imgIcone = 'img#day'+i+'Icon';
//         $(dayName).html(period1[i].textContent);
//         $(deyDeg).html(temp[i].textContent+' &deg;C');
//         // plot the condition
//         period1 = period1[i].textContent;
//         if(period1.search("night")!==-1){
//             if(summery.search("rain")!==-1){
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("rainSmallNight");
//                 }else if(summery.search("snow") !==-1) {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("snowSmallNight");
//                 }else if(summery.search("cloud") !==-1) {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("couldSmallNight");
//                 }else if(summery.search("shower") !==-1) {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("showerSmallNight");
//                 } else {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("clearSmallNight");
//                 }
//         } else {
//             $(imgIcone).attr('class','');
//                 if(summery.search("rain")!==-1){
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("rainSmallDay");
//                 }else if(summery.search("snow") !==-1) {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("snowSmallDay");
//                 }else if(summery.search("cloud") !==-1) {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("couldSmallDay");
//                 }else if(summery.search("shower") !==-1) {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("showerSmallDay");
//                 } else {
//                     $(imgIcone).attr('class','');
//                     $(imgIcone).addClass("clearSmallDay");
//                 }
//         }//else
//     }//for loop
// });//getJSON
// }//weather
