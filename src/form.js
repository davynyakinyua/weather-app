
import { fetchApi } from "./fetch";


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
                console.log("Weather data:", data);
        
            })
            .catch(error => {
                console.error(error.message);
            });
    
}