var randomNumber;
// For generating first random number
randomNumber=Math.random(1,6);
randomNumber=Math.floor(randomNumber*6)+1;
if(randomNumber===1)
{
    document.getElementsByClassName("img1")[0].src="images/dice1.png";
}
else if(randomNumber===2)
{
    document.getElementsByClassName("img1")[0].src="images/dice2.png";
}
else if(randomNumber===3)
{
    document.getElementsByClassName("img1")[0].src="images/dice3.png";}
else if(randomNumber===4)
{
    document.getElementsByClassName("img1")[0].src="images/dice4.png";}
else if(randomNumber===5)
{
    document.getElementsByClassName("img1")[0].src="images/dice5.png";}
else if(randomNumber===6)
{
    document.getElementsByClassName("img1")[0].src="images/dice6.png";
}
var randomNumber1;
// For generating second random number
randomNumber1=Math.random(1,6);
randomNumber1=Math.floor(randomNumber1*6)+1;
if(randomNumber1===1)
{
    document.getElementsByClassName("img2")[0].src="images/dice1.png";
}
else if(randomNumber1===2)
{
    document.getElementsByClassName("img2")[0].src="images/dice2.png";
}
else if(randomNumber1===3)
{
    document.getElementsByClassName("img2")[0].src="images/dice3.png";}
else if(randomNumber1===4)
{
    document.getElementsByClassName("img2")[0].src="images/dice4.png";}
else if(randomNumber1===5)
{
    document.getElementsByClassName("img2")[0].src="images/dice5.png";}
else if(randomNumber1===6)
{
    document.getElementsByClassName("img2")[0].src="images/dice6.png";
}

// For deciding winner
if(randomNumber >randomNumber1)
{
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins";
}
else if(randomNumber===randomNumber1)
{
    document.getElementsByTagName("h1")[0].innerHTML="Draw!!";
}
else
{
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
}