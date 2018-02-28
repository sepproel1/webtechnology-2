// resultaat halen
//alles in een function steken zodat het controleerd als de knop ingedrukt wordt
let checkResult = function (){
let resultaat1 = document.getElementById('result1').value;
let resultaat2 = document.getElementById('result2').value;
let resultaat3 = document.getElementById('result3').value;

//waarde popcorn bepalen adhv bewerkingen
let popcorn = resultaat1/3;
console.log(popcorn);
let hamburger = (13-popcorn)/2;
console.log(hamburger);
let donut = (19-hamburger)/4;
console.log(donut);

//oefening uitvoeren
let resultaat = hamburger+donut*popcorn;
console.log(resultaat);
//resultaat van de gebruiker
let userResult = document.getElementById('result4').value;
    if(resultaat==userResult){
    document.getElementById('message').innerHTML = 'well done';
    } else{
        document.getElementById('message').innerHTML = 'fail, try again';
    }
}

let fillForm = 


document.getElementById('check').addEventListener('click', checkResult);