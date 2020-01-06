let a=5;
let b=10;
let c=7;

console.log(`Fitteen id ${a+b} and not ${2 * a + b} labai grazu ${c}`);

console.log(`string text line 1
string text line 2`);
//masyvas
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';
firstName = 'Jolita';

console.log(lastName, firstName, middleName)

//objektas
const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};
//fn ln kintamieji, o personalInformation saltinis
//viena savybe - vienas kintamasis
const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);


//Object literal
function addressMaker(city, state) {
    const newAdress = {city, state};


    console.log(newAdress);
}
addressMaker('Kaunas', 'Lietuva')

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}

//Spread operator

const numbers = [1, 2, 3];
function sum(...nums) {
    console.log(nums);

}
sum(numbers)

function sum(...nums) {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);

}
sum(1,2,3);
