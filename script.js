var startButton = document.getElementById('start');

var cardImage1 = document.getElementById('card1');
var cardImage2 = document.getElementById('card2');
var cardImage3 = document.getElementById('card3');

var closedCardPath= ('./img/card1.png');
var deathCardPath = ('./img/la_mort.png');
var loverCardPath = ('./img/l_amoureux.png');
var strenghtCardPath = ('./img/la_force.png');

var numClosedCards = 2;

var card

var returnCard1
var returnCard2
var returnCard3

var gameOver
var playcard

var isDeath = (card) => {
    if(card.src === deathCardPath){
        return true;
    }
    else {
        return false;
    }
}

var isClicked = (card) =>{
    if(card.src === closedCardPath){
        return false;
    }
    else{
        return true;
    }
}

var gameOver = (status) => {
    if(status === 'win'){
        startButton.innerHTML = "Vous avez gagné ! Rejouer ? ";
    }
    // else if () {
    //     startButton.innerHTML = "Perdu ! Vous avez ouvert la boite de Pandore";
    // }

}

var playcard = () => {
    numClosedCards--;
    if(numClosedCards === 0){
        gameOver('win');
    }
    else if (card === isDeath) {
        gameOver();
    }
}

var randomDoorGenerator = () => {
    var deathDoor = Math.floor(Math.random() * numClosedCards);
    if(deathDoor === 0){
        returnCard1 = deathCardPath;
        returnCard2 = loverCardPath;
        returnCard3 = strenghtCardPath;
    }
    else if(deathDoor === 1){
        returnCard2 = deathCardPath;
        returnCard1 = strenghtCardPath;
        returnCard3 = loverCardPath;
    }
    else{
        returnCard3 = deathCardPath;
        returnCard1 = loverCardPath;
        returnCard2 = strenghtCardPath;
    }
}

cardImage1.onclick = () => { 
    cardImage1.src = returnCard1;
    if(!isClicked(cardImage1)){
        playcard();
    }
    

}

cardImage2.onclick = () => {
    cardImage2.src = returnCard2;
    if(!isClicked(cardImage2)){
        playcard();
    }
    

}

cardImage3.onclick = () => {
    cardImage3.src = returnCard3;
    if(!isClicked(cardImage3)){
        playcard();
    }
    
    
}




randomDoorGenerator()