const ApiKey = "fad6a2ff37ee67981cd18de4abfc73d0"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=hyderabad&units=metric&appid=fad6a2ff37ee67981cd18de4abfc73d0";



const searchBox = document.getElementById("search1")
const searchBtn = document.getElementById("search2")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${ApiKey}`);
    var data = await response.json();
    console.log(data)

    document.getElementById("maintemp").innerHTML = data.main.temp + "<sup>.c</sup>";
    document.getElementById("mintemp").innerHTML = "Minimum temperature=" + data.main.temp_min;
    document.getElementById("maxtemp").innerHTML = "Maximum temperature=" + data.main.temp_min;
    document.getElementById("humidity").innerHTML = "Humidity=" + data.main.humidity;
    document.getElementById("pressure").innerHTML = "pressure=" + data.main.pressure;
    document.getElementById("visibility").innerHTML = "pressure=" + data.main.pressure;
    document.getElementById("gust").innerHTML = "gust=" + data.wind.gust;
    document.getElementById("feels").innerHTML = "Feels like=" + data.main.feels_like;
    document.getElementById("speed").innerHTML = "speed=" + data.wind.speed + "m/s";
    document.getElementById("degree").innerHTML = "degree=" + data.wind.degree;
    document.getElementById("cloud").innerHTML = "Cloud-Levels=" + data.weather.description;
    document.getElementById("sea").innerHTML = "Sea-Level=" + data.wind.sea_level;
    document.getElementById("set").innerHTML = "Sun-set=" + data.sys.sunset;
    document.getElementById("rise").innerHTML = "Sun-rise=" + data.sys.sunrise;
    document.getElementById("rain").innerHTML = "Rain=" + data.wind.degree;
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})