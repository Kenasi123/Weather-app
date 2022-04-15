
document.addEventListener("DOMContentLoaded", function() {


        // get the forcast and the elements from the forecast
    function getForcast () {
        const API_KEY = "a35c94fe128a46eaa9e174739221204" // has to hidden and imported 

        let city = "Atlanta"
        
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`).then(function(response) {
               if (response.status >= 400 ) {
                   console.log("Theres a error")
               }
                return response.json();
            }).then(function(data) {

                //get the location

    
                
            const temperature = Math.round(data.current.temp_c);
            const conditions = data.current.condition.text;
            const iconId = data.current.condition.icon;
            const high = Math.round(data.forecast.forecastday[0].day.maxtemp_c);
            const low = Math.round(data.forecast.forecastday[0].day.mintemp_c);

               
            document.getElementById("temp").innerHTML = `${temperature} °C`;
            document.getElementById("conditions").innerHTML = `${conditions}`;
            document.getElementById("H").innerHTML = `${high} °C`;
            document.getElementById("L").innerHTML = `${low} °C`;
            //document.getElementById("city").innerHTML = location; 


            // get the icon
            var img = document.createElement("img");
            img.src = `https:${iconId}`;
            var src = document.getElementById("icon");
            src.appendChild(img);
                
                
            //Weekly Forecast 
            

            }).catch(function (error) {
                console.log("Theres a error!")
                console.log(error);
                
            })
        }
    getForcast();


        // weather.temperature = document.getElementById(".temp").innerHTML = `<div class="temp" id="temp">${data.current.temp_c}</div>`
        // console.log(weather.temperature)

}) // end of widow listener



