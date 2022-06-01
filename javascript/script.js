const dices = ['img/dice1.png', 'img/dice2.png', 'img/dice3.png', 'img/dice4.png', 'img/dice5.png', 'img/dice6.png'];

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
  };


async function roll(button, dice, score, score_value) {
    let rand_num = 0;
    button.value = "ROLLING...";
    for (let i=0; i<=19; i++) {
        rand_num = Math.floor(Math.random() * 6);
        dice.src = dices[rand_num];
        await sleep(100);
    };
    button.value = 'WAIT';
    score_value += rand_num + 1;
    score.innerHTML = score_value;
};


player1_button.addEventListener('click', async function(event) {
    if(player2_button.value === 'WAIT') {
        roll(player1_button, player1_dice, player1_score, player1_score_value);
        await sleep(2000);
        player2_button.value = 'ROLL';
    }
});

player2_button.addEventListener('click', async function(event) {
    if(player1_button.value === 'WAIT') {
        roll(player2_button, player2_dice, player2_score, player2_score_value);
        await sleep(2000);
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
