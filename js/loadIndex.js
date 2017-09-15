// This page is using the dynamic load; however, it is not working according to our desire. 
// The second functionality is with 3 second delay. 
// Onclick on the .getWeather image, delay and show the weather
// $(function() {
// 	$('#scene').click(function() {
// 		var url = "weather.html"
// 	$('#wholePage').load(url + ' #wholePage').hide().delay( 3000 ).fadeIn( 3000 );
// 	});
	
// });

// $('#scene').click (function (e){
//    e.preventDefault(); 

//    setTimeout(function () {
//        window.location.href = "weather.html"; //will redirect to your blog page (an ex: weather.html)
//     }, 3000); //will call the function after 2 secs.

// });

function getLocation(callback) {
    var promise = new Promise(function(resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position){
                    resolve( position.coords.latitude + "," + position.coords.longitude)
                }
            );
        } else {
          reject("Unknown");
        }
    });

    return promise;
}

var locationPromise = getLocation();
// locationPromise
//       .then(function(loc) { console.log(loc); })
//       .catch(function(err) { console.log("No location"); });

// function getLocation(callback) {
//     var promise = new Promise(function(resolve, reject) {
//         if (navigator.geolocation) {
        	
//             navigator.geolocation.getCurrentPosition(
//                 function(position){
//                     resolve( position.coords.latitude + "," + position.coords.longitude)
//                 }
//             );
//         } else {
        	
//  			window.location.href = "weather.html"; //For browser  that had no geolocation objects//
//           // reject("Unknown");

//         }
//     });

//     return promise;
// }

// var locationPromise = getLocation();
// console.log(locationPromise)
// locationPromise.then(function(loc) { 
// 	window.location.href = "weather.html"; 
// 	// This for SPA, single page application

// 	// 	var url = "weather.html"
// 	// $('#wholePage').load(url + ' #wholePage').hide().delay( 3000 ).fadeIn( 3000 );

//  })




navigator.permissions.query({name:'geolocation'})
  .then(function(permissionStatus) {  
    // console.log('geolocation permission state is ', permissionStatus.state);
    if(permissionStatus.state==="denied") {
        unhide('searchBar', 'mainLogo');
        $("#test").delay(1000).animate({"opacity": "1"}, 700);
        $('.clicked').click(function(){
            unhide('workingWeather', 'searchBar2');
            $("#testt").delay(1000).animate({"opacity": "1"}, 700);
        })
        // unhide('mainLogo', 'searchBar');

  			// setTimeout(function () {
    	   // window.location.href = "weather.html"; //will redirect to your blog page (an ex: weather.html)
    	   //  }, 1500); //will call the function after 2 secs.
  	}else if(permissionStatus.state==="granted") {
        unhide('workingWeather', 'mainLogo');
  		  //  setTimeout(function () {
    	   // window.location.href = "weather.html"; //will redirect to your blog page (an ex: weather.html)
    	   //  }, 1500); //will call the function after 2 secs.
  	}
    

    permissionStatus.onchange = function(result) {

      // console.log('geolocation permission state has changed to ', this.state);
      if(this.state==="denied"){
          unhide('searchBar', 'mainLogo');
          $("#test").delay(1000).animate({"opacity": "1"}, 700);
          $('.clicked').click(function(){
              unhide('workingWeather', 'searchBar2');
              $("#testt").delay(1000).animate({"opacity": "1"}, 700);
          })
  		} else if(this.state==="granted") {
          unhide('workingWeather', 'mainLogo');
          $("#testt").delay(1000).animate({"opacity": "1"}, 700);

  		  //  setTimeout(function () {
    	   // window.location.href = "weather.html"; //will redirect to your blog page (an ex: weather.html)
    	   //  }, 3000); //will call the function after 2 secs.
  		}

      //Here in the next few line is to try to make the page load dynamically but 
   	   // 		var url = "weather.html"
			    // $('#wholePage').load(url + ' #wholePage').hide().delay( 3000 ).fadeIn( 3000 );
    };
  });

function unhide(divID, otherDivId) {
    var item = document.getElementById(divID);
    if (item) {
        item.className=(item.className==='hidden')?'unhidden':'hidden';
    }
    document.getElementById(otherDivId).className = 'hidden';
}
