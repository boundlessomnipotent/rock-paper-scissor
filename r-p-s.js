// THIS FUNCTION IS USE FOR COMPUTER MOVE 

function computermove(){
    const random = Math.random();
    let computer = '';

    if (random >=0  && random < 1/3){
        computer = 'rocks';
    }
    else if (random > 1/3 && random < 2/3 ){
        computer = 'paper';
    }
    else if (random > 2/3 && random <1){
        computer = 'scissor';
    }

    return computer;
}

// THIS FUNCTION IS USED FOR CHCECK THE OUTPUT AND DECLARED THE RESULT

function playermove(player){
        
    const comp = computermove();
    let result = '';
    
    if(player === 'rocks'){
        if(comp === 'rocks'){
            result = 'tie';
        }
        else if (comp === 'paper'){
            result = 'you lose';
        }
        else if (comp === 'scissor'){
            result = 'you win';
        }
    }
        
    else if (player === 'paper'){
        if(comp === 'rocks'){
            result = 'you win';
        }
        else if (comp === 'paper'){
            result = 'tie';
        }
        else if (comp === 'scissor'){
            result = 'you lose';
        }
    }
    
    else if (player === 'scissor'){
        if(comp === 'rocks'){
            result = 'you lose';
        }
        else if (comp === 'paper'){
            result = 'you win';
        }
        else if (comp === ' scissor'){
            result = 'tie';
        }
    }
    
    alert(`You picked ${player}. Computer picked ${comp}. ${result}`);
    console.log(result);
}
