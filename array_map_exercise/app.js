const numArr = [2, 5, 100];
const numArrResult = numArr.map(function(num){
    return num * 2;
})

console.log(numArrResult);

const numString = [2, 5, 100];
const numStringResult = numString.map(function(numToString){
    return `${numToString}`;
})

console.log(numStringResult);

const nameArr = ['john', 'JACOB', 'Jingleheimer', 'Schmidt']
const nameArrResult = nameArr.map(function(name){
    // w3 school: the charAt() returns the character at a specified index in the String.
    // w3 school: slice() method returns selected elements in an Array, as a new Array, selects the element starting at the given start arguments, and ends at, but does not include, the given end arguments. does not change the original aray
    // change everything to lowercase first
    let lowerName = name.toLowerCase();
    return lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
})

console.log(nameArrResult);

const famousPeople = [
    {
        name: 'Angelina Jolie',
        age: 80,
    },
    {
        name: 'Eric Jones',
        age: 2,
    },
    {
        name: 'Paris Hilton',
        age: 5,
    },
    {
        name: 'Kayne West',
        age: 16,
    },
    {
        name: 'Bob Ziroll',
        age: 100,
    }
]

const fullNames = famousPeople.map(function(fullName){
    return fullName.name;
})

console.log(fullNames);

const goToMatrix = famousPeople.map(function(matrix){
    if(matrix.age > 18){
        return (`${matrix.name} can go to the Matrix`);
    }else{
        return(`${matrix.name} is under age!!!`);
    }
})

console.log(goToMatrix);

const headings = famousPeople.map(function(nameHeadings){
    return `<h1>${nameHeadings.name}</h1><h2>${nameHeadings.age}</h2>`;
})

console.log(headings);