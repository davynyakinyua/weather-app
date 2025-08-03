console.log("Hello world");


// get the date of the day
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
console.log(`Todays date is ${year}-${month}-${day}`);

// async function to fetch api
export async function fetchApi (location) {
    try{
        console.log("...loading please wait");
        //const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${year}-${month}-${day}?elements=tempmax,tempmin&metric&key=UWW599F9PC2QG7KFPXJ6K98ST`);
        // check if reponse is ok
        if(!response.ok){
            throw new Error(`http error! status:${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

