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
