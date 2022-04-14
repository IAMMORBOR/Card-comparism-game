const deckArray = [
    {
        name: 'Ace_Clubs',
        img: './images/ace_of_clubs.png',
        value: 14
    },
    {
        name: 'Ace_Diamonds',
        img: './images/ace_of_diamonds.png',
        value: 14
    },
    {
        name: 'Ace_Hearts',
        img: './images/ace_of_hearts.png',
        value: 14
    },
    {
        name: 'Ace_Spades',
        img: './images/ace_of_spades.png',
        value: 14
    },
    {
        name: '2_Clubs',
        img: './images/2_of_clubs.png',
        value: 2
    },
    {
        name: '2_Diamonds',
        img: './images/2_of_diamonds.png',
        value: 2
    },
    {
        name: '2_Hearts',
        img: './images/2_of_hearts.png',
        value: 2
    },
    {
        name: '2_Spades',
        img: './images/2_of_spades.png',
        value: 2
    },
    {
        name: '3_Clubs',
        img: './images/3_of_clubs.png',
        value: 3
    },
    {
        name: '3_Diamonds',
        img: './images/3_of_diamonds.png',
        value: 3
    },
    {
        name: '3_Hearts',
        img: './images/3_of_hearts.png',
        value: 3
    },
    {
        name: '3_Spades',
        img: './images/3_of_spades.png',
        value: 3
    },
    {
        name: '4_Clubs',
        img: './images/4_of_clubs.png',
        value: 4
    },
    {
        name: '4_Diamonds',
        img: './images/4_of_diamonds.png',
        value: 4
    },
    {
        name: '4_Hearts',
        img: './images/4_of_hearts.png',
        value: 4
    },
    {
        name: '4_Spades',
        img: './images/4_of_spades.png',
        value: 4
    },
    {
        name: '5_Clubs',
        img: './images/5_of_clubs.png',
        value: 5
    },
    {
        name: '5_Diamonds',
        img: './images/5_of_diamonds.png',
        value: 5
    },
    {
        name: '5_Hearts',
        img: './images/5_of_hearts.png',
        value: 5
    },
    {
        name: '5_Spades',
        img: './images/5_of_spades.png',
        value: 5
    },
    {
        name: '6_Clubs',
        img: './images/6_of_clubs.png',
        value: 6
    },
    {
        name: '6_Diamonds',
        img: './images/6_of_diamonds.png',
        value: 6
    },
    {
        name: '6_Hearts',
        img: './images/6_of_hearts.png',
        value: 6
    },
    {
        name: '6_Spades',
        img: './images/6_of_spades.png',
        value: 6
    },
    {
        name: '7_Clubs',
        img: './images/7_of_clubs.png',
        value: 7
    },
    {
        name: '7_Diamonds',
        img: './images/7_of_diamonds.png',
        value: 7
    },
    {
        name: '7_Hearts',
        img: './images/7_of_hearts.png',
        value: 7
    },
    {
        name: '7_Spades',
        img: './images/7_of_spades.png',
        value: 7
    },
    {
        name: '8_Clubs',
        img: './images/8_of_clubs.png',
        value: 8
    },
    {
        name: '8_Diamonds',
        img: './images/8_of_diamonds.png',
        value: 8
    },
    {
        name: '8_Hearts',
        img: './images/8_of_hearts.png',
        value: 8
    },
    {
        name: '8_Spades',
        img: './images/8_of_spades.png',
        value: 8
    },
    {
        name: '9_Clubs',
        img: './images/9_of_clubs.png',
        value: 9
    },
    {
        name: '9_Diamonds',
        img: './images/9_of_diamonds.png',
        value: 9
    },
    {
        name: '9_Hearts',
        img: './images/9_of_hearts.png',
        value: 9
    },
    {
        name: '9_Spades',
        img: './images/9_of_spades.png',
        value: 9
    },
    {
        name: '10_Clubs',
        img: './images/10_of_clubs.png',
        value: 10
    },
    {
        name: '10_Diamonds',
        img: './images/10_of_diamonds.png',
        value: 10
    },
    {
        name: '10_Hearts',
        img: './images/10_of_hearts.png',
        value: 10
    },
    {
        name: '10_Spades',
        img: './images/10_of_spades.png',
        value: 10
    },
    {
        name: 'Jack_Clubs',
        img: './images/jack_of_clubs.png',
        value: 11
    },
    {
        name: 'Jack_Diamonds',
        img: './images/jack_of_diamonds.png',
        value: 11
    },
    {
        name: 'Jack_Hearts',
        img: './images/jack_of_hearts.png',
        value: 11
    },
    {
        name: 'Jack_Spades',
        img: './images/jack_of_spades.png',
        value: 11
    },
    {
        name: 'Queen_Clubs',
        img: './images/queen_of_clubs.png',
        value: 12
    },
    {
        name: 'Queen_Diamonds',
        img: './images/queen_of_diamonds.png',
        value: 12
    },
    {
        name: 'Queen_Hearts',
        img: './images/queen_of_hearts.png',
        value: 12
    },
    {
        name: 'Queen_Spades',
        img: './images/queen_of_spades.png',
        value: 12
    },
    {
        name: 'King_Clubs',
        img: './images/king_of_clubs.png',
        value: 13
    },
    {
        name: 'King_Diamonds',
        img: './images/king_of_diamonds.png',
        value: 13
    },
    {
        name: 'King_Hearts',
        img: './images/king_of_hearts.png',
        value: 13
    },
    {
        name: 'King_Spades',
        img: './images/king_of_spades.png',
        value: 13
    },
]

