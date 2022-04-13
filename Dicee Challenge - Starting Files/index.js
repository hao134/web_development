random_num1 = Math.floor(Math.random()*6) + 1;
random_num2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".dicenum1").innerHTML = random_num1;
document.querySelector(".dicenum2").innerHTML = random_num2;
document.querySelector(".img1").setAttribute("src","images/dice"+random_num1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+random_num2+".png");

if(random_num1 > random_num2){
    document.querySelector("h1").innerHTML = "Player1 win!";
} else if (random_num1 < random_num2){
    document.querySelector("h1").innerHTML = "Player2 win!";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}
