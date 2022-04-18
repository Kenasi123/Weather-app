document.addEventListener("DOMContentLoaded", function() {

    
// fetch(`https://api.weatherapi.com/v1/current.json?key=a35c94fe128a46eaa9e174739221204&q=london&aqi=yes`).then(function(response) {
//     return response.json();

// }).then(function(data) {
//     console.log(data)
//     createDaily(data.current)
    
// }).catch(function (error) {
//     console.log(error);
// }) 

// const city = 
// const temp =  
// const high 
// const low = 

// const times = 


// function createDaily(){


// }

    
    

// problem: we need to fetch an api that will render the image of the
// city put in search bar
// 1. fetch api 
// 2. connect input to photo 
// 3. display image


// now that we know the api is working:
// 1.create a call for the submit button 
// 2.link the input city to the proper pic
// 3.

const lookupCity = document.getElementById('getPic');
const input = document.querySelector('input')
let background = document.createElement('img');
// const city = document.createElement("IMG")
let search = false;
let que = "";

input.addEventListener('input',(e) => {
    e.preventdefault();
    que=e.target.value;

}) 


 function cityBackgroundImage() {


    fetch(`https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images=${cityPic}`).then(
        function(response) {
            return response.json();
        }).then(function(data) {
            //testing
            console.log(data);
            const citySearched = data.photos.forEach((photo) => {
            background.innerHTML`<img src=${photo.web}>`;
            background.style.position = "absolute"
            background.onload = function()     {
                document.getElementById('cityPic').appendChild(background);
            
            };
        })
        citySearched();  
            
        }).catch(function(error) {
            console.log(error);
            alert("¯|_(ツ)_/¯")
        })

/// maybe a if data.city === either text input or empty string then print or 
// then display data.image. web in relatation to cir

}
cityBackgroundImage();

})
