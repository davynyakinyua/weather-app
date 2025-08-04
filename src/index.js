// import modules
import './styles.css';
import { formInput } from './form';
import { fetchApi } from "./fetch";
import { fullyLoaded } from "./dom";

// Default location
const location = "london";

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


// select element from the DOM
const submitBtn = document.getElementById("submit-btn");

// add eventlistener
submitBtn.addEventListener("click",formInput);

