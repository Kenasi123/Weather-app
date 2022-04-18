document.addEventListener("DOMContentLoaded", function() {
 
const resDiv = document.getElementById("affirmations");

// adds advice couldnt get the affirmations to work 
 
    function getAdvice() {
    
        fetch('https://api.adviceslip.com/advice').then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            const Adviceobj = data.slip.advice;
            resDiv.innerHTML = `<p>${Adviceobj}</p>`;
        }).catch(error => {
            console.log(error);
        });
        
    }

    getAdvice(); 

//casseion's code
 
  function cityBackgroundImage() {


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



     fetch(`https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images=${cityPic}`).then(
         function(response) {
             return response.json();
         }).then(function(data) {
             //testing
             console.log(data);
             const citySearched = data.photos.forEach((photo) => {
             background.innerHTML =`<img src=${photo.web}>`;
             background.style.position = "absolute"
            
             document.getElementById('cityPic').appendChild(background);

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
