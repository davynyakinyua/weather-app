
//function to inform user that data is loading 
export function loading () {
    //select DOM elements to update data
    const temp = document.getElementById("temp");
    temp.textContent = "";
    temp.textContent = "... loading";
    
    const wind = document.getElementById("wind");
    wind.textContent = "";
    wind.textContent = "... loading";

    const pressure = document.getElementById("pressure");
    pressure.innerHTML = "";
    pressure.textContent = "... loading";

    const visibility = document.getElementById("visibility");
    visibility.innerHTML = "";
    visibility.textContent = "... loading";
}

// function to update the DOM once that weather data is ready
export function fullyLoaded (pressureNew, tempNew, visibilityNew, windSpeedNew, location) {
    //select DOM elements to update data
    const temp = document.getElementById("temp");
    temp.innerHTML = "";
    temp.textContent = `${tempNew} \u00B0F`;
    
    const wind = document.getElementById("wind");
    wind.innerHTML = "";
    wind.textContent = `${windSpeedNew} km/h`;

    const pressure = document.getElementById("pressure");
    pressure.innerHTML = "";
    pressure.textContent = `${pressureNew} mb`;

    const visibility = document.getElementById("visibility");
    visibility.innerHTML = "";
    visibility.textContent = `${visibilityNew} km`;

    const address = document.getElementById("location-container");
    address.innerHTML = "";
    address.textContent = location;
}