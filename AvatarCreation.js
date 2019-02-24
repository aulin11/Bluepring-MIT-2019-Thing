let red1 = 000;
let red2 = 000;
let green1 = 000;
let green2 = 000;
let blue1 = 000;
let blue2 = 000;
let plinput1 = null;
let plinput2 = null;
let currentc1 = null;
let currentc2 = null;
window.onload = function init(){
    const pl1 = document.getElementById("player1");
    const pl2 = document.getElementById("player2");
    const array1 = [document.getElementById("rleft"), document.getElementById("gleft"), document.getElementById("bleft")];
    const array2 = [document.getElementById("rright"), document.getElementById("gright"), document.getElementById("bright")];

    const x = setInterval(changePlayers, 1000);
}
function changePlayers(){
    player1.style.backgroundColor = 'rgb(' + red1 + ',' + green1 + '.' + blue1 +')';
    player2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + '.' + blue2 +')';
}
function changeGreen(playerNum, leftOrRight){

}
function changeRed(playerNum, leftOrRight){

}
function changeBlue(playerNum, leftOrRight){

}
function movePlayer1(){
    //change number values based on what is the needed values
    //1-up 2-down 3-left 4-right
    if (plinput1 == 1){

    }
    else if(plinput1 == 2){

    }
    else if(plinput1 == 3){

    }
    else if(plinput1 == 4){

    }
}
function movePlayer2(){
    if (plinput2 == 1){

    }
    else if(plinput2 == 2){

    }
    else if(plinput2 == 3){

    }
    else if(plinput2 == 4){
        
    }
}
//When recieve a scream do t