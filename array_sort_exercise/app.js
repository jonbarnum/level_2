const numArr = [1, 3, 5, 2, 90, 20];

// numArr.sort(function(a, b){
//     return a - b;
// })

numArr.sort((a, b) => a - b);

console.log(numArr);

numArr.sort((c, d) => d - c);

console.log(numArr);

const randomWords = ['dog', 'wolf', 'by', 'family', 'eaten'];

randomWords.sort(function(a , b){
    return a.length - b.length;
})

console.log(randomWords);

randomWords.sort(function(c, d){
    if (c < d){
        // stack overflow: if first argument is less than second it should be place before the second, if first argument is greater then it should be placed after the second one
        return -1;
    }
    if (c > d){
        return 1;
    }
    return 0;
})

console.log(randomWords);

const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

// people.sort(function(a, b){
//     return a.age - b.age;
// })
people.sort((a , b) => a.age - b.age);

console.log(people);