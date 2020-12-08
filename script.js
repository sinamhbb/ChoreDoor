let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';



let startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let currentlyPlaying = true;

let isBot = (door) => {
  if(door.src === botDoorPath){ return true}
  else{ return false}
};

function isClicked(door){

  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};


function playDoor(door){
    numClosedDoors--;
    
    if(numClosedDoors === 0){
       gameOver('win');}
    else if(isBot(door)){
      gameOver();
    }
  };





function randomChoreDoorGenerator(){
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor===0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor ===1){
    openDoor2 = botDoorPath ;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else{
    openDoor3 = botDoorPath;
    OpenDoor2 = spaceDoorPath;
    OpenDoor1 = beachDoorPath;
  }
};

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying) {
   doorImage1.src = openDoor1;
   playDoor(doorImage1);
  }
};


doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};


doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () =>{
  if(!currentlyPlaying){
   startRound();
  }
};

function startRound(){
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator()
};

function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  } else{ startButton.innerHTML = 'Game over! Play again?';}
  currentlyPlaying = false;
}

startRound()