const player1_dice = document.getElementById('player1-dice');
const player2_dice = document.getElementById('player2-dice');
const player1_button = document.getElementById('player1-button');
const player2_button = document.getElementById('player2-button');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function roll(dice) {
    let rand_num = 0;
    for (let i=0; i<=9; i++) {
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
        };
        await sleep(100);
    }
}


player1_button.addEventListener('click', function(e) {roll(player1_dice)});
player2_button.addEventListener('click', function(e) {roll(player2_dice)});
