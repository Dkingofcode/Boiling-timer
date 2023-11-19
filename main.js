const input  = document.getElementById("inputField");
const timerSpan = document.getElementById("timer");



function handleTimer(event) {
    event.preventDefault(); // Prevent the default behaviour of the form
    console.log("Createn a timer");
    
    
        // Access the input value using e.target.value
        let inputValue = parseInt(input.value, 10); // Parse input as an integer

        // Check if inputValue is a valid Number
        if (isNaN(inputValue) || inputValue <= 0){
           console.error("Invalid input value");
           return; 
        }
        

        let childTimerSpan = document.createElement("div");
         childTimerSpan.classList.add("childtimer");        
        childTimerSpan.textContent = inputValue;
        timerSpan.appendChild(childTimerSpan);          
        
        // Update the childTimerSpan every second
        let countdownInterval = setInterval(() => {
         childTimerSpan.textContent =  inputValue;
   
            inputValue--;
          

           // Check if the timer has reached zero
           if(inputValue < 0){
            clearInterval(countdownInterval); // Stop the interval
            
            
            setTimeout(() => {
                // Remove the child node after delay

               timerSpan.removeChild(childTimerSpan);
            }, 1000); // Adjust the delay as needed
        }else{
            childTimerSpan.classList.add("timer-scaling");
        }
        }, 700);
        console.log(inputValue);   
}