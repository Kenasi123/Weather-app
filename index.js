
document.addEventListener("DOMContentLoaded", function() {

        // get the forcast and the elements from the forecast
        function getForcast () {
        const API_KEY = "a35c94fe128a46eaa9e174739221204" // has to hidden and imported 
        
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=7&aqi=no&alerts=no`).then(function(response) {
               if (response.status >= 400 ) {
                   console.log("Theres a error")
               }
                return response.json();
            }).then(function(data) {
               
                // weather.temperature = data.current.temp_c;
                
                const temperature = Math.round(data.current.temp_c);
                const conditions = data.current.condition.text;
                const iconId = data.current.condition.icon;
                const high= data.forecast.forecastday.maxtemp_c;
                const low = data.forecast.forecastday.mintemp_c;

                //document.getElementById("city").innerHTML = body.main.temp + "degrees";

                //Daily Forecast 
                let nextDay = Math.round(data.daily[0].temp.day); 

            }).catch(function (error) {
                console.log("Theres a error!")
                console.log(error);
                
            })
        }
    getForcast();


        // weather.temperature = document.getElementById(".temp").innerHTML = `<div class="temp" id="temp">${data.current.temp_c}</div>`
        // console.log(weather.temperature)

}) // end of widow listener



