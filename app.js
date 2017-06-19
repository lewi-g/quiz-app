question1 = {
    question: "What is the capital city of NY state?",
    answers: ['NYC', 'Albany', 'Buffalo', 'Staten Island'],
    correctAnswer: 1
}

stateObject={
    view: //start, questions, results, final,
	questions: [question1, question2, question3 ...],
    score: 0,
    currentQuestion: 1
}

// state modifier functions
//user selectedAnswer is going to give us a number = index
function scoreUpdater(state, userSelectedAnswer) {
    if (userSelectedAnswer === state.questions[0].correctAnswer) {
        state.score++;
    }
}

// hit 'start quiz', loads up question 1
// *then* user clicks an option
console.log(scoreUpdater(stateObject, 3));

// what's the current question?

// function to update view