// console.log("test")
//PSEUDOCODE
//User needs to be able to start the game when they click on 'begin'. The questions need to be 'hidden' at this point.
// user needs to be able to move onto the next question after choosing an answer and then clicking next
// the answer clicked on needs to tell you if you were correct/wrong
// when finished, you should be prompted to the beginning of the game again
// all buttons need an event listener

var startButton = document.getElementById("Begin")
startButton.addEventListener('click', startGame)
var nextQuestionButton = document.getElementById("Next")
nextQuestionButton.addEventListener('click', () => {
   //make the next button work and take you to the next question
   questionIndex++
   nextQuestion();
})
let finalScore = 0
let scoreTracker = document.querySelector("span")
// console.log(scoreTracker)

var questionContainerElement = document.getElementById("questionContainer")
var triviaQuestion = document.getElementById("Question")
var triviaAnswer = document.getElementById("answer-container")
let questions = [
    //sources for questions: https://earth911.com/inspire/eco-quiz/
    // contd: https://uncw.edu/campuslife/documents/recyclingtriviaquestions.pdf
    // contd: https://www.nationalgeographic.com/environment/global-warming/green-lifestyle-quiz/#close
 {
    question: "What date is recognized as Earth Day in the United States and other parts of the world?",
    correct: "April 22",
    answers : [
     {choice:"April 22"},
     {choice:"January 15"}, 
     {choice:"June 26"}, 
     {choice:"November 9"},
    ]
 },
 
 {
    question: "Patagonia produces some of its apparel using polyester fabric that includes what upcycled items?",
    correct: "Plastic Bottles",
    answers: [
    {choice: "Plastic bags"},
    {choice: "Fishing nets"},
    {choice: "Plastic bottles"}, 
    {choice: "Foam cups"}, 
    ]
 },
 {
    question: "How many trees does recycling a ton of paper save?",
    correct: "17",
    answers: [
    {choice: "6"},
    {choice: "17"}, 
    {choice: "100"},
    {choice: "75"}, 
    ]
 },
 {
     question: "The US Department of Energy (DOE) recommends turning off your monitor and placing the computer on sleep mode if you are not going to use it for more than ___",
     correct: "20 minutes",
     answers: [
     {choice: "2 hours"},
     {choice: "6 hours"},
     {choice: "45 minutes"},
     {choice: "20 minutes"}
     ]
 },
 
 {
    question: "Recycling plastic saves ____ times as much energy as burning it in an incinerator.",
    correct: "2 times",
    answers: [
    {choice: "2 times"},
    {choice: "0.5 times"},
    {choice: "3 times"},
    {chocie: "None, it takes more energy to recycle"}
    ]
 },
 
 {
     question: "How much energy does recycling just one aluminium can save?",
     correct: "Enough to power a TV for 3 hours",
     answers: [
     {choice: "Enough to power a microwave for 30 minutes"},
     {choice: "Enough to power the average American home for 4 days"},
     {choice: "Enough to power a computer for 15 minutes"},
     {choice: "Enough to power a TV for 3 hours"}
     ]
 },
 
 {
     question: "What type of supermarket bag is more ecofriendly, paper or plastic?",
     correct: "None of the above",
     answers: [
     {choice: "Either is fine"},
     {choice: "Paper"},
     {choice:"Plastic"},
     {choice: "None of the above"}
     ]
 },
 
 {
    question: "Approximately how much global electricity output is produced from renewable sources?",
    correct: "10 percent",
    answers :[
    {choice: "1 percent"},
    {choice: "10 percent"},
    {choice: "5 percent"},
    {choice: " 20 percent"}
    ]
 },
 
 {
    question: "Dropping the thermostat from 70 to 68 degrees saves you about how much on your heating costs?",
    correct: "5 percent",
    answers: [
    {choice: "10 percent"},
    {choice: "20 percent"},
    {choice: "1 percent"},
    {choice: "5 percent"}
    ]
 },
 
 {
    question: "Which of the following is an alternative material for making paper?",
    correct: "All of the above",
    answers:[
    {choice: "Panda excrement"},
    {choice: "Hemp"},
    {choice: "Sheepskin"},
    {choice: "All of the above"}
    ]
 }
 ]


let questionOrder, questionIndex

//questions are hidden. once clicked, then first question appears. and the begin button disappears
function startGame () {
    // console.log('click begin button')
startButton.classList.add('hide')
questionOrder = questions.sort();
questionIndex = 0
questionContainerElement.classList.remove('hide')
nextQuestion();

} 

// grab a question
function nextQuestion() {
   resetContainer()
    loadNewQuestion(questionOrder[questionIndex]) 

 }


//display question and answer options in container. The next button also needs to show.
function loadNewQuestion(question) {
   triviaQuestion.innerText = question.question
   nextQuestionButton.classList.remove('hide')
   question.answers.forEach(answer => {
      let button = document.createElement('button')
      button.innerText = answer.choice
      button.classList.add('button')
      if (answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener('click', chooseAnswer)
      triviaAnswer.appendChild(button)
      scoreTracker.innerHTML = finalScore
   });
}
// score tracker
function displayScore () {

}
// 'choice' text still appears on top of answer options. 
function resetContainer() {
   nextQuestionButton.classList.add('hide')
   while(triviaAnswer.firstChild) {
      triviaAnswer.removeChild(triviaAnswer.firstChild)
   }
}
//is the chosen answer right or wrong
function chooseAnswer(event) {
  let chosenAnswer = event.target
  let correctAnswer = chosenAnswer.question.correct
  console.log(chosenAnswer, correctAnswer)
   answerStatus(document.body, correctAnswer)
   Array.from(triviaAnswer.children).forEach(button => {
      answerStatus(button, button.dataset.correctAnswer)
   })
   if (questionOrder.length > questionIndex + 1) {
      nextQuestionButton.classList.remove('hide')
   } else {
      startButton.innerText = 'Play Again'
      startButton.classList.remove('hide')
      nextQuestionButton.classList.add('hide')
   }
   
}

function answerStatus(element, correctAnswer) {
   resetStatus(element)
   if (correctAnswer) {
      element.classList.add('correct')
   } else {
      element.classList.add('wrong')
   }
}

function resetStatus(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
}



