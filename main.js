document.addEventListener("DOMContentLoaded", function() {
// affirmations 

const weatherElement = document.querySelector(".weather-icon") 
const tempElement = document.querySelector(".temp") 
const conditionElement = document.querySelector(".icon") 
const highElement = document.querySelector(".H") 
const lowElement = document.querySelector(".L") 
const notificationElement = document.querySelector(".notification")

    let input= document.getElementById("city-form")
    let city= ""
    let latititude = 0.0 
    let longitude = 0.0 

    
    const weather = {}
    weather.temperature = {
        units: "celcius"
    }

    //const KELVIN 

const API_KEY = "a35c94fe128a46eaa9e174739221204&q"


    
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}=${city}&aqi=yes`).then(function(response) {
        return response.json();

    }).then(function(data) {
        weather.temperature = math.floor(data.current.temp_c)
        weather.iconId = (data.current.condition.icon)
        weather.high= (data.forecast.forecastday.maxtemp_c)  
        weather.low = (data.forecast.forecastday.mintemp_c)
        weather.temperature = math.floor(data.current.temp_c)

        //document.getElementById("city").innerHTML = body.main.temp + "degrees";
    }).catch(function (error) {
        console.log("Theres a error!")
        console.log(error);
    }) 




// function createDaily(data_Fromcurrent){ 

//     const temp = data_Fromcurrent.temp_c  
//     console.log(temp)

// }
// createDaily();
    
    
 })
