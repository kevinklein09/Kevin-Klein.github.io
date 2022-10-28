// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22,
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time) {
    let newString = greeting + " " + location + " " + time;
    console.log(newString);
};



// 2.
var contestants = function() {
    return dogs.length;

};



// 3.
var filterSpecies = dogs.filter(function(dogs){
    if(dogs.species === 'dog') {
        return dogs;
    }
});




// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(function(object){
    if(object.weight >= 0 && object.weight <= 10) {
        object.class = 'red';
    } else if(object.weight >= 11 && object.weight <= 20) {
        object.class = 'yellow';
    } else if(object.weight > 21) {
        object.class = 'green';
    }
    return object;
});
    


// 6.
var firstInClass = function(array, newObj={}){
    //base
    if(array.length === 0) {
        return newObj;
    }
    //recursion
    newObj = {...newObj, ...array[0]}
    // Object.assign(newObj, array[0]); could also use this method
    return firstInClass(array.slice(1), newObj);
};



// 7.
var votes = dogs.reduce(function(acc, curr){
    acc += curr.votes;
    return acc;
}, 0);
