const startGameContainer = document.getElementById('start-game');
const startGameButton = document.getElementById('start-game-button');

const gameContainer = document.getElementById('game');
const selectItemButtons = document.querySelectorAll('.select-item-button');

const tryAgainButton = document.getElementById('try-again-button');

const incorrectAnswerContainer = document.getElementById('incorrect-answer')
const correctAnswerContainer = document.getElementById('correct-answer')

const startGame = () => {
    startGameContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

const showIncorrectUI = () => {
    incorrectAnswerContainer.classList.remove('hidden');
}

const hideIncorrectUI = () => {
    incorrectAnswerContainer.classList.add('hidden');
}

const showCorrectUI = () => {
    correctAnswerContainer.classList.remove('hidden');
}

const hideCorrectUI = () => {
    correctAnswerContainer.classList.add('hidden');
}

const onItemSelect = (e) => {
    if(e.target.parentNode.parentNode.value == 'whitening-supplement'){
        console.log('YAY!');
        showCorrectUI();
    }else{
        showIncorrectUI();
    }
}

const onTryAgain = (e) => {
    hideIncorrectUI();
}

startGameButton.addEventListener('click', startGame)
selectItemButtons.forEach((btn) => btn.addEventListener('click', onItemSelect));

tryAgainButton.addEventListener('click', onTryAgain)