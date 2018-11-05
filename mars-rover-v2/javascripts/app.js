// Rover Object Goes Here
// ======================

// ======================
const rover = {direction:'N', position:{x:0, y:0}, travelLog:[]};

function turnLeft(rover){
const direction = rover.direction;
 switch(direction){
   case 'N': rover.direction = 'W'
   break;
   case 'W' : rover.direction = 'S'
   break;
   case 'S' : rover.direction = 'E'
   break;
   case 'E' : rover.direction = 'N'
   break;
 }
}

function turnRight(rover){
  const direction = rover.direction;
 switch(direction){
   case 'N': rover.direction = 'E'
   break;
   case 'E' : rover.direction = 'S'
   break;
   case 'S' : rover.direction = 'W'
   break;
   case 'W' : rover.direction = 'N'
   break;
 }
}

function moveForward(rover){
  const direction = rover.direction;
    switch(direction){
      case 'N': rover.position.y > 0  ? rover.position.y -= 1 : console.log('Out of Boundarie');
      break;
      case 'W' : rover.position.x > 0  ? rover.position.x -= 1 : console.log('Out of Boundarie');
      break;
      case 'S' : rover.position.y < 10  ? rover.position.y += 1 : console.log('Out of Boundarie');
      break;
      case 'E' : rover.position.x < 10 ? rover.position.x += 1 : console.log('Out of Boundarie');
      break;
    }
}
function moveBackward(rover){
  const direction = rover.direction;
    switch(direction){
      case 'N': rover.position.y < 10 ? rover.position.y += 1 : console.log('Out of Boundarie');
      break;
      case 'W' : rover.position.x < 10 ? rover.position.x += 1 : console.log('Out of Boundarie');
      break;
      case 'S' : rover.position.y > 0 ? rover.position.y -= 1 : console.log('Out of Boundarie');
      break;
      case 'E' : rover.position.x > 0 ? rover.position.x -= 1 : console.log('Out of Boundarie');
      break;
    }
}

function commands(str, rover){
  const commands = ['r','l', 'f', 'b']; 
    for(var i=0; i<str.length; i++){
      const letter = str[i];
      if(commands.includes(letter)){
        switch(letter.toUpperCase()){
          case 'R': turnRight(rover);
          break;
          case 'L' : turnLeft(rover);
          break;
          case 'F' : moveForward(rover);
          break;
          case 'B' : moveBackward(rover);
          break;
        }
    }else{
    console.log('Command is not valid');
  }

      rover.travelLog.push('['+rover.position.x+','+rover.position.y+']');
}
  
  console.log(rover.travelLog);
  console.log('Going to '+rover.direction);
}
