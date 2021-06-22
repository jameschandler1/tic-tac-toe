//set 
let $box = $('.box');

let $turnMessage = $('.turn-message');

let $play = $('.play');

let playerValue = 1;
console.log(playerValue);
    
let xOrO = '';

let $zero = $('#boxZero');
let $one = $('#boxOne');
let $two = $('#boxTwo');
let $three = $('#boxThree');
let $four = $('#boxFour');
let $five = $('#boxFive');
let $six = $('#boxSix');
let $seven = $('#boxSeven');
let $eight = $('#boxEight');

let winningCombos = [
    //horizontal
    [$zero, $one, $two],
    [$three, $four, $five],
    [$six, $seven, $eight],
    //vertical
    [$zero, $three, $six],
    [$one, $four, $seven],
    [$two, $five, $eight],
    //diagnol
    [$zero, $four, $eight],
    [$two, $four, $six]
]



function turnTaker() {
    playerValue *= -1;
    return;
};

$play.on('click', function(e){
    if (e.target.className === 'play'){
        $box.text('');
        $box.css('background-color:', 'white');
        console.log($box.css('background-color:', 'white'))
        displayTurn();
        $box.on('click', function(e){
            let click = e.target;
            if (e.target.className === 'box' && playerValue === 1) {
                click.textContent = 'X';
                click.style.backgroundColor = 'red';
                turnTaker();
                displayTurn();
            }
            else if (e.target.className === 'box' && playerValue === -1) {
                click.textContent = 'O'
                click.style.backgroundColor = 'blue';
                click.style.color = 'white';
                turnTaker();
                displayTurn();
            }
        })
    }
});

function displayTurn() {
    if (playerValue === 1) {
        $turnMessage.text(`Player One's Turn`);
        return;
    }
    else if (playerValue !== 1) {
        $turnMessage.text(`Player Two's Turn`);
        return;
    }
}

function winner() {
    winningCombos.forEach(winningCombo => {
        
    });
}
winner();