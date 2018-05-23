// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// get json data
getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {
    
    // show error
    if(error) {
        
    document.write('ERROR, database not found');

        return false;
    }
console.log(data);
    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];
        //console.log(parking);

        let parkingDiv = document.createElement("div");
        parkingDiv.className = 'parking'; 
        //array aanspreken om naam parking te krijgen > json aanspreken via de data
        let parkingName = document.createElement('h2');
        parkingName.innerHTML = parking.name;
        //lijst aanmaken + li toevoegen aan lijst
        let parkingUl = document.createElement('ul');
        let parkingCapacity = document.createElement('li');
        parkingCapacity.innerHTML = "Capaciteit: " + parking.parkingStatus.totalCapacity;
        let parkingAvailable = document.createElement('li');
        parkingAvailable.innerHTML = "Beschikbaar: " + parking.parkingStatus.availableCapacity;
        parkingUl.appendChild(parkingCapacity);
        parkingUl.appendChild(parkingAvailable);
        //toevoegen aan div en div toevoegen aan DOM
        parkingDiv.appendChild(parkingName);
        parkingDiv.appendChild(parkingUl);
        parkingOverview.appendChild(parkingDiv);
        
    }
});




