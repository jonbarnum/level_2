function collectAnimals(...animals){
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

const combinedFruit = (fruit, sweets, vegetables) => {
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combinedFruit(['apple', 'pear'], ['cake', 'pie'], ['carrot']))


const vacation = {
    location: 'Burley Idaho',
    duration: '2 weeks'
}

function parseSentece({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`;
}

console.log(parseSentece(vacation));

// if you want to find the second index then do const [,secondItem] = items
function returnFirst(items){
    const [firstItem] = items
    return firstItem
}

console.log(returnFirst(['computer', 'mouse', 'desktop', 'mousepad']))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities;
    return `My top three favorite activities are: ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites())

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

function combineAnimals() {
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

console.log(combineAnimals())

function product(...numbers) {
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
}

function unshift(array, ...letters) {
    return [...letters, ...array];
}

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,
            lastName,
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))