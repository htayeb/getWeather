

$('#findWeather').click(function(){
	var theSelectedCity = $('#cityName').val();
    
    if(theSelectedCity) {
        var result = citiesID.find(function (d) {
            if(d.city!=theSelectedCity){
                $('#notFound').show();
            }else if(d.city===theSelectedCity) {
                return d.city === theSelectedCity;
            }
        }).key_site;
        
    }
    // console.log(result);
	
    var url = "http://dd.weather.gc.ca/citypage_weather/xml"+result;

/////////////////////////////////////////////////////////////////////////////

    var xmlSource = url;
   

    // build the yql query. Could be just a string 
    var yqlURL = [
        "http://query.yahooapis.com/v1/public/yql",
        "?q=" + encodeURIComponent("select * from xml where url='" + xmlSource + "'"),
        "&format=xml&callback=?"
    ].join("");

   
    $.getJSON(yqlURL, function(data){
        // console.log(data.results[0]);
        xmlContent = $(data.results[0]);
        // The City name and the region
        var location = xmlContent.find("location");
        var city = location.find("name");
        var region = location.find("region");
        var cityRegion = city[0].textContent + ' ' +region[0].textContent;
        $('#theCity').html(cityRegion)

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
        if(condition===""){
            var tempCon = currentCondition.find("temperature");
            tempCon = tempCon[0].textContent + ' C&deg;'
            $('#theCondition').html(tempCon); 
        }else {
           $('#theCondition').html(condition); 
        }
        // Display the current condition
        var hour = xmlContent.find("dateTime").attr('zone', 'PDT');
        
        hour = hour.find('hour');
        hour = hour[1].textContent
        
        
        $('img#condition').attr('class','');  
        if((condition.search('Cloudy'))!==-1){
            if(hour >=6 && hour <=19){
                $('img#condition').addClass('conditionCloudDay')
            }else {
                $('img#condition').addClass('conditionCloudNight')
            }
        } else if((condition.search('Snow'))!==-1){
            $('img#condition').attr('class',''); 
            $('img#condition').addClass('conditionSnow');

        } else if((condition.search('Rain'))!==-1){
            $('img#condition').attr('class',''); 
            $('img#condition').addClass('conditionRain') 

        } else {
            $('img#condition').attr('class',''); 
             
            if(hour >=6 && hour <=19){
                $('img#condition').addClass('conditionDay')
            }else {
                $('img#condition').addClass('conditionNight')
            }
        }

        // find the temperature
        var temperature = currentCondition.find('temperature');
        temperature = temperature[0].textContent + ' &deg;C';
        $('#theTemp').html(temperature);
        

        // Find the winder and assign it
        var wind = currentCondition.find("wind");
        var direction = wind.find("direction");
        direction=direction[0].textContent;
        wind = wind.find('speed');
        var windText = direction+ ' '+wind[0].textContent + ' km/h';
        console.log(windText)
        $('#theWind').html(windText);

        // From forecastGroup, forecast for the next two nights and days
        var forecastGroup  = xmlContent.find("forecastGroup");
        var forcasts = forecastGroup.find('forecast');

        // First night or day
        var forecast0 = forcasts[0];
        var period0 = forcasts.find("period");
        var temp0 = forcasts.find("temperature");
        var summery0 = forcasts.find('textSummary');
        summery0 = summery0[0].textContent;
        $('#day1Name').html(period0[0].textContent);
        $('#nextDay1Deg').html(temp0[0].textContent+' &deg;C');
        // plot the condition 
        period0 = period0[0].textContent;
        if(period0.search("night")!==-1){
            if(summery0.search("rain")!==-1){
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("rainSmallNight");
                }else if(summery0.search("snow") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("snowSmallNight");
                }else if(summery0.search("cloud") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("couldSmallNight");
                }else if(summery0.search("shower") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("showerSmallNight");
                } else {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day1Icon').attr('class','');  
                if(summery0.search("rain")!==-1){
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("rainSmallDay");
                }else if(summery0.search("snow") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("snowSmallDay");
                }else if(summery0.search("cloud") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("couldSmallDay");
                }else if(summery0.search("shower") !==-1) {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("showerSmallDay");
                } else {
                    $('img#day1Icon').attr('class','');  
                    $('img#day1Icon').addClass("clearSmallDay");
                }      
        }
        // Next day or night
        var forecast1 = forcasts[1];
        var period1 = forcasts.find("period");
        var temp1 = forcasts.find("temperature");
        var summery1 = forcasts.find('textSummary');
        summery1 = summery1[1].textContent;
        $('#day2Name').html(period1[1].textContent);
        $('#nextDay2Deg').html(temp1[1].textContent+' &deg;C');
        // plot the condition 
        period1 = period1[1].textContent;
        if(period1.search("night")!==-1){
            if(summery1.search("rain")!==-1){
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("rainSmallNight");
                }else if(summery1.search("snow") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("snowSmallNight");
                }else if(summery1.search("cloud") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("couldSmallNight");
                }else if(summery1.search("shower") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("showerSmallNight");
                } else {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day2Icon').attr('class','');  
                if(summery1.search("rain")!==-1){
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("rainSmallDay");
                }else if(summery1.search("snow") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("snowSmallDay");
                }else if(summery1.search("cloud") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("couldSmallDay");
                }else if(summery1.search("shower") !==-1) {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("showerSmallDay");
                } else {
                    $('img#day2Icon').attr('class','');  
                    $('img#day2Icon').addClass("clearSmallDay");
                }      
        }
                var forecast2 = forcasts[2];
        var period2 = forcasts.find("period");
        var temp2 = forcasts.find("temperature");
        var summery2 = forcasts.find('textSummary');
        summery2 = summery2[2].textContent;
        $('#day3Name').html(period2[2].textContent);
        $('#nextDay3Deg').html(temp2[2].textContent+' &deg;C');
        // plot the condition 
        period2 = period2[2].textContent;
        if(period2.search("night")!==-1){
            if(summery2.search("rain")!==-1){
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("rainSmallNight");
                }else if(summery2.search("snow") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("snowSmallNight");
                }else if(summery2.search("cloud") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("couldSmallNight");
                }else if(summery2.search("shower") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("showerSmallNight");
                } else {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day3Icon').attr('class','');  
                if(summery2.search("rain")!==-1){
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("rainSmallDay");
                }else if(summery2.search("snow") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("snowSmallDay");
                }else if(summery2.search("cloud") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("couldSmallDay");
                }else if(summery2.search("shower") !==-1) {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("showerSmallDay");
                } else {
                    $('img#day3Icon').attr('class','');  
                    $('img#day3Icon').addClass("clearSmallDay");
                }      
        }
        // Next day or night
                var forecast3 = forcasts[3];
        var period3 = forcasts.find("period");
        var temp3 = forcasts.find("temperature");
        var summery3 = forcasts.find('textSummary');
        summery3 = summery3[3].textContent;
        $('#day4Name').html(period3[3].textContent);
        $('#nextDay4Deg').html(temp3[3].textContent+' &deg;C');
        // plot the condition 
        period3 = period3[3].textContent;
        if(period3.search("night")!==-1){
            if(summery3.search("rain")!==-1){
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("rainSmallNight");
                }else if(summery3.search("snow") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("snowSmallNight");
                }else if(summery3.search("cloud") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("couldSmallNight");
                }else if(summery3.search("shower") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("showerSmallNight");
                } else {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("clearSmallNight");
                }
        } else {
            $('img#day4Icon').attr('class','');  
                if(summery3.search("rain")!==-1){
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("rainSmallDay");
                }else if(summery3.search("snow") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("snowSmallDay");
                }else if(summery3.search("cloud") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("couldSmallDay");
                }else if(summery3.search("shower") !==-1) {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("showerSmallDay");
                } else {
                    $('img#day4Icon').attr('class','');  
                    $('img#day4Icon').addClass("clearSmallDay");
                }      
        }



});






 })
