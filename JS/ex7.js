console.log("Example 7");

const rnd = Math.floor(Math.random() * 100) + 1;

const input = prompt("please eneter your guess (a number between 1-100):");
const counter = 0;

while(input !== rnd) {
    if(input > rnd){
        counter++ ; 
        alert('Too high, guess lower');
        console.log(counter);
        input = Number(prompt(`Please enter a number from 1-100(hint:${rnd}):`))
    }
    else if(input < rnd) {
        counter++ ; 
        alert('Too low, guess lower');
        console.log(counter);
        input = Number(prompt(`Please enter a number from 1-100(hint:${rnd}):`))
    } 

    if(input == rnd){
        counter++ ; 
        alert(`Correct! It took you ${counter} attempts to guess the correct number.`)
    }
}