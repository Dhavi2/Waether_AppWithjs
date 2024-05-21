let API_key = `3513eb1583eb5027800e7c71251b9c8a`;
let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp").value;


const data = async function(){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}&units=metric`);
    console.log(getData)   
}
data();
{/* */}
{/* https:api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric */}