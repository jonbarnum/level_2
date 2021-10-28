const add = document.addition;

add.addEventListener('submit', function(event){
    event.preventDefault();
    let firstNumber = add.num1.value;
    let secondNumber = add.num2.value;
    add.num1.value = '';
    add.num2.value = '';
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    const adding = document.getElementById('addResult');
    adding.textContent = sum;
})

const sub = document.subtraction;

sub.addEventListener('submit', function(event){
    event.preventDefault();
    let firstNumber = sub.num1.value;
    let secondNumber = sub.num2.value;
    sub.num1.value = '';
    sub.num2.value = '';
    let sum = parseInt(firstNumber) - parseInt(secondNumber);
    const subtracting = document.getElementById('subResult');
    subtracting.textContent = sum;
})

const mult = document.multiplication

mult.addEventListener('submit', function(event){
    event.preventDefault();
    let firstNumber = mult.num1.value;
    let secondNumber = mult.num2.value;
    mult.num1.value = '';
    mult.num2.value = '';
    let sum = parseInt(firstNumber) * parseInt(secondNumber);
    const multiplying = document.getElementById('multResult');
    multiplying.textContent = sum;
})
