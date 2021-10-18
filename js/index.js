// Iteration 1: Names and Input
let hacker1 = "Joshua";
console.log("The driver's name is", hacker1);

let hacker2 = "Vannimmy";

console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator'name is the longest, it has, ${hacker2.length} characters`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The drivers' name is the longest, it has, ${hacker1.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names,  ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let newName = hacker1.toUpperCase();
let newStr = "";
let navBack = "";

for (let i = 0; i < newName.length; i++) {
  newStr = newStr + newName[i];
  newStr = newStr + " ";
}
console.log(newStr);

for (let j = hacker2.length - 1; j >= 0; j--) {
  navBack += hacker2[j];
}
console.log(navBack);

//Lexicographic order

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Section -
//1. words Counter

let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

let wordsCounter = 0;
let etCounter = 0;

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    wordsCounter++;
  }
}
console.log(wordsCounter);

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === "et") {
    etCounter++;
  }
}
console.log(etCounter);

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama";
let phrase = phraseToCheck.length;
let phraseBack = Math.floor(phraseToCheck / 2);

for (let i = phrase; i >= 0; i--) {
  //phraseBack += phraseToCheck[i];
  if (phraseToCheck[i] !== phraseToCheck[phrase - 1 - i]) {
    console.log("hmm");
  } else {
    console.log("this is awesome");
  }
}
