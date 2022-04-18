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


   
})
