// Render => User Action => State Changes => Render => ...

question1 = {
    question: "What is the capital city of NY state?",
    answers: ['NYC', 'Albany', 'Buffalo', 'Staten Island'],
    correctAnswer: 1
}

// stateObject={
//     view: //start, question, results, final,
// 	// questions: [question1, question2, question3 ...],
//     score: 0,
//     currentQuestion: 1,
//     lastCorrectAnswer:
// }

// state modifier functions
//user selectedAnswer is going to give us a number = index
function scoreUpdater(state, userSelectedAnswer) {
    if (userSelectedAnswer === state.questions[0].correctAnswer) {
        state.score++;
    }
}

// hit 'start quiz', loads up question 1
// *then* user clicks an option
// console.log(scoreUpdater(stateObject, 3));

// what's the current question?

// function to update view

// what does the app need to answer all the questions?
// how does the app react to the user?

// $(fn)

var initialState = {
    view: 'start'
}

function appStart() {
    $('button').on('click', function() {
        displayQuestionView();
        render();
    })

    render();
}

function displayQuestionView() {
    initialState.view = 'question';
}
// `${}`
function render() {
    var selector = '.' + initialState.view
    $(selector).addClass('current')
}

$(appStart);