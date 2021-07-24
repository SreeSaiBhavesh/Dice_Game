
var randnum1 = (Math.floor(Math.random()*6))+1;
var randnum2 = (Math.floor(Math.random()*6))+1;

randimgsrc1= "images/dice"+randnum1+".png";
randimgsrc2= "images/dice"+randnum2+".png";

document.getElementsByClassName("game")[0].querySelector("img").src=randimgsrc1;
document.getElementsByClassName("game")[1].querySelector("img").src=randimgsrc2;

if(randnum1>randnum2){
    document.querySelector("h1").innerHTML = "🏅 Player 1 Wins! 🏅"
}

else if(randnum1<randnum2){
    document.querySelector("h1").innerHTML = "🏅 Player 2 wins! 🏅"
}

else{
    document.querySelector("h1").innerHTML = "🤜 ....Game Tie.... 🤛"
}