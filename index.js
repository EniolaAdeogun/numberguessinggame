// number guessing game 

const minNum = 1 ;
const maxNum = 100; 
const answer = Math.random()  * (maxNum - minNum + 1);


let attempts = 0;
let guess;
let running = true;

while(running){
guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
guess = Number(guess);

if (isNaN(guess)){
    window.alert('Please enter a valid number ');
}

else if (guess<minNum || guess > maxNum){
window.alert('Please enter with a valid number');

}
else {
attempts++;
if(guess < answer){
    window.alert('Too low! Try again');

}
else if (guess > answer){
window.alert ('Too high ! Try again')
}

else{
    window.alert(`correct!'  , The answer was ${answer}. it took you ${attempts} attempts `)
}

}

running = false;


}
    