//1-up 2-down 3-left 4-right
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
let scream = 0;
let p1direction = 4;
let p2direction = 3;
let stageNum = null;
let p1lives = 5;
let p2lives = 5;
let attacksdown = [];
let attacksup = [];
let attacksright = [];
let attacksleft = [];
window.onload = function init(){
    const pl1 = document.getElementById("player1");
    const pl2 = document.getElementById("player2");
    const array1 = [document.getElementById("rleft"), document.getElementById("gleft"), document.getElementById("bleft")];
    const array2 = [document.getElementById("rright"), document.getElementById("gright"), document.getElementById("bright")];
    currentc1 = 1;
    currentc2 = 1;
    array1[currentc1].style.border = "thick solid #F1E538";
    array2[currentc2].style.border = "thick solid #F1E538";
    const x = setInterval(changePlayers, 1000);
    const y = setInterval(movePlayer1, 100);
    const z = setInterval(movePlayer2, 100);
}
function changePlayers(){
    player1.style.backgroundColor = 'rgb(' + red1 + ',' + green1 + '.' + blue1 +')';
    player2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + '.' + blue2 +')';
    if (scream == 1){
        endCreation();
    }
}
function changeGreen(playerNum, right){
    if(right == true){
        if(playerNum == player1){
            if(green1 + 10 < 255){
                green1 = green1 + 10;
            }
        }
        else{
            if(green2 + 10< 255){
                green2 = green2 + 10;
            }
        }
    }
    else{
        if(playerNum == player1){
            if(green1 - 10> 0){
                green1 = green1 - 10;
            }
        }
        else{
            if(green2 - 10 > 0){
                green2 = green2 - 10;
            }
        }
    }
}
function changeRed(playerNum, right){
    if(right == true){
        if(playerNum == player1){
            if(red1 + 10 < 255){
                red1 = red1 + 10;
            }
        }
        else{
            if(red2 + 10 < 255){
                red2 = red2 + 10;
            }
        }
    }
    else{
        if(playerNum == player1){
            if(red1 - 10 > 0){
                red1 = red1 - 10;
            }
        }
        else{
            if(green2 - 10 > 0){
                red2 = red2 - 10;
            }
        }
    }
}
function changeBlue(playerNum, right){
    if(right == true){
        if(playerNum == player1){
            if(blue1 + 10< 255){
                blue1 = blue1 + 10;
            }
        }
        else{
            if(blue2 + 10< 255){
                blue2 = blue2 + 10;
            }
        }
    }
    else{
        if(playerNum == player1){
            if(blue2 - 10> 0){
                blue2 = blue2 - 10;
            }
        }
        else{
            if(blue2 - 10 > 0){
                blue2 = blue2 - 10;
            }
        }
    }
}
function movePlayer1(){
    //change number values based on what is the needed values
    //1-up 2-down 3-left 4-right
    if (plinput1 == 1){
        if(currentc1 != 0){
            array1[currentc1].style.border = "None";
            currentc1 = currentc1 - 1;
            array1[currentc1].style.border = "thick solid #F1E538";
        }
    }
    else if(plinput1 == 2){
        if(currentc1 != 2){
            array1[currentc1].style.border = "None";
            currentc1 = currentc1 + 1;
            array1[currentc1].style.border = "thick solid #F1E538";
        }
    }
    else if(plinput1 == 3){
        if(currentc1 == 0){
            changeRed(player1, false);
        }
        else if(currentc1 == 1){
            changeGreen(player1, false);
        }
        else if(currentc1 == 2){
            changeBlue(player1, false);
        }
        else{
            currentc1 = 1;
        }
    }
    else if(plinput1 == 4){
        if(currentc1 == 0){
            changeRed(player1, true);
        }
        else if(currentc1 == 1){
            changeGreen(player1, true);
        }
        else if(currentc1 == 2){
            changeBlue(player1, true);
        }
        else{
            currentc1 = 1;
        }
    }
}
function movePlayer2(){
    if (plinput2 == 1){
        if(currentc2 != 0){
            array2[current2].style.border = "None";
            currentc2 = currentc2 - 1;
            array2[current2].style.border = "thick solid #F1E538";
        }
    }
    else if(plinput2 == 2){
        if(currentc2 != 2){
            array2[current2].style.border = "None";
            currentc2 = currentc2 + 1;
            array2[current2].style.border = "thick solid #F1E538";
        }
    }
    else if(plinput2 == 3){
        if(currentc2 == 0){
            changeRed(player2, false);
        }
          else if(currentc2 == 1){
            changeGreen(player2, false);
        }
        else if(currentc2 == 2){
            changeBlue(player2, false);
        }
        else{
            currentc2 = 1;
        }
    }
    else if(plinput2 == 4){
        if(currentc2 == 0){
            changeRed(player2, true);
        }
        else if(currentc2 == 1){
            changeGreen(player2, true);
        }
        else if(currentc2 == 2){
            changeBlue(player1, true);
        }
        else{
            currentc2 = 1;
        }
    }
}
//When recieve a scream
function endCreation(){
    if(pl1.style.backgroundColor != pl2.style.backgroundColor){
        if(pl1.style.backgroundColor == "rgb(0, 0, 0)"){
            blue1 = blue1 + 10;
            player1.style.backgroundColor = 'rgb(' + red1 + ',' + green1 + '.' + blue1 +')';
        }
        if(pl2.style.backgroundColor == "rgb(0, 0, 0)"){
            blue2 = blue2 + 10;
            player2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + '.' + blue2 +')';
        }
        if(pl1.style.backgroundColor == "rgb(120, 120, 120)"){
            blue1 = blue1 + 10;
            player1.style.backgroundColor = 'rgb(' + red1 + ',' + green1 + '.' + blue1 +')';
        }
        if(pl2.style.backgroundColor == "rgb(120, 120, 120)"){
            blue2 = blue2 + 10;
            player2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + '.' + blue2 +')';
        }
        document.getElementsByClassName("chooseYourColor").display = "none";
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
        currentc1 = null;
        currentc2 = null;
        gameStart()
    }
    else{
        if(blue2 + 10 < 255){
            blue2 = blue2 + 10;
        }
        else{
            blue2 = blue2 - 10;
        }
        player2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + '.' + blue2 +')';
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
        currentc1 = null;
        currentc2 = null;
        gameStart()
    }
}
function gameStart(){
    document.getElementById("TextOnScreen").innerHTML = "Player 1, choose your stage."
    stageNum = plinput1;
    runningoutofnames = setInterval(setStage(), 1000);
}
function shoot(playerNum, direction){
    if(playerNum == player1){
        let ack = document.getElementById("attackp1");
        clone = ack.cloneNode(true);
        document.body.appendChild(clone);
        if(direction == 1){
            attacksup.push(clone);
        }
        else if(direction == 2){
            attacksdown.push(clone);
        }
        else if(direction == 3){
            attacksleft.push(clone);
        }
        else if(direction == 4){
            attacksright.push(clone);
        }
    }
    else{
        let ack = document.getElementById("attackp2");
        clone = ack.cloneNode(true);
        document.body.appendChild(clone);
        if(direction == 1){
            attacksup.push(clone);
        }
        else if(direction == 2){
            attacksdown.push(clone);
        }
        else if(direction == 3){
            attacksleft.push(clone);
        }
        else if(direction == 4){
            attacksright.push(clone);
        }  
    }
}
function itsRaining(){
    let pos = Math.floor(Math.random() * (100));
    let aaaaa = document.getElementById("itsraining");
    clone = aaaaa.cloneNode(true);
    clone.style.left = pos + "%";
    clone.style.top = "0px";
    document.body.appendChild(clone);
    attacksdown.push(clone);
}
function setStage(){
    if(stageNum == 1){
    }
    else if(stageNum == 2){
    }
    else if(stageNum == 3){
    }
    else if(stageNum == 4){
        
    }
    if(stageNum != null){
    clearInterval(runningoutofnames);
    p1shoot = setInterval(shoot(pl1, p1direction), 1000);
    p2shoot = setInterval(shoot(pl2, p2direction), 1000);
    frames = setInterval(updateFrame(), 1000);
    checkMissiles = setInterval(die(), 1000);
    checkDamage = setInterval(oop(), 1000);
    }
}
function oop(){
    if(pl1.style.top == 0){
        p1lives = p1lives - 1;
    }
    else if(pl1.style.left == 0){
        p1lives = p1lives - 1;
    }
    else if(pl1.style.bottom == 0){
        p1lives = p1lives - 1;
    }
    else if(pl1.style.right == 0){
        p1lives = p1lives -1;
    }

    if(pl2.style.top == 0){
        p2lives = p2lives - 1;
    }
    else if(pl2.style.left == 0){
        p2lives = p2lives - 1;
    }
    else if(pl2.style.bottom == 0){
        p2lives = p2lives - 1;
    }
    else if(pl2.style.right == 0){
        p2lives = p2lives -1;
    }
}
function updateFrame(){
    for(i=0; i<attacksup.length; i++){
        attacksup[i].style.top = attacksup[i].style.top - "10";
    }
    for(i=0; i<attacksdown.length; i++){
        attacksdown[i].style.down = attacksdown[i].style.top + "10";
    }
    for(i=0; i<attacksleft.length; i++){
        attacksleft[i].style.left = attacksleft[i].style.left - "10";
    }
    for(i=0; i<attacksright.length; i++){
        attacksright[i].style.left = attacksright[i].style.left + "10";
    }
    if(pl1input == 1){
        pl1.style.top = pl1.style.top - "10"
    }
    if(pl1input == 2){
        pl1.style.top = pl1.style.top + "10"
    }
    if(pl1input == 3){
        pl1.style.top = pl1.style.top - "10"
    }
    if(pl1input == 4){
        pl1.style.top = pl1.style.top + "10"
    }
    if(p1lives == 0){
        GameOver();
    }
    if(p2lives == 0){
        GameOver();
    }
}
function die(){
    for(i=0; i<attacksup.length; i++){
        if(attacksup[i].style.bottom == 0){
            attacksup.style.display = "none";
        }
    }
    for(i=0; i<attacksdown.length; i++){
        if(attacksdown[i].style.top == 0){
            attacksdown.style.display = "none";
        }
    }
    for(i=0; i<attacksleft.length; i++){
        if(attacksleft[i].style.right == 0){
            attacksleft.style.display = "none";
        }
    }
    for(i=0; i<attacksright.length; i++){
        if(attacksright[i].style.left == 0){
            attacksright.style.display = "none";
        }
    }
}
function GameOver(){

}