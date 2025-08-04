
import { fetchApi } from "./fetch";
import { fullyLoaded } from "./dom";


export function formInput (event) {
    const form = document.getElementById("form");
    const input = document.getElementById("location");
    const errorMessage = document.getElementById("error-msg");  

    errorMessage.textContent = "";

    if(!input.checkValidity()){
        event.preventDefault();

        errorMessage.textContent = "Input error";
    }

    event.preventDefault();
    // if input is valid return it to fetch api
    
    const location = input.value;
    console.log(location);

    // call fetch api
    fetchApi(location)
            .then(data => {           
            
                // destructuring the json object
                const {address, days} =  data;
                console.log(address);
                console.log(days);
                // destructuring the elements object from the array
                const [elements] = days;
                console.log(elements);
                // destructe individual elements
                const {hours, pressure, temp, visibility, windspeed} = elements;
                
                // call function to update dom with elements
                fullyLoaded(pressure, temp, visibility, windspeed, address);

            })
            .catch(error => {
                console.error(error.message);
            });
    
}