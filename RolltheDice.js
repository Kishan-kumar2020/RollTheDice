// let num = parseInt(document.getElementById("winnernum")).value;
// console.log(num);
var num = parseInt(prompt("Please enter your winner number"));
let count = 0;
let a=0;
let b=0;
function diceRoll() {
    let val = Math.floor(Math.random()*6) + 1;
    document.getElementById("range").value = val;
    count++;
    
    if(count%2==0) {
        a = a + parseInt(val);
        document.getElementById("p2").value = a; 
    }
    else {
        b = b + parseInt(val);
        document.getElementById("p1").value = b;
    }
    if(a>=num) {
        document.getElementById("result").innerHTML = "Player2 wins";
    }
    else if(b>=num) {
        document.getElementById("result").innerHTML = "Player1 wins";
    }
}