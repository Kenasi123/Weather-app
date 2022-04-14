document.addEventListener("DOMContentLoaded", function() {

    
fetch(`https://api.weatherapi.com/v1/current.json?key=a35c94fe128a46eaa9e174739221204&q=london&aqi=yes`).then(function(response) {
    return response.json();

}).then(function(data) {
    console.log(data)
    createDaily(data.current)
    
}).catch(function (error) {
    console.log(error);
}) 

const city = 
const temp =  
const high 
const low = 

const times = 


function createDaily(){


}

    
    
})