const clear = document.querySelector('#clear')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const guessHigh = document.querySelector('#high')
const guessLow = document.querySelector('#low')
const stick = document.querySelector('#stick')
const indexOne = document.querySelector('#one')
const indexTwo = document.querySelector('#two')
const indexThree = document.querySelector('#three')
const indexFour = document.querySelector('#four')
const indexFive = document.querySelector('#five')
const resultDisplay = document.querySelector('#result')
const mostRecentScore = localStorage.getItem('mostRecentScore')

var sortedCard = []
var currentIndex = 0
var scoreValue = 0
const grid = document.querySelector('#grid')

clear.addEventListener('click', clearStorage);
start.addEventListener('click', startGame);
reset.addEventListener('click', deleteDeck);
guessHigh.addEventListener('click', onGuessHigh);
guessLow.addEventListener('click', onGuessLow);
stick.addEventListener('click', endGame);

function startGame() {
    let inputVal = parseInt(document.querySelector('#myInput').value)
   
    if (Number.isNaN(inputVal)) {
        alert("Please input deck amount before you start game")
        return
    }
    if (inputVal < 2 || inputVal > 52) {
        alert("Invalid Input, card deck must be between 2 - 52")
        return
    }
    clearBoard()
    createDeck(inputVal)
    displayScores ()
}

function clearBoard() {
    const parent = document.querySelector('#grid')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    sortedCard = []
}

function createDeck(inputVal) {      
    for (var i = 0; i < inputVal; i++) {
        sortedCard.push(deckArray[Math.floor(Math.random() * deckArray.length)])
    }
    resultDisplay.innerHTML = scoreValue
    for (let i = 0; i < sortedCard.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.png')
        card.setAttribute('data-id', i)
        card.setAttribute('data-value', sortedCard[i].value)
        grid.appendChild(card)
        card.setAttribute('height', '150px')
        card.setAttribute('width', 'auto')
    }   
    start.removeEventListener('click', startGame)
    const firstCard = document.querySelector(" [data-id='0'] ")
    firstCard.setAttribute('src', sortedCard[0].img)
}

function deleteDeck() {
    document.location.reload(true)
}

function valueCompare( buttonType ) {
    if (sortedCard.length - 1 === currentIndex) {
        endGame()
        return
    }

    const currentCard = document.querySelector(`[data-id='${currentIndex}']`)
    const hiddenCard = document.querySelector(`[data-id='${++currentIndex}']`)
    const currentValue = parseInt(currentCard.getAttribute('data-value'))
    const hiddenValue = parseInt(hiddenCard.getAttribute('data-value'))
    hiddenCard.setAttribute('src', sortedCard[currentIndex].img)
    const msgElement = document.querySelector('#message')
   
    if (buttonType === "guessLow") {
        if (hiddenValue <= currentValue) {
            msgElement.innerHTML = ("You guessed right")
            resultDisplay.innerHTML = ++scoreValue
           
        }
        else{
            msgElement.innerHTML = ("Sorry, Wrong guess")
        }
       
    }
    else if (buttonType === "guessHigh") {
        if (hiddenValue >= currentValue) {
            msgElement.innerHTML = ("You guessed right")
            resultDisplay.innerHTML = ++scoreValue
        }
        else{
            msgElement.innerHTML = ("Sorry, Wrong guess")
        }
    }
    localStorage.setItem('mostRecentScore', scoreValue)
}

function onGuessHigh() {
    valueCompare('guessHigh')
}

function onGuessLow() {
    valueCompare('guessLow')
}

function endGame() {
    start.removeEventListener('click', startGame);
    guessHigh.removeEventListener('click', onGuessHigh);
    guessLow.removeEventListener('click', onGuessLow);
    stick.removeEventListener('click', endGame);
    alert('Game Over!! Final Score is ' + scoreValue)
    saveHighScores(scoreValue)
    displayScores ()
}

function clearStorage() {
    localStorage.clear()
}

function saveHighScores(score) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push(score)
    highScores.sort((a, b) => b - a);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores))
}


function displayScores () {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    indexOne.innerHTML = highScores[0] || 0
    indexTwo.innerHTML = highScores[1] || 0
    indexThree.innerHTML = highScores[2] || 0
    indexFour.innerHTML = highScores[3] || 0
    indexFive.innerHTML = highScores[4] || 0
}


