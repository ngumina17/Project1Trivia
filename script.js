// console.log("test")
//PSEUDOCODE
//User needs to be able to start the game when they click on 'begin'. The questions need to be 'hidden' at this point.
// user needs to be able to move onto the next question after choosing an answer and then clicking next
// the answer clicked on needs to tell you if you were correct/wrong
// when finished, you should be prompted to the beginning of the game again
// all buttons need an event listener

let score = 0
let scoreSpan = document.getElementById('score')
var startButton = document.getElementById("Begin")
startButton.addEventListener('click', startGame)
var nextQuestionButton = document.getElementById("Next")
nextQuestionButton.addEventListener('click', () => {
   //make the next button work and take you to the next question
   questionIndex++
   nextQuestion();
})

var questionContainerElement = document.getElementById("questionContainer")
var triviaQuestion = document.getElementById("Question")
var triviaAnswer = document.getElementById("answer-container")
let questions = [
   //sources for questions: https://earth911.com/inspire/eco-quiz/
   // contd: https://uncw.edu/campuslife/documents/recyclingtriviaquestions.pdf
   // contd: https://www.nationalgeographic.com/environment/global-warming/green-lifestyle-quiz/#close
   {
      question: "What date is recognized as Earth Day in the United States and other parts of the world?",
      answers: [
         { choice: "April 22", correct: true },
         { choice: "January 15", correct: false },
         { choice: "June 26", correct: false },
         { choice: "November 9", correct: false },
      ]
   },

   {
      question: "Patagonia produces some of its apparel using polyester fabric that includes what upcycled items?",
      answers: [
         { choice: "Plastic bags", correct: false },
         { choice: "Fishing nets", correct: false },
         { choice: "Plastic bottles", correct: true },
         { choice: "Foam cups", correct: false },
      ]
   },
   {
      question: "How many trees does recycling a ton of paper save?",
      answers: [
         { choice: "6", correct: false },
         { choice: "17", correct: true },
         { choice: "100", correct: false },
         { choice: "75", correct: false },
      ]
   },
   {
      question: "The US Department of Energy (DOE) recommends turning off your monitor and placing the computer on sleep mode if you are not going to use it for more than ___",
      answers: [
         { choice: "2 hours", correct: false },
         { choice: "6 hours", correct: false },
         { choice: "45 minutes", correct: false },
         { choice: "20 minutes", correct: true }
      ]
   },

   {
      question: "Recycling plastic saves ____ times as much energy as burning it in an incinerator.",
      correct: "2 times",
      answers: [
         { choice: "2 times", correct: true },
         { choice: "0.5 times", correct: false },
         { choice: "3 times", correct: false },
         { chocie: "None, it takes more energy to recycle", correct: false }
      ]
   },

   {
      question: "How much energy does recycling just one aluminium can save?",
      answers: [
         { choice: "Enough to power a microwave for 30 minutes", correct: false },
         { choice: "Enough to power the average American home for 4 days", correct: false },
         { choice: "Enough to power a computer for 15 minutes", correct: false },
         { choice: "Enough to power a TV for 3 hours", correct: true }
      ]
   },

   {
      question: "What type of supermarket bag is more ecofriendly, paper or plastic?",
      answers: [
         { choice: "Either is fine", correct: false },
         { choice: "Paper", correct: false },
         { choice: "Plastic", correct: false },
         { choice: "None of the above", correct: true }
      ]
   },

   {
      question: "Approximately how much global electricity output is produced from renewable sources?",
      answers: [
         { choice: "1 percent", correct: false },
         { choice: "10 percent", correct: true },
         { choice: "5 percent", correct: false },
         { choice: "20 percent", correct: false }
      ]
   },

   {
      question: "Dropping the thermostat from 70 to 68 degrees saves you about how much on your heating costs?",
      answers: [
         { choice: "10 percent", correct: false },
         { choice: "20 percent", correct: false },
         { choice: "1 percent", correct: false },
         { choice: "5 percent", correct: true }
      ]
   },

   {
      question: "Which of the following is an alternative material for making paper?",
      answers: [
         { choice: "Panda excrement", correct: false },
         { choice: "Hemp", correct: false },
         { choice: "Sheepskin", correct: false },
         { choice: "All of the above", correct: true }
      ]
   }
]



let questionOrder, questionIndex

//questions are hidden. once clicked, then first question appears. and the begin button disappears
function startGame() {
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


//display question and answer options in container. 
function loadNewQuestion(question) {
   triviaQuestion.innerText = question.question
   nextQuestionButton.classList.remove('hide')
   question.answers.forEach(answer => {
      let button = document.createElement('button')
      button.innerText = answer.choice
      button.classList.add('btn')
      if (answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener('click', chooseAnswer)
      triviaAnswer.appendChild(button)
   });
}

// 'choice' text still appears on top of answer options. 
function resetContainer() {
   nextQuestionButton.classList.add('hide')
   while (triviaAnswer.firstChild) {
      triviaAnswer.removeChild(triviaAnswer.firstChild)
   }
}
//is the chosen answer right or wrong
function chooseAnswer(event) {
   let chosenAnswer = event.target
   let correct = chosenAnswer.dataset.correct
   console.log(chosenAnswer)
   if (correct) {
      score += 1 
      scoreSpan.innerHTML = score
   }
   //   console.log(chosenAnswer, correctAnswer)
   answerStatus(document.body, correct)
   Array.from(triviaAnswer.children).forEach(button => {
      answerStatus(button, button.dataset.correct)
   })
   if (questionOrder.length > questionIndex + 1) {
      nextQuestionButton.classList.remove('hide')
   } else {
      startButton.innerText = 'Play Again'
      startButton.classList.remove('hide')
      nextQuestionButton.classList.add('hide')
   }

}

function answerStatus(element, correct) {
   resetStatus(element)
   if (correct) {
      element.classList.add('correct')
     
   } else {
      element.classList.add('wrong')
   }
}

function resetStatus(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
}



