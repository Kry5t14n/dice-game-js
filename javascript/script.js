const player1_button = document.getElementById('player1-button');
const player1_dice = document.getElementById('player1-dice');
const player1_score = document.getElementById('player1-score');
let player1_score_value = 0;

const player2_button = document.getElementById('player2-button');
const player2_dice = document.getElementById('player2-dice');
const player2_score = document.getElementById('player2-score');
let player2_score_value = 0;

const reset_button = document.getElementById('reset-button');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function roll(dice, button) {
    let rand_num = 0;
    button.value = "ROLLING..."
    for (let i=0; i<=19; i++) {
        rand_num = Math.floor(Math.random() * 6);
        switch(rand_num) {
            case 0:
                dice.src = 'img/dice1.png';
                break;
            case 1:
                dice.src = 'img/dice2.png';
                break;
            case 2:
                dice.src = 'img/dice3.png';
                break;
            case 3:
                dice.src = 'img/dice4.png';
                break;
            case 4:
                dice.src = 'img/dice5.png';
                break;
            case 5:
                dice.src = 'img/dice6.png';
                break;
        }
        await sleep(100);
    }
    button.value = 'WAIT'
}

function updateScore(dice, score) {
    switch(dice) {
        case 'img/dice1.png':
            score += 1;
            break;
        case 'img/dice2.png':
            score += 2;
            break;
        case 'img/dice3.png':
            score += 3;
            break;
        case 'img/dice4.png':
            score += 4;
            break;
        case 'img/dice5.png':
            score += 5;
            break;
        case 'img/dice6.png':
            score += 6;
            break;
    }
    return score;
}


player1_button.addEventListener('click', async function(event) {
    if(player2_button.value === 'WAIT') {
        roll(player1_dice, player1_button);
        await sleep(2000);
        console.log(updateScore(player1_dice.src, player1_score_value))
        player2_button.value = 'ROLL';
    }
});

player2_button.addEventListener('click', async function(event) {
    if(player1_button.value === 'WAIT') {
        roll(player2_dice, player2_button);
        await sleep(2000);
        console.log(updateScore(player2_dice.src, player2_score_value))
        player1_button.value = 'ROLL';
    }
});

reset_button.addEventListener('click', function(event) {
    player1_button.value = 'ROLL';
    player1_dice.src = 'img/dice6.png';
    player1_score.innerHTML = 0;

    player2_button.value = 'WAIT';
    player2_dice.src = 'img/dice6.png';
    player2_score.innerHTML = 0;
});
