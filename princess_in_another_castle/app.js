let player;

const randomRange = () => {
    player.print()
    if(player && player.gameActive){
        let randomNumber = Math.floor(Math.random() * 3)
        if(randomNumber === 0){
            player.gotHit()
        }else if(randomNumber === 1){
            player.gotPowerUp()
        }else{
            player.addCoin()
        }
    }else{
        clearInterval(playInterval);
    }
}

const playInterval = setInterval(randomRange, 2000);

const randomizer = () => {
    return Math.floor(Math.random() * 2) + 1;
}

class Player {
    constructor(name, totalCoins, status, hasStar = false, gameActive = true){
        this.name = '';
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
        this.setName(name);
    }
    setName = (namePicked) => {
        this.name = namePicked;
    }
    gotHit = () => {
        if(this.status === 'powered up'){
            this.status = 'big';
        }else if(this.status === 'big'){
            this.status = 'small';
        }else{
            this.status = 'dead'
            this.gameActive = false;
        }
    }
    gotPowerUp = () => {
        if(this.status === 'small'){
            this.status = 'big';
        }else if(this.status === 'big'){
            this.status = 'powered up';
        }else{
            this.hasStar = true;
            console.log('You Got A Star')
        }
    }
    addCoin = () => {
        this.totalCoins = this.totalCoins + 1;
    }
    print = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log(`Status: ${this.status}`)
    }
    
}


play = () => {
    let name = randomizer();
    if(name === 1){
        player = new Player('Mario', 0, 'small', false)
    }else{
        player = new Player('Luigi', 0, 'small', false)
    }
    playInterval;
}

play();

