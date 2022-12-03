// Assignment Lecture: Values and Variables.

const country = "Russia";
const continent = "Eastern Europe";
let populationRussia = 145000000;

// Assignment Lecture: Data Types.

const isIsland = false;
let language;

//Assignment Lecture: Let, const and var.

language = "Russian";

console.log(isIsland, populationRussia, country, language);

//Assignment Lecture: Basic Operators.

const splitInHalf = populationRussia / 2;
populationRussia++;
const populationFinland = 6000000;
const populationAverageCountry = 33000000;

console.log(splitInHalf, populationRussia,);
console.log(populationRussia > populationFinland);
console.log(populationRussia > populationAverageCountry);

const description = "Russia is in Europe, and its 145 million people speak portuguese";

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