// no error will be thrown on how this is set up due to both of those being numbers. however, if you substitute one of numbers on line 11 with a string or something else then error code on line 4 is thrown 
function sum(x, y){
    if((typeof x !== 'number') || (typeof y !== 'number')){
        throw new Error('I am an error');
    }else{
        return x + y;
    }
}

try{
    console.log(sum(1, 2))
}
catch(err){
    console.log(err)
}
finally{
    console.log('I win')
}

// if you change one of the arguments on line 31 then error code on line 24 will be thrown
let user = {username: "sam", password: "abe123"}
function login(username, password){
    if((username !== 'sam') || password !== "abc123"){
        throw new Error('Nope, not correct')
    }else{
        return 'You logged in'
    }
}

try{
    login('sam', '123abc')
}
catch(err){
    console.log(err)
}
finally{
    console.log('all done')
}