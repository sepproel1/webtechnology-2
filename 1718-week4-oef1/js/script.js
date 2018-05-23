const highlightStuff = function () {
    let allStrong = document.getElementsByTagName('strong');
    let allSpan = document.getElementsByTagName('span');
    document.getElementById('hover').classList.add('pink');
    for (i=0; i<allStrong.length; i++){
        allStrong[i].classList.add('orange');
    }
    for (i = 0; i < allSpan.length; i++) {
        allSpan[i].classList.add('purple');
    }
}

const unHighlightStuff = function () {
    let allStrong = document.getElementsByTagName('strong');
    let allSpan = document.getElementsByTagName('span');
    document.getElementById('hover').classList.remove('pink');
    for (i = 0; i < allStrong.length; i++) {
        allStrong[i].classList.remove('orange');
    }
    for (i = 0; i < allSpan.length; i++) {
        allSpan[i].classList.remove('purple');
    }
}
// [i] toevoegen want je spreekt een array aan!
document.getElementById('hover').addEventListener("mouseover", highlightStuff);
document.getElementById('hover').addEventListener("mouseout", unHighlightStuff);
