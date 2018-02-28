/********************************************************************* 
* @author     Seppe Roels
* @created    14/02/2018
* @modified   14/02/2018
* @copyright  Copyright © 2016-2017 Artevelde University College Ghent
* @function   Basisoefeningen op prompt, elementen en rekenen
*********************************************************************/
//getallen opvragen via prompt
let getal1 = prompt('Geef uw eerste getal in: ');
let getal2 = prompt('Geef uw tweede getal in: ');
//getallen opschrijven via document.write
const tekst1 = document.write('Uw eerste getal was ' + getal1 + '.');
const tekst2 = document.write('<br>Uw tweede getal was ' + getal2 + '.');
//lengte van de string getal1 weergeven
const lengte = getal1.length;
document.write('<br>Het aantal karatkers in uw  eerste getal is ' + lengte + '.');
//som maken van strings via parseInt en opschrijven
//number() = parseInt(), parseFloat is kommagetal, integer is geen kommagetal
const som = parseInt(getal1) + parseInt(getal2);
document.write('<br>De som van de getallen is ' + som + '.');
//array maken van bankenrijen
let array = ['rood', 'blauw', 'geel', 'groen', 'paars'];
document.write('<br>De eerste, tweede en vijfde bankenrij: ' + array[0] +', ' + array[2] + ', ' + array[4]);
console.log(array.length);
//seconden vragen aan de gebruiker en omzetten naar uren minuten en seconden WIP
//math.floor is afronden, % geeft de rest van een deling
let seconden = prompt('Voor uw aantal seconden in.');
const secondenUur = Math.floor(seconden/3600);
const secondenMinuut = Math.floor(seconden%3600/60);
const secondenSeconden = Math.floor(seconden%60); 
document.write('<br>U heeft ' + seconden + ' seconden ingegeven, omgerekend is dit ' +secondenUur + 'uur, ' + secondenMinuut + 'm en ' + secondenSeconden + 's.');

