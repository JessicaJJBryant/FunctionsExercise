// FUNCTIONS EXERCISE

// 1.
function spookyGhost() {
    console.log("Boo!!!");
}
spookyGhost();

// 2.
function candy(goal) {
    console.log(`${goal}! ${goal}!`);
    console.log(`${goal}! ${goal}!`);
}
candy(`Get Candy`);

// 3.
function werewolf(a, b) {
    if (a === "Full" && b === "Moon") {
        console.log(`ARH-WOOO!`);
    }  
}
werewolf("Full", "Moon");

// 4.
function halloween() {
    return "October 31st";
}
halloween();

// 5.
function isEnoughCandy(pieces) {
    if (pieces >= 31) {
        return true;
    }
    return false;
}
let enough = isEnoughCandy(200);
console.log(enough);

// 6.
let totalCandy = 0;
function candyCounter(nums) {
    for (i=0; i < nums.length; i++) {
        totalCandy += nums[i]
    }
    return totalCandy;
}
const array = [300, 262, 400, 600];
let yum = candyCounter(array);
console.log(yum);


// 7.
const hauntedMansion = function() {
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

// 8.
ghostbusters = () => "Who You Gonna Call?";


// 9. no

// 10. yes

// 11a. 
const costumes = ["Ghost", "Princess", "Pirate"];
// 11b.



// BONUS
// 12a
const stephenKingMovies = [
    "The Shining",
    "Christine", 
    "It", 
    "The Mist", 
    "Creepshow",
    "Pet Cemetary"
];
// 12b
const twoMovies = stephenKingMovies.filter(n => n.length === 9 );
console.log(twoMovies);

// 13a
const halloweenSongs1 = [
    "Monster Mash",
    "Thriller"
];
// 13b
const halloweenSongs2 = [
    "I Put A Spell On You", 
    "This Is Halloween", 
    "Ghostbusters"
];



// 11b. Using the Map method on the costumes array, create an anonymous declaration function to pass as an argument for the Map method that changes the letters of each array item to uppercase. Also, set the returned value to a new const variable called upperCostumes.
// BONUS…
// 13c. Create an arrow function called halloweenJukeBox with a parameter called songs that accepts an array of strings for an argument. Inside the function use Math.random() and console log to have the value of a random item (AKA Song) in the array that is passed in display in the console/terminal (NOTE: You will need more than just Math.random and a console log to complete this)
// 13d. Run/execute the halloweenJukeBox function twice (Passing halloweenSongs1 as the argument for the first one and halloweenSongs2 for the second)
// 14. Create an arrow function called caps with a parameter called string that accepts a string argument and RETURNS a new string value with every other letter capitalized starting with the first letter.