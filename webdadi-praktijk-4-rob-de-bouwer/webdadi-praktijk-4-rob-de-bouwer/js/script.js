allAddBrick = document.querySelectorAll('.add-brick');
allRemoveBrick = document.querySelectorAll('.remove-brick');
console.log(allAddBrick);
console.log(allRemoveBrick);
//functie brick toevoegen
let brickColors = ['yellow', 'black', 'orange', 'blue'];
const createBrick = function (wallId) {
    //element aanmaken & wall id linken aan juiste kleur
    let brick = document.createElement('div');
    let colorNumber = wallId - 1;
    brick.classList.add('brick', `brick-${brickColors[colorNumber]}`);
    //brick toevoegen aan html & de juiste wall
    //wall oproepen & div toevoegen via appendchild
    let wall = document.getElementById(`wall-${wallId}`);
    wall.appendChild(brick);
}

//functie brick verwijderen
const removeBrick = function (wallId) {
    //wall controleren op bricks
    let bricks = document.getElementsByClassName('brick');
    console.log(bricks);
    let wall = document.getElementById(`wall-${wallId}`);
    wall.removeChild(bricks);
}

//loop voor elke add-brick knop & eventlistener toevoegen
for(let i = 0; i<allAddBrick.length; i++){
    allAddBrick[i].addEventListener('click', function(){
        console.log('clicked');
        let wallId = i + 1;
        createBrick(wallId);
    })
}

for (let i = 0; i < allAddBrick.length; i++) {
    allRemoveBrick[i].addEventListener('click', function () {
        let wallId = i;
        removeBrick(wallId);
    })
}