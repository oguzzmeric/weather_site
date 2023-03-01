const url = "https://api.openweathermap.org/data/2.5/";
const key = "007d124f47011b055c28ff0abbe42a35";

const setQuery = (e) => {
    if(e.keyCode == "13") 
    getResult (searchBar.value); 

}
//keyCode

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    console.log(query);
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResult = (result) =>{
        console.log(result.name);
        console.log(result.weather.main);
        let name = document.querySelector(".city");
        name.innerHTML = result.name;

        let degree = document.querySelector(".temp");
        degree.innerHTML = `derece : ${result.main.temp} C°`;

        let feel_degree = document.querySelector(".feels_temp");
        feel_degree.innerHTML =`hissedilen: ${result.main.feels_like} C°`;
        
        let desc = document.querySelector(".desc");
        desc.innerHTML = `hava:  ${result.weather[0]["description"]} `;


    } )

}



const searchBar = document.getElementById("searcher");
searchBar.addEventListener("keypress",setQuery)