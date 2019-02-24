//1-up 2-down 3-left 4-right
let red1 = 000;
let red2 = 000;
let green1 = 000;
let green2 = 000;
let blue1 = 000;
let blue2 = 000;
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
let hit1 = [];
let hit2 = [];
const array1 = [document.getElementById("rleft"), document.getElementById("gleft"), document.getElementById("bleft")];
const array2 = [document.getElementById("rright"), document.getElementById("gright"), document.getElementById("bright")];
const pl1 = document.getElementById("player1");
const pl2 = document.getElementById("player2");
window.onload = function init(){
    currentc1 = 1;
    currentc2 = 1;
    array1[currentc1].style.border = "thick solid #F1E538";
    array2[currentc2].style.border = "thick solid #F1E538";
    x = setInterval(changePlayers, 100);
    y = setInterval(movePlayer1, 100);
    z = setInterval(movePlayer2, 100);
}

let keypressed = {}
window.onkeydown = function(event) {
    keypressed[event.keyCode] = true;
}

window.onkeyup = function(event) {
    keypressed[event.keyCode] = false;
}

function changePlayers(){
    pl1.style.backgroundColor = "rgb(" + red1 + "," + green1 + "," + blue1 +")";
    pl2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + ',' + blue2 +')';
    if(keypressed[13] == true){
        endCreation();
    }
}
function changeGreen(playerNum, right){
    if(right == true){
        if(playerNum == pl1){
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
        if(playerNum == pl1){
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
        if(playerNum == pl1){
            if(red1 + 10 < 255){
                red1 = red1 + 10;
            }
        }
        else if(playerNum == pl2){
            if(red2 + 10 < 255){
                red2 = red2 + 10;
            }
        }
    }
    else{
        if(playerNum == pl1){
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
        if(playerNum == pl1){
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
        if(playerNum == pl1){
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
    if (keypressed[38] == true){
        if(currentc1 != 0){
            array1[currentc1].style.border = "None";
            currentc1 = currentc1 - 1;
            array1[currentc1].style.border = "thick solid #F1E538";
        }
    }
    else if(keypressed[40] == true){
        if(currentc1 != 2){
            array1[currentc1].style.border = "None";
            currentc1 = currentc1 + 1;
            array1[currentc1].style.border = "thick solid #F1E538";
        }
    }
    else if(keypressed[37] == true){
        if(currentc1 == 0){
            changeRed(pl1, false);
        }
        else if(currentc1 == 1){
            changeGreen(pl1, false);
        }
        else if(currentc1 == 2){
            changeBlue(pl1, false);
        }
        else{
            currentc1 = 1;
        }
    }
    else if(keypressed[39] == true){
        if(currentc1 == 0){
            changeRed(pl1, true);
        }
        else if(currentc1 == 1){
            changeGreen(pl1, true);
        }
        else if(currentc1 == 2){
            changeBlue(pl1, true);
        }
        else{
            currentc1 = 1;
        }
    }
}
function movePlayer2(){
    if (keypressed[87] == true){
        if(currentc2 != 0){
            array2[currentc2].style.border = "None";
            currentc2 = currentc2 - 1;
            array2[currentc2].style.border = "thick solid #F1E538";
        }
    }
    else if(keypressed[83] == true){
        if(currentc2 != 2){
            array2[currentc2].style.border = "None";
            currentc2 = currentc2 + 1;
            array2[currentc2].style.border = "thick solid #F1E538";
        }
    }
    else if(keypressed[65] == true){
        if(currentc2 == 0){
            changeRed(pl2, false);
        }
          else if(currentc2 == 1){
            changeGreen(pl2, false);
        }
        else if(currentc2 == 2){
            changeBlue(pl2, false);
        }
        else{
            currentc2 = 1;
        }
    }
    else if(keypressed[68] == true){
        if(currentc2 == 0){
            changeRed(pl2, true);
        }
        else if(currentc2 == 1){
            changeGreen(pl2, true);
        }
        else if(currentc2 == 2){
            changeBlue(pl2, true);
        }
        else{
            currentc2 = 1;
        }
    }
}
function endCreation(){
    if(pl1.style.backgroundColor != pl2.style.backgroundColor){
        if(pl1.style.backgroundColor == "rgb(0, 0, 0)"){
            blue1 = blue1 + 10;
            pl1.style.backgroundColor = 'rgb(' + red1 + ',' + green1 + ',' + blue1 +')';
        }
        if(pl2.style.backgroundColor == "rgb(0, 0, 0)"){
            blue2 = blue2 + 10;
            pl2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + ',' + blue2 +')';
        }
        if(pl1.style.backgroundColor == "rgb(120, 120, 120)"){
            blue1 = blue1 + 10;
            pl1.style.backgroundColor = 'rgb(' + red1 + ',' + green1 + ',' + blue1 +')';
        }
        if(pl2.style.backgroundColor == "rgb(120, 120, 120)"){
            blue2 = blue2 + 10;
            pl2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + ',' + blue2 +')';
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
        pl2.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + ',' + blue2 +')';
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
        currentc1 = null;
        currentc2 = null;
        gameStart()
    }
}
function gameStart(){
    pl1.style.top = "10px";
    pl1.style.left = "10px";
    pl2.style.bottom = "10px";
    pl2.style.right = "10px";
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
    setStage();
}
function shoot(playerNum, direction){
    if(playerNum == pl1){
        let ack = document.getElementById("attackp1");
        clone = ack.cloneNode(true);
        clone.style.display = 'block';
        //clone.style.backgroundColor = 
        if(p1direction == 1){
            attacksup.push(clone);
            hit2.push(clone);
        }
        else if(p1direction == 2){
            attacksdown.push(clone);
            hit2.push(clone);
        }
        else if(p1direction == 3){
            attacksleft.push(clone);
            hit2.push(clone);
        }
        else if(p1direction == 4){
            attacksright.push(clone);
            hit2.push(clone);
        }
        document.body.appendChild(clone);
    }
    else{
        let ack = document.getElementById("attackp2");
        clone = ack.cloneNode(true);
        clone.style.display = 'block';
        if(p2direction == 1){
            attacksup.push(clone);
            hit1.push(clone);
        }
        else if(p2direction == 2){
            attacksdown.push(clone);
            hit1.push(clone);
        }
        else if(p2direction == 3){
            attacksleft.push(clone);
            hit1.push(clone);
        }
        else if(p2direction == 4){
            attacksright.push(clone);
            hit1.push(clone);
        }
        document.body.appendChild(clone);  
    }
}
function setStage(){
    p1shoot = setInterval(shoot(pl1, p1direction), 1000);
    p2shoot = setInterval(shoot(pl2, p2direction), 1000);
    frames = setInterval(updateFrame, 1000);
    checkMissiles = setInterval(die, 1000);
    checkDamage = setInterval(oop, 1000);
    checkCollision = setInterval(oops, 1000);
    gdt = setInterval(helpme,1000);
}
function helpme(){
    if(keypressed[38] == true){
        p1direction = 1;
        pl1.style.top = pl1.style.top - 10;
    }
    else if(keypressed[40] == true){
        p1direction = 2;
        pl1.style.top = pl1.style.top + 10;
    }
    else if(keypressed[37] == true){
        p1direction = 3;
        pl1.style.left = pl1.style.left - 10;
    }
    else if(keypressed[39] == true){
        p1direction = 4;
        pl1.style.left = pl1.style.left + 10;
    }
    if(keypressed[87] == true){
        p2direction = 1;
        pl2.style.top = pl2.style.top - 10;
    }
    else if(keypressed[83] == true){
        p2direction = 2;
        pl2.style.top = pl2.style.top + 10;
    }
    else if(keypressed[65] == true){
        p2direction = 3;
        pl2.style.left = pl2.style.left - 10;
    }
    else if(keypressed[68] == true){
        p2direction = 4;
        pl2.style.left = pl2.style.left + 10;
    }
}
function oops(){
    for(i=0; i<hit1.length; i++){
        if(dotheyCollide(hit1[i], pl1) == true){
            p1lives = p1lives - 1;
        }
    }
    for(i=0; i<hit2.length; i++){
        if(dotheyCollide(hit2[i],pl1) == true){
            p2lives = p2lives - 1;
        }
    }
}
function dotheyCollide(thing1, thing2) {
    thing1.offsetBottom = thing1.offsetTop + thing1.offsetHeight;
    thing1.offsetRight = thing1.offsetLeft + thing1.offsetWidth;
    thing2.offsetBottom = thing2.offsetTop + thing2.offsetHeight;
    thing2.offsetRight = thing2.offsetLeft + thing2.offsetWidth;

    return !((thing1.offsetBottom < thing2.offsetTop) ||
             (thing1.offsetTop > thing2.offsetBottom) ||
             (thing1.offsetRight < thing2.offsetLeft) ||
             (thing1.offsetLeft > thing2.offsetRight))
}
function oop(){
    if(pl1.style.top == 0){
        p1lives = p1lives - 1;
        pl1.style.top = pl1.style.top + "10px";
    }
    else if(pl1.style.left == 0){
        p1lives = p1lives - 1;
        pl1.style.left = pl1.style.left + "10px";
    }
    else if(pl1.style.bottom == 0){
        p1lives = p1lives - 1;
        pl1.style.bottom = pl1.style.bottom + "10px";
    }
    else if(pl1.style.right == 0){
        p1lives = p1lives -1;
        pl1.style.right = pl1.style.right + "10px";
    }

    if(pl2.style.top == 0){
        p2lives = p2lives - 1;
        pl2.style.top = pl2.style.top + "10px";
    }
    else if(pl2.style.left == 0){
        p2lives = p2lives - 1;
        pl2.style.left = pl2.style.left + "10px";
    }
    else if(pl2.style.bottom == 0){
        p2lives = p2lives - 1;
        pl2.style.bottom = pl2.style.bottom + "10px";
    }
    else if(pl2.style.right == 0){
        p2lives = p2lives -1;
        pl2.style.right = pl2.style.right + "10px";
    }
}
function updateFrame(){
    for(i=0; i<attacksup.length; i++){
        attacksup[i].style.top = attacksup[i].style.top - "10px";
    }
    for(i=0; i<attacksdown.length; i++){
        attacksdown[i].style.down = attacksdown[i].style.top + "10px";
    }
    for(i=0; i<attacksleft.length; i++){
        attacksleft[i].style.left = attacksleft[i].style.left - "10px";
    }
    for(i=0; i<attacksright.length; i++){
        attacksright[i].style.left = attacksright[i].style.left + "10px";
    }
    if(keypressed[38] == true){
        pl1.style.top = pl1.style.top - "10px"
    }
    if(keypressed[40] == true){
        pl1.style.top = pl1.style.top + "10px"
    }
    if(keypressed[37] == true){
        pl1.style.top = pl1.style.top - "10px"
    }
    if(keypressed[39] == true){
        pl1.style.top = pl1.style.top + "10px"
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
            attacksup[i].style.display = "none";
        }
    }
    for(i=0; i<attacksdown.length; i++){
        if(attacksdown[i].style.top == 0){
            attacksdown[i].style.display = "none";
        }
    }
    for(i=0; i<attacksleft.length; i++){
        if(attacksleft[i].style.right == 0){
            attacksleft[i].style.display = "none";
        }
    }
    for(i=0; i<attacksright.length; i++){
        if(attacksright[i].style.left == 0){
            attacksright[i].style.display = "none";
        }
    }
}
function GameOver(){
    clearInterval(p1shoot);
    clearInterval(p2shoot);
    clearInterval(frames);
    clearInterval(checkMissiles);
    clearInterval(checkDamage);
    document.getElementById("TextOnScreen").innerHTML = "GAME OVER";
}