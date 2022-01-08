// 1
console.log(hello); // undefined
var hello = 'world';

// 2
var needle = 'haystack';
test() // magnet
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // super cool

// 4
var food = 'chicken';
console.log(food); // chicken
eat() // half-chicken
function eat() {
    food='half-chicken';
    console.log(food);
    var food ='gone';
}

// 5
mean(); // break - typeError mean is not a function
console.log(food);
var mean = function() {
    food = 'chicken';
    console.log(food);
    var food ='fish';
    console.log(food);
}
console.log(food);

// 6
console.log(genre); // undefined
var genre = 'disco';
function rewind() {
    genre = 'rock';
    console.log(genre)
    var genre = 'r&b';
    console.log(genre);
}
console.log(genre); // disco

// 7
dojo = 'san jose';
console.log(dojo); // san jose
learn();
function learn() {
    dojo = 'seattle';
    console.log(dojo) // seattle
    var dojo = 'burbank';
    console.log(dojo); // burbank
}
console.log(dojo); // san jose

// 8
console.log(makeDojo("chicago", 65));
// {'name': 'chicago', 'students': 65, 'hiring': true}
console.log(makeDojo('Berkeley', 0));
// typeError because const dojo is an object canNOT change to dojo = "closed for now"

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students=students;
    if(dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students<=0) {
        dojo ="closed for now";
    }
    return dojo;
}