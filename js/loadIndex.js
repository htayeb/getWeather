// This page is using the dynamic load; however, it is not working according to our desire. 
// The second functionality is with 3 second delay. 
// Onclick on the .getWeather image, delay and show the weather

// $(function() {
// 	$('#scene').click(function() {
// 		var url = "weather.html"
// 	$('#wholePage').load(url + ' #wholePage').hide().delay( 3000 ).fadeIn( 3000 );
// 	});
	
// });

// This one is onclick, clicking the getweather logo

// $('#scene').click (function (e){
//    e.preventDefault(); 

//    setTimeout(function () {
//        window.location.href = "weather.html"; //will redirect to your blog page (an ex: weather.html)
//     }, 3000); //will call the function after 3 secs.

// });

// This function is to redirect you, once you enter the page. 
$(function(){
   setTimeout(function () {
       window.location.href = "weather.html"; //will redirect to your blog page (an ex: weather.html)
    }, 3000); //will call the function after 3 secs.
});