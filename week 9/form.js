//button die alles controleerd
let btnSubmitForm = document.getElementById('submitForm');
btnSubmitForm.addEventListener('click', function (event) {
    
    //standaardactie event blokkeren
    event.preventDefault();
    
    //alle values ophalen
    let shirtVal = document.getElementById('tshirtMol').pattern;
    let ageMin = document.getElementById('ageMol').min;
    let ageMax = document.getElementById('ageMol').max;
    let emailVal = document.getElementById('emailMol').value;
    let argumentVal = document.getElementById('argumentMol').value;

    //alles controleren
    if(shirtVal==""|"false"){
        document.body.innerHTML = "Geef een correcte kleur op. Volgende kleuren zijn correct: rood, groen, geel, grijs.";
    }
    if (ageMin <= "" | "false") {
        document.body.innerHTML = "Geef een correcte leeftijd op. Volgende leeftijden zijn correct: 21-62.";
    }
    if (emailVal == "" | "false") {
        document.body.innerHTML = "E-mail moet eindigen op @demol.be";
    }
    if(argumentVal==""|"false"){
        document.body.innerHTML = "Je moet minstens 100 karakters gebruiken in je argument."
    }
})