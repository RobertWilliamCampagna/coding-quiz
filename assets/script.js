// Global instances
let questionsEl = document.getElementById("quiz-questions");
let selectionsEl = document.getElementById("selections");
let resultEl = document.getElementById("result");
let timeleftEl = document.getElementById("timeleft");
let timeScore = 60;
let answer;
let questionNumber = -1;

// const resultEL = document.getElementById("result");

// start-button 
document.querySelector("#start-button").addEventListener("click", startQuiz);

const questionsArr = [
    {
        question: "How do you add fles on github?",
        answers: ["add.git", "git add .", "git add Files", "addmyfilesnow.git"],
        correct: "git add ."
    },
    {
        question: "What does CSS stand for?",
        answers: ["Common Sense Styling", "Cascading Styling Sheet", "Cascading Simple Styling", "Common Structure Sets"],
        correct: "Cascading Styling Sheet"
    },
    {
        question: "Where does your javascript file go on your index.html?",
        answers: ["At the very top", "After the head", "at the bottom before closing body tag", "under the CSS link"],
        correct: "at the bottom before closing body tag"
    },
    {
        question: "How do you align text in center of page?",
        answers: ["text-align: center", "text-align: middle", "text-align: pagemiddle", "font = center"],
        correct: "text-align: center"
    },
    {
        question: "Who is the best baseball team ever?",
        answers: ["LA Dodgers", "NY Yankees", "NY Metropolitans", "Anahiem Angels"],
        correct: "NY Metropolitans"
    },
];


function startQuiz(){
document.getElementById("intro-quiz").classList.add('hidden');
document.getElementById("start-quiz").classList.remove("hidden");

countDown ();

questionInit();
};

function countDown(){
let secondsLeft = setInterval(function(){
    timeScore --;
    timeleftEl.textContent = "Time: " + timeScore + " left";
    if(timeScore === 0 || questionNumber === questionsArr.length) {
        clearInterval(secondsLeft);
        setTimeout(finalScore);//NOT YET DECLARED
    }
}, 1000);
};

function questionInit(){

    questionNumber++

    questionsEl.textContent = questionsArr[questionNumber].question

    selectionsEl.innerHTML = "";

    
    let answers = questionsArr[questionNumber].answers;

    answer = questionsArr[questionNumber].correct;

    for (let i = 0; i < answers.length; i++){
        let userChoice = document.createElement("button");

        userChoice.textContent = answers[i];

        nextBtn = selectionsEl.appendChild(userChoice);
    }
};

function hideSelections (){
    resultEl.style.display = "none";
}


selectionsEl.addEventListener("click", function(event){
    if (answer === event.target.textContent){
        resultEl.textContent = "CORRECT!"
        setTimeout(hideSelections, 3000);
        resultEl.removeAttribute("style");
    } else {
        resultEl.textContent = "WRONG";
        setTimeout(hideSelections, 3000);
        timeScore = timeScore - 10;
        resultEl.removeAttribute("style");
    }
    questionInit();
})

const finalScore = () => {
    document.getElementById("start-quiz").classList.add("hidden");
    document.getElementById("final-score").classList.remove("hidden");
    resultEl.textContent = "Congrats, final score is: " + timeScore;
};

