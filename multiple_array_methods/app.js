const peopleArr = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const greaterThanEighteen = peopleArr.filter(function(people){
    if(people.age >= 18){
        return true;
    }
})

const alphabeticallyLastName = greaterThanEighteen.sort(function(a, b){
    if(a.lastName < b.lastName){
        return -1;
    }
    if(a.lastName > b.lastName){
        return 1;
    }
    return 0;
})

const nameAndAge = alphabeticallyLastName.map(function(namesAndAgeListItems){
    return `<li>${namesAndAgeListItems.firstName} ${namesAndAgeListItems.lastName} is ${namesAndAgeListItems.age}</li>`
})

console.log(nameAndAge);