let click = document.getElementById('clickOnScreen');
let numOfClicks = parseInt(localStorage.getItem('numberOfClicks')) || 0;

click.addEventListener("click", function(event){
    event.preventDefault();
    numOfClicks = numOfClicks + 1;
    let showClick = document.getElementById('timesClicked');
    localStorage.setItem('numberOfClicks', numOfClicks);
    showClick.textContent = `Number of Clicks ${numOfClicks}`;
}, true)

