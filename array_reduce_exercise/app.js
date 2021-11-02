const numArr = [1, 2, 3];

const numArrResult = numArr.reduce(function(final, num){
    final += num;
    return final;
}, 0)

console.log(numArrResult);

const numArrToString = numArr.reduce(function(final, sentence){
    final = final.concat(sentence);
    return final
}, '')

console.log(numArrToString);

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voted = voters.reduce(function(final, voter){
    if(voter.voted){
        final += 1;
    }
    return final
}, 0)

console.log(voted);

const wishList = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalCost = wishList.reduce(function(final, cost){
    final += cost.price;
    return final;
}, 0)

console.log(totalCost)


const multArr = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const joinedArr = multArr.reduce(function(final, arr){
    final = final.concat(arr);
    return final;
}, [])

console.log(joinedArr);

const possibleVoters = voters.reduce(function(final, people){
    if((people.age >= 18 && people.age <= 25) && (people.voted === true)){
        final.numYoungVotes ++;
    }
    if(people.age >= 18 && people.age <= 25){
        final.numYoungPeople ++;
    }
    if((people.age >= 26 && people.age <= 35) && (people.voted === true)){
        final.numMidVotesPeople ++;
    }
    if(people.age >= 26 && people.age <= 35){
        final.numMidsPeople ++;
    }
    if((people.age >= 36 && people.age <= 55) && (people.voted === true)){
        final.numOldVotesPeople ++;
    }
    if(people.age >= 36 && people.age <= 55){
        final.numOldsPeople ++;
    }
    return final;
}, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0})

console.log(possibleVoters);