//alert("Hello");
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomNumber2=Math.floor(Math.random()*6)+1;

const player1=document.querySelector('.img1');

const player2=document.querySelector('.img2');


player1.src=`images/dice${randomNumber1}.png`;
player2.src=`images/dice${randomNumber2}.png`;


const title=document.querySelector('h1');

if(randomNumber1>randomNumber2){
    title.innerText="Player First Wins";
}
else if(randomNumber1<randomNumber2){
    title.innerText="Player Second Wins";
}
