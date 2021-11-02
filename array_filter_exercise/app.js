const numberArr = [3, 6, 8, 2];

// const numberArrResult = numberArr.filter(function(greaterNumber){
//     if (greaterNumber > 5){
//         return true;
//     }
// })

const numberArrResult = numberArr.filter(greaterNumber => greaterNumber > 5);

console.log(numberArrResult);

// const evenNumbers = numberArr.filter(function(even){
//     if(even % 2 === 0){
//         return true;
//     }
// })

const evenNumbers = numberArr.filter( even => even % 2 === 0);

console.log(evenNumbers);

const words = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']

// const onlyFiveCharacters = words.filter(function(five){
//     if(five.length <= 5){
//         return true;
//     }
// })

const onlyFiveCharacters = words.filter(five => five.length <= 5);

console.log(onlyFiveCharacters);

const illuminatiMembers = [
    {
        name: 'Angelina Jolie',
        member: true,
    },
    {
        name: 'Eric Jones',
        member: false,
    },
    {
        name: 'Paris Hilton',
        member: true,
    },
    {
        name: 'Kayne West',
        member: false,
    },
    {
        name: 'Bob Ziroll',
        member: true,
    }
]

// const members = illuminatiMembers.filter(function(member){
//     if(member.member === true){
//         return member.name;
//     }
// })

const members = illuminatiMembers.filter(member => member.member === true);

console.log(members);

const illuminatiMembersAndAge = [
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

// const memebrsWithAge = illuminatiMembersAndAge.filter(function(membersAndAge){
//     if(membersAndAge.age > 18){
//         return true;
//     }
// })

const memebrsWithAge = illuminatiMembersAndAge.filter(membersAndAge => membersAndAge.age >= 18);

console.log(memebrsWithAge);