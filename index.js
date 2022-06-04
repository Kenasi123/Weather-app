
document.addEventListener("DOMContentLoaded", function() {



 //document.getElementById("city").addEventListener("click",getForcast())

    // get the forcast and the elements from the forecast
    function getForcast() {
    //get location 
    
    
    const API_KEY = "a35c94fe128a46eaa9e174739221204" // has to hidden and imported 
    const city = "Atlanta"
    
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`).then(function(response) {
           if (response.status >= 400 ) {
               console.log("Theres a error")
           }
            return response.json();
        }).then(function(data) {
            // document.getElementById('city').innerHTML = data.location.name
        console.log(data)
        //get the location 

       


        // getting the current date 
        let today = new Date();  
        let day = today.getDay();  
        const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  

      
        
            // get the data for the first day 
            const location = data.location.name;
            let temperature = Math.round(data.current.temp_f);
            let conditions = data.current.condition.text;
            let iconId = data.current.condition.icon;
            let high = Math.round(data.forecast.forecastday[0].day.maxtemp_f);
            let low = Math.round(data.forecast.forecastday[0].day.mintemp_f);
            
        
            document.getElementById("future-temp0").innerHTML = `
            <div class="date" id="date">${daylist[day]}</div>
            <div class="temp" id="temp">${temperature} °F</div>
            <div class="conditions" id="conditions">${conditions}</div>
            <div class="icon" id="icon"></div>
            <div class="H"id="H">High: ${high} °F</div>
            <div class="L"id="L">Low: ${low} °F</div>
            `
        document.getElementById("cityname").innerHTML = location; // constant for all days
        

       function getIcon () {
            var img = document.createElement("img");
            img.src = `https:${iconId}`;
            var src = document.getElementById("icon");
            src.appendChild(img);
       } 
       getIcon(); // gets icon and appends icon for the first div

              // get the data for the second day 
             temperature = Math.round(data.forecast.forecastday[1].day.avgtemp_f);
             conditions = data.forecast.forecastday[1].day.condition.text;
             iconId = data.forecast.forecastday[1].day.condition.icon;
             high = Math.round(data.forecast.forecastday[1].day.maxtemp_f);
             low = Math.round(data.forecast.forecastday[1].day.mintemp_f); 

        

        document.getElementById("future-temp1").innerHTML = `
            <div class="date" id="date">${daylist[day+1]}</div>
            <div class="temp" id="temp">${temperature} °F</div>
            <div class="conditions" id="conditions">${conditions}</div>
            <div class="icon" id="icon"><img src=https:${iconId}></div>
            <div class="H"id="H">High: ${high} °F</div>
            <div class="L"id="L">Low: ${low} °F</div>
            `
            // get the data for the third day
            temperature = Math.round(data.forecast.forecastday[2].day.avgtemp_f);
            conditions = data.forecast.forecastday[2].day.condition.text;
            iconId = data.forecast.forecastday[2].day.condition.icon;
            high = Math.round(data.forecast.forecastday[2].day.maxtemp_f);
            low = Math.round(data.forecast.forecastday[2].day.mintemp_f); 

            document.getElementById("future-temp2").innerHTML = `
            <div class="date" id="date">${daylist[day+2]}</div>
            <div class="temp" id="temp">${temperature} °F</div>
            <div class="conditions" id="conditions">${conditions}</div>
            <div class="icon" id="icon"><img src=https:${iconId}></div>
            <div class="H"id="H"> High: ${high} °F</div>
            <div class="L"id="L">Low: ${low} °F</div>
            `
        

        }).catch(function (error) {
            console.log("Theres a error!")
            console.log(error);
            
        })
    }
getForcast(); 
 

}) // end of widow listener


