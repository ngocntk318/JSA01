
const api_key = "076f8fc20840003a8c629064054e2a33";
const country = document.getElementById("Ho Chi Minh")
let q = "coun";
let name;
let main;
let sys;
let temp;

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=&{units}&appid=${api_key}`
).then(function(resp){
    return resp.json();
}).then(data =>{
    console.log("name= "+data.name);
    console.log(data);
    console.log("name= "+data.weather[0].main);


    
})