//oefening 1: controleren of een getal even of oneven is


function evenOneven(){
    let getal = document.getElementById('getal').value;
    console.log(typeof getal);
    if(getal%2==0){
        document.getElementById('getalEvenOneven').innerHTML = "<br>Het getal is even<br>";
    }
    else{
        document.getElementById('getalEvenOneven').innerHTML = "<br>Het getal is oneven<br>";
    }
}
//oefening 2: 3 variabelen declareren en schrijven in de console
let variabelen = [2,4,9];
console.log(variabelen);

//oefening 3: bepalen titel adhv score via een switch


function resultaat(){
    let score = document.getElementById('score').value;
    console.log(typeof score);
    if(score<=50){
        document.getElementById('boodschap').innerHTML = "<br>U bent gebuisd<br>";
    }
    else if(score>=50&&score<=68&&score<77){
        document.getElementById('boodschap').innerHTML = "<br>U bent geslaagd<br>";
    }
    else if(score>=68&&score<=77&&score<85){
        document.getElementById('boodschap').innerHTML = "<br>U bent geslaagd en heeft een onderscheiding<br>";
    }
    else if(score>=77&&score<=85){
        document.getElementById('boodschap').innerHTML = "<br>U bent geslaagd en heeft de grootste onderscheiding<br>";
    }
    else {
        document.getElementById('boodschap').innerHTML = "<br>U bent geslaagd en heeft de grootste onderscheiding. Met felicitaties van de examencomissie<br>";
    }
}
console.log(typeof score);
//oefening 4: meervouden maken van dieren

function pluralizer(){
    let dier = document.getElementById('dier').value;
    let aantalDieren = document.getElementById('aantalDieren').value;
    if(aantalDieren==1){
        document.getElementById('dierBoodschap').innerHTML = `<br>${aantalDieren}<br>`;
    } else{
        document.getElementById('dierBoodschap').innerHTML = '<br>' + aantalDieren + ' ' + dier +'s<br>';
    }
}

//oefening 5: welk getal is het grootst?

function grootsteGetal(){
    let getalVerg1 = document.getElementById('getalVerg1').value;
    let getalVerg2 = document.getElementById('getalVerg2').value;

    if(getalVerg1>getalVerg2){
        let boodschapVerg = document.getElementById('boodschapVerg').innerHTML = '<br> Het eerste getal is het grootst <br>';
    } else{
        let boodschapVerg = document.getElementById('boodschapVerg').innerHTML = '<br> Het tweede getal is het grootst <br>';        
    }
}

//oefening 6: loop, elk getal deelbaar door 3 is bitter, door 7 bitterbal

/*function bitterballen(){
    let begin = document.getElementById('begin').value;
    let einde = document.getElementById('einde').value;

    for(i=begin; i<=einde;i++){
        if (i%3==0){
            document.getElementById('reeks').innerHTML = "<br> bitter <br>";
        } if else(i%7==0){

        }
    }
}*/


