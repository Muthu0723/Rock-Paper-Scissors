const score = JSON.parse(localStorage.getItem('score')) || {
    Wins : 0,
    Losses : 0,
    Ties : 0
};
update();
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result=' ';
    if(playerMove==='Scissors'){
        if(computerMove==='Rock'){
            result='You Lose.';
        }
        else if (computerMove==='Paper'){
            result='You Win.';
        }
        else if(computerMove==='Scissors'){
            result='Tie.';
        }
    }
    else if(playerMove==='Rock'){
        if(computerMove==='Rock'){
            result='Tie.';
        }
        else if (computerMove==='Paper'){
            result='You Lose.';
        }
        else if(computerMove==='Scissors'){
            result='You Win.';
        }
        }
        else if(playerMove==='Paper'){
            if(computerMove==='Rock'){
                result='You Win.';
            }
            else if (computerMove==='Paper'){
                result='Tie.';
            }
            else if(computerMove==='Scissors'){
                result='You Lose.';
            }
        }
        document.querySelector('.js-result').innerHTML = `${result}`;
        document.querySelector('.js-move').innerHTML = `You - <img src="images/${playerMove}-emoji.png" alt="Scissors" class="move-icon"> Computer - <img src="images/${computerMove}-emoji.png" alt="Scissors" class="move-icon">`;
        if(result==='You Win.'){
            score.Wins+=1;
        }
        else if(result==='You Lose.'){
            score.Losses+=1;
        }
        else{
            score.Ties+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        update();
    }
    function update(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins} Loss: ${score.Losses} Ties: ${score.Ties}`;
    }
let computerMove=' ';
function pickComputerMove(){
    const random=Math.random();
if(random>=0 && random<1/3){
    computerMove='Rock';
}
else if(random>=1/3 && random<2/3){
    computerMove='Paper';
}
else{
    computerMove='Scissors';
}
return computerMove;
}