// console.log("test")
//PSEUDOCODE
//User needs to be able to start the game when they click on 'begin'. The questions need to be 'hidden' at this point.
// user needs to be able to move onto the next question after choosing an answer and then clicking next
// the answer clicked on needs to tell you if you were correct/wrong
// when finished, you should be prompted to the beginning of the game again
// all buttons need an event listener

var startButton = document.getElementById("Begin")
startButton.addEventListener('click', startGame)
var nextQuestionButton = document.getElementById('Next')
nextQuestionButton.addEventListener('click', nextQuestion)
let questions = [
    //sources for questions: https://earth911.com/inspire/eco-quiz/
    // contd: https://uncw.edu/campuslife/documents/recyclingtriviaquestions.pdf
    // contd: https://www.nationalgeographic.com/environment/global-warming/green-lifestyle-quiz/#close
 {
    question: "What date is recognized as Earth Day in the United States and other parts of the world?",
    answers : [
    {choice1: "April 22", correct: true},
    {choice2: "January 15", correct: false},
    {choice3: "June 26", correct: false},
    {choice4: "November 9", correct: false}
    ]
 },
 
 {
    question: "Patagonia produces some of its apparel using polyester fabric that includes what upcycled items?",
    answers: [
    {choice1: "Plastic bags", correct: false},
    {choice2: "Fishing nets", correct: false},
    {choice3: "Plastic bottles", correct: true},
    {choice4: "Foam cups", correct: false}
    ]
 },
 {
    question: "How many trees does recycling a ton of paper save?",
    answers: [
    {choice1: "6", correct: false},
    {choice2: "17", correct: true},
    {choice3: "100", correct: false},
    {choice4: "75", correct: false}
    ]
 },
 {
     question: "The US Department of Energy (DOE) recommends turning off your monitor and placing the computer on sleep mode if you are not going to use it for more than ___",
     answers: [
     {choice1: "2 hours", correct: false},
     {choice2: "6 hours", correct: false},
     {choice3: "45 minutes", correct: false},
     {choice4: "20 minutes", correct: true}
     ]
 },
 
 {
    question: "Recycling plastic saves ____ times as much energy as burning it in an incinerator.",
    answers: [
    {choice1: "2 times", correct: true},
    {choice2: "0.5 times", correct: false},
    {choice3: "3 times", correct: false},
    {chocie4: "None, it takes more energy to recycle", correct: false}
    ]
 },
 
 {
     question: "How much energy does recycling just one aluminium can save?",
     answers: [
     {choice1: "Enough to power a microwave for 30 minutes", correct: false},
     {choice2: "Enough to power the average American home for 4 days", correct: false},
     {choice3: "Enough to power a computer for 15 minutes", correct: false},
     {choice4: "Enough to power a TV for 3 hours", correct: true}
     ]
 },
 
 {
     question: "What type of supermarket bag is more ecofriendly, paper or plastic?",
     answers: [
     {choice1: "Either is fine", correct: false},
     {choice2: "Paper", correct: false},
     {choice3:"Plastic", correct: false},
     {choice4: "None of the above", correct: true}
     ]
 },
 
 {
    question: "Approximately how much global electricity output is produced from renewable sources?",
    answers :[
    {choice1: "1 percent", correct: false},
    {choice2: "10 percent", correct: true},
    {choice3: "5 percent", correct: false},
    {choice4: " 20 percent", correct: false}
    ]
 },
 
 {
    question: "Dropping the thermostat from 70 to 68 degrees saves you about how much on your heating costs?",
    answers: [
    {choice1: "10 percent", correct: false},
    {choice2: "20 percent", correct: false},
    {choice3: "1 percent", correct: false},
    {choice4: "5 percent", correct: true}
    ]
 },
 
 {
    question: "Which of the following is an alternative material for making paper?",
    answers:[
    {choice1: "Panda excrement", correct: false},
    {choice2: "Hemp", correct: false},
    {choice3: "Sheepskin", correct: false},
    {choice4: "All of the above", correct: true}
    ]
 }
 ]

//questions are hidden. once clicked, then first question appears. and the begin button disappears
function startGame () {
    // console.log('click begin button')
startButton.classList.add('hide')
QAcontainerElement.classList.remove('hide')
nextQuestion()
} 




// questions need to continue to populate
function nextQuestion() {
    function loadNewQuestion()
}


function chooseAnswer() {

}
