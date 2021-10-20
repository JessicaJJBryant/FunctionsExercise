// FUNCTIONS EXERCISE

// 1.
function spookyGhost() {
    console.log("Boo!!!");
}
spookyGhost();

// 2.
// function candy(goal) {
//     console.log(`${goal}! ${goal}!`); This way puts it in a template literal. It's not wrong, but the below way is easier.
//     console.log(`${goal}! ${goal}!`);
// }
// candy(`Get Candy`);
//   2 should be done this way:
  function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
//     // OR
//     // console.log(goal, goal, goal, goal);
}
  candy(`Get Candy`);

// 3.
function werewolf(a, b) {
    if (a === "Full" && b === "Moon") {
        console.log(`ARH-WOOO!`);
    } 
// Using a Ternary--right after the console.log is the ternary starting with the condition. Then comes the question mark. The first value after will be what runs if it's true. Then a colon. The second value will be what runs if false (empty string).
    // console.log((a === `Full` && b === `Moon`) ? `ARH-WOOO!` : ""(or null)); 
}
werewolf("Full", "Moon");  
  werewolf(`Full`, `Moon`); // ARH-WOOO!
  werewolf(`Crescent`, `Moon`); // Does NOT display anything in the terminal/console
  
// 4.
function halloween() {
    return "October 31st";
}
halloween(); // Does NOT display anything in the terminal/console
  console.log(halloween()); // October 31st

// 5.
function isEnoughCandy(pieces) {
    if (pieces >= 31) {
        return true;
    }
    return false;
}
let enough = isEnoughCandy(200);
console.log(enough);
  
    // Using a Ternary--right after the return is the ternary starting with the condition. Then comes the question mark. The first value after will be what runs if it's true (true). Then a colon. The second value will be what runs if false (false).
    // return (pieces >= 31) ? true : false;
console.log(isEnoughCandy(31)); // true
console.log(isEnoughCandy(5)); // false
  
// 6.
let totalCandy = 0;
function candyCounter(nums) {
    // let totalCandy = 0; this could go here instead
    for (i=0; i < nums.length; i++) {
        totalCandy += nums[i]
    }
    return totalCandy;
    // Using a For Of Loop (he said we could do it with a while loop too)
    // let total = 0;
    // for(number of nums){
    //   total += number;
    // }
    // return total;
}
// I had the following three lines, but I didn't really need them. Can pass in the array directly. And it can be of any length and give the answer. POWER of COMPUTERS!!! PUNY HUMAN!!!
// const array = [300, 262, 400, 600];
// let yum = candyCounter(array);
// console.log(yum);
console.log(candyCounter([1, 2, 3])); // 6
console.log(candyCounter([1, 3])); // 4

// 7.
const hauntedMansion = function() {
// OR const hauntedMansion = () => {
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

// 8.
ghostbusters = () => "Who You Gonna Call?";
// Using parentheses
// ghostbusters = () => (
//   `Who You Gonna Call?`
// );

console.log(ghostbusters()); // Who You Gonna Call?

// 9. no (correct--if a variable is declared inside of a function, loop, or conditional, then the scope is only inside)

// 10. yes (correct--if a variable is declared inside of a function, then the scope is only inside BUT if the function is run outside, the scope then becomes global)

// 11a. 
const costumes = ["Ghost", "Princess", "Pirate"];
// 11b.
const upperCostumes = costumes.map(i => i.toUpperCase());

// Using a Declaration Function
// const upperCostumes = costumes.map(function(i){
//   return i.toUpperCase();
// });
console.log(upperCostumes); // [ 'GHOST', 'PRINCESS', 'PIRATE' ]
(edited)


// BONUS
// 12a.
const stephenKingMovies = [
    "The Shining",
    "Christine", 
    "It", 
    "The Mist", 
    "Creepshow",
    "Pet Cemetary"
];
// 12b.  // The n could be an i or any other letter.
const twoMovies = stephenKingMovies.filter(n => n.length === 9 );
console.log(twoMovies);

// 13a.
const halloweenSongs1 = [
    "Monster Mash",
    "Thriller"
];
// 13b.
const halloweenSongs2 = [
    "I Put A Spell On You", 
    "This Is Halloween", 
    "Ghostbusters"
];
// 13c.
halloweenJukeBox = songs => {
    const random = Math.floor(Math.random() * songs.length);
    console.log(songs[random]);
  }
// 13d
halloweenJukeBox(halloweenSongs1); // Random item/song from the halloweenSongs1 array
halloweenJukeBox(halloweenSongs2); // Random item/song from the halloweenSongs2 array

// 14
caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
      if (i % 2 === 0){
        newString = newString + string[i].toUpperCase();
      } else {
        newString = newString + string[i];
      }
    }
    return newString;
  }
  
  console.log(caps(`Hey`)); // HeY
  console.log(caps(`Halloween`)); // HaLlOwEeN
  
  // Using the substring method (Returns part of the string between the start and end indexes that are specified. Also, if a second index is not specified the the rest of the string is included)
  // caps = string => {
  //   for (i = 0; i < string.length; i += 2){
  //     string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
  //   }
  //   return string;
  // }
  
  // This example accounts for multi word string arguments (AKA Strings with spaces)...
  /*
  caps = string => {
    let newString = ``;
    let num = 0;
    for (letter of string){
      if (letter !== " "){
        if (num % 2 === 0){
          newString += letter.toUpperCase();
          num++;
        } else {
          newString += letter.toLowerCase();
          num++;
        }
      } else {
        newString += letter;
      }
    }
    return newString;
  }
  */
  
// console.log(caps(`Happy Halloween`));