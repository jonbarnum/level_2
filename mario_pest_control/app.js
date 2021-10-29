let form = document.badGuysCaught;

form.addEventListener('submit', function(event){
    event.preventDefault();
    let numOfGoombas = form.goombas.value * 5;
    let numOfBombs = form.bob_ombs.value * 7;
    let numOfCheep = form.cheep_cheeps.value * 11;
    let sum = numOfGoombas + numOfBombs + numOfCheep;
    const totalPrice = document.getElementById('total');
    totalPrice.textContent = sum + " " + 'coins';
})