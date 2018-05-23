//api aanroepen via get request via url
const getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

//get json data voor chuck norris joke
getJSON('http://api.icndb.com/jokes/random', function(error, data){
    if(error){
        document.write('error, database not found');
        return false;
    }

    let jokeChuck = data;
    let jokeDiv = document.getElementById('jokeNorris');
    //joke maken en toevoegen aan de div
    let jokeText = document.createElement('p');
    jokeText.innerHTML = jokeChuck.value.joke;
    jokeDiv.appendChild(jokeText);
});

//jokes maken en zelf de naam invullen + genereren door knop
let generateJoke = document.getElementById('generatejoke').addEventListener('onclick', function () {
    let name  = document.getElementById('voornaam').value;
    let lastName = document.getElementById('achternaam').value;
    let inputUrl = 'http://api.icndb.com/jokes/random?firstName='+name+'&lastName='+lastName;
    getJSON(inputUrl, function (error, data){
        if (error) {
            document.write('error, database not found');
            return false;
        }
        console.log(data);
        let randomJoke = data;
        let jokeDiv = document.createElement('div');
        let jokeText = document.createElement('p');
        jokeText.innerHTML = randomJoke.value.joke;
        jokeDiv.appendChild(jokeText);
    });
});
