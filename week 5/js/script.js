//oefening 1
function Recipe (naam, porties, ingredienten) {
    this.naam =  naam;
    this.porties =  porties;
    this.ingredienten = ingredienten;
    return this.naam + '<br>' + this.porties + '<br>' + this.ingredienten;
}
document.write(Recipe("bickyburger", 3, ["burger<br>", "bickyajuintjes<br>", "bickysaus<br>", "broodje<br>"]));
document.write(Recipe("croque monsieur", 3 , ["boterham<br>", 'hesp<br>', 'kaas<br>']));

//oefening 2
let books = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        alreadyRead: false
    },
    {
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        alreadyRead: true
    },
    {
        title: 'De verschrikkelijke schoolmeester',
        author: 'Dolf Verroen',
        alreadyRead: true
    }
];

for(i=0; i<books.length; i++){
    console.log(books[i].title);
    if(books[i].alreadyRead == true){
        document.write(`U las reeds het boek ${books[i].title} door ${books[i].author}. <br>`);
    } else{
        document.write(`U heeft het boek ${books[i].title} door ${books[i].author} nog niet gelezen.<br>`);        
    }
}

//oefening 3
function Dogs(breed, name, age, color, gender){
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.color = color;
    this.gender = gender;
    this.birthYear = function (){
        let currentYear = new Date().getFullYear();    
        let yearResult = currentYear - this.age;
        return yearResult;
    }
}
let myDog = new Dogs('cocker spaniel', 'Noor', 6, 'blond', 'vrouw');
let samson = new Dogs("Bearded Collie", "Samson", 27, "grijs en wit",'man', 'gertje');
console.log(myDog.birthYear());
console.log(samson.birthYear());
myDog.name = "Lassie";
console.log(myDog.name);
Dogs.prototype.favoriteToy = 'vos';
console.log(myDog.favoriteToy);