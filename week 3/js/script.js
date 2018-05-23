//oefening 1
//loop gebruiken odmat we een aantal keer een functie moeten doolopen
let drawMountain = function (count){
    let strResult='/';
    for(i=0; i<=count; i++){
        strResult += "'";
    }
    strResult += '\\';
    return strResult;
}

let drawFlatArea = function(count){
    let strResult='';
    for(i=0; i<=count; i++){
        strResult += "_";
    }
    strResult += '';
    return strResult;
}

document.getElementById('result').innerHTML = drawMountain(3) + drawFlatArea(6) + drawMountain(500);

//oefening 5: wachtwoord
const secretPassword = 'Nooreman1';
let userPassword = prompt('Geef uw wachtwoord in');
let timesGuessed = 0;
do{
    userPassword = prompt('fout, geef een ander wachtwoord in');
    timesGuessed++;
}while(userPassword!==secretPassword);
document.getElementById('message').innerHTML = 'Welkom, u heeft '+timesGuessed+ ' keer geraden';



