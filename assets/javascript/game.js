//teamOne

let shotsOne=0;
let goalOne=0;

const shotSpanOne = document.querySelector("#teamone-numshots");
const shotButtonOne = document.querySelector("#teamone-shoot-button");
const goalSpanOne = document.querySelector("#teamone-numgoals");

//Shots should have a random chance of succeeding or failing. 
//(Sounds like Internet research time! How do you determine a random chance in JavaScript?)

function randomSuccess(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
 }

 function goalChance() {
    return Math.floor(randomSuccess(0,2));
 }

// Clicking either "SHOOT" button represents a shot for that team.
//The number of shots taken should increase for every click of the "SHOOT" button.
//The number of goals should only increase when the shot is successful.

shotButtonOne.addEventListener("click", function(){
  shotsOne = Number(shotSpanOne.innerHTML) + 1;
  shotSpanOne.innerHTML = shotsOne;

  if (goalChance()){
  goalOne = Number(goalSpanOne.innerHTML) + 1;
  }
 goalSpanOne.innerHTML=goalOne;
})

//teamTwo

let shotsTwo=0;
let goalTwo=0;

const shotSpanTwo = document.querySelector("#teamtwo-numshots");
const shotButtonTwo = document.querySelector("#teamtwo-shoot-button");
const goalSpanTwo = document.querySelector("#teamtwo-numgoals");


shotButtonTwo.addEventListener("click", function(){
  shotsTwo = Number(shotSpanTwo.innerHTML) + 1;
  shotSpanTwo.innerHTML = shotsTwo;

  if (goalChance()){
  goalTwo = Number(goalSpanTwo.innerHTML) + 1;
  }
 goalSpanTwo.innerHTML=goalTwo;
})

//Clicking the "RESET" button should reset all the shot and goal counters 
//and add 1 to the number of resets.

let resetTimes=0;

const resetBtn=document.querySelector("#reset-button");
const resetNum=document.querySelector("#num-resets");

resetBtn.addEventListener("click", function(){

   shotSpanOne.innerHTML = 0;
   goalSpanOne.innerHTML = 0;
   shotSpanTwo.innerHTML = 0;
   goalSpanTwo.innerHTML = 0; 
   
   resetTimes = Number(resetNum.innerHTML) +1;
   resetNum.innerHTML=resetTimes;
})


/* Bonus
Play a sound when someone clicks the "Shoot" button. 
You'll need to read about the <audio> element and how to use it in JS. 
You will also need to find a sound file to use.*/