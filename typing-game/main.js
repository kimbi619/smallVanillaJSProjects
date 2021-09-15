const words = [
    "pies", 
    "salah", 
    "liverpool", 
    "dallas", 
    "remote", 
    "Alexander", 
    "ball", 
    "field",
    "goal", 
    "flash",
    "laughter",
    "magic", 
    "master",
    "space", 
    "definition"
]


const toggleHeader = document.querySelector(".toggle-header");
const header = document.querySelector('.header');
const inputField = document.querySelector('.inputField');
const textField = document.querySelector('.text')
const timeText = document.querySelector('.time')
const scoreText = document.querySelector('.score');
const gamePlay = document.querySelector('.gamePlay');
const gameOver = document.querySelector('.gameOver');
const replay = document.querySelector('.replay');
const finalScore = document.querySelector('.finalScore');


let randomWord = '';
let score = 0;
let time = 5;
let isPlaying;
let maxScore = 0;


window.addEventListener('load', init());
replay.addEventListener('click', ()=>{
    console.log(window)
});

function init(){
    isPlaying = true
    inputField.focus();
    showWord()
    setInterval(countDown, 1000);
    inputField.addEventListener('input', startMatch)
    setInterval(checkStatus, 50);
}

function reset(){
    showWord();
    inputField.value = '';
    time += 5;
}
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        score++;
        reset();
    }

    scoreText.innerHTML = score;
}
function matchWords(){
    if(inputField.value === randomWord){
        return true;    
    }else{
        return false;
    }
}



function showWord(){
    randomWord = words[Math.floor(Math.random() * words.length)];
    textField.innerHTML = randomWord;
    // return randomWord;
}

function countDown(){
    if(time > 0){
        time--;
        maxScore = score;
    }else if(time === 0 ){
        isPlaying = false;
        score = 0;
        return
    }
    timeText.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        gamePlay.style.display = 'none';
        finalScore.innerHTML = maxScore;
        gameOver.style.display = 'block';
    }
}


toggleHeader.addEventListener('click', ()=>{
    header.classList.toggle('hideHeader');
})


