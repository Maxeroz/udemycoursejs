// Assignment Lecture: Values and Variables.
/*
const country = "Russia";
const continent = "Eastern Europe";
const population = 145000000;

console.log(country);
console.log(continent);
console.log(population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Maksim");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

var job = "musician";
job = "teacher";



// Basic Operators

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to power of 3 = 2 * 2 * 2;

const firstName = "Maksim";
const lastName = "Ozerskii"
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // x = 15;
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1 = 101;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18)
console.log(now - 1991 > now - 2018);

const isFullAge = ageSarah >= 18;

// Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge)

// Coding Challenge #1

// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
const marksWeight = 95;
const marksHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const bmiMark = marksWeight / (marksHeight * marksHeight);
const bmiJohn = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);



const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currentYear = 2022;

const jonas = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log("String with \n\
mupltiple \n\
lines");

console.log(`String with
multiple
lines`);
*/

// Taking Decisions: if / else Statements

const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license ????")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)