//de eerste form selecteren via tagname
let form = document.getElementsByTagName("form")[0];
let password = document.getElementById("password");

//eventlistener toevoegen aan "form"
form.addEventListener("submit", function(event){
    //hier gebeurt de validatie van het formulier voor het formulier verzonden wordt

    event.preventDefault();//standaardactie van event blokkeren
    //let regex = /[a-z]{8,20}/; minstens 8 letters en alle letters lowercase & uppercase
    //let regex = /^[a-z]{8,20}; moet beginnen met 8-20 letters
    //let regex = /[a-z]{8,20}; moet eindigen met 8-20 letters
    let regex = /^[A-Z]+[0-9]+.{6,10}$/; //moet beginnen met 1 letter, volgen met 1 cijfer en daarna mag alles
    console.log(regex.test(password.value));
})