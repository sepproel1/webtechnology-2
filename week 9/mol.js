//controleren of deze sessie al bestaat
if(sessionStorage['mol']){
    //sessie bestaat
    document.body.innerHTML = `de mol is ${sessionStorage.getItem('mol')}.`;
}else{
    //sessie bestaat niet
    //button maken en enkel als hij klikt value toevoegen aan de session storage
    let btnsubmitMol = document.getElementById('sumbitmol');
    btnsubmitMol.addEventListener('click', function (event) {
        let inputveld = document.getElementById('mol').value;
        sessionStorage.setItem('mol', inputveld);
        document.write(`${inputveld} is de mol`);
    })
}






