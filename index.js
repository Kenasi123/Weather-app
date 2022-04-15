
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

                //get the location

                // weather.temperature = data.current.temp_c;
                
                const temperature = Math.round(data.current.temp_c);
                const conditions = (data.current.condition.text);
                const iconId = (data.current.condition.icon);
                const high = Math.round(data.forecast.forecastday.maxtemp_c);
                const low = Math.round(data.forecast.forecastday.mintemp_c);

                
                document.getElementById("temp").innerHTML = `${temperature} °C`;
                document.getElementById("conditons").innerHTML = `${conditions}`;
                document.getElementById("H").innerHTML = `High: ${high} °C`;
                document.getElementById("L").innerHTML = `Low: ${low} °C`;
                //document.getElementById("city").innerHTML = location; 


                // get the icon

                //Daily Forecast 
                let nextDay = data.hour.time; 

            }).catch(function (error) {
                console.log("Theres a error!")
                console.log(error);
                
            })
        }
    getForcast();


        // weather.temperature = document.getElementById(".temp").innerHTML = `<div class="temp" id="temp">${data.current.temp_c}</div>`
        // console.log(weather.temperature)

}) // end of widow listener



