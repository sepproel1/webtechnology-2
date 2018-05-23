
//fetch json for weather
const weatherRequestLok = new Request('http://api.openweathermap.org/data/2.5/weather?q=lokeren&APPID=fb818cd01391fec0dd02c068011b3dd6');
fetch(weatherRequestLok)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            console.log("something went wrong");
        }
    })
    .then(function(weather){
        weatherLok(weather)
    });
function weatherLok(jsonObj1){
    let weatherBoxLok = document.getElementById('weatherLok');
    console.log(jsonObj1);
    let myH3 = document.createElement('h3');
    myH3.textContent = jsonObj1.weather[0].main;
    weatherBoxLok.appendChild(myH3);
    let temp = document.createElement('p');
    temp.textContent = ` Temperature: ${jsonObj1.main.temp} farenheit`;
    weatherBoxLok.appendChild(temp);
    let humi = document.createElement('p');
    humi.textContent = `Humidity: ${jsonObj1.main.humidity}`;
    weatherBoxLok.appendChild(humi);
    let wind  = document.createElement('p');
    wind.textContent = `Wind: ${jsonObj1.wind.speed} beafort`;
    weatherBoxLok.appendChild(wind);
}
//the same for gent
const weatherRequestGent = new Request('http://api.openweathermap.org/data/2.5/weather?q=ghent&APPID=fb818cd01391fec0dd02c068011b3dd6');
fetch(weatherRequestGent)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            console.log("something went wrong");
        }
    })
    .then(function (weather) {
        weatherGent(weather)
    });
function weatherGent(jsonObj2) {
    let weatherBoxGent = document.getElementById('weatherGent');
    console.log(jsonObj2);
    let myH3 = document.createElement('h3');
    myH3.textContent = jsonObj2.weather[0].main;
    weatherBoxGent.appendChild(myH3);
    let temp = document.createElement('p');
    temp.textContent = ` Temperature: ${jsonObj2.main.temp} farenheit`;
    weatherBoxGent.appendChild(temp);
    let humi = document.createElement('p');
    humi.textContent = `Humidity: ${jsonObj2.main.humidity}`;
    weatherBoxGent.appendChild(humi);
    let wind = document.createElement('p');
    wind.textContent = `Wind: ${jsonObj2.wind.speed} beafort`;
    weatherBoxGent.appendChild(wind);
}