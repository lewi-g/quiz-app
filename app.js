// Render => User Action => State Changes => Render => ...
//let questions = [question1, question2, question3];

// stateObject={
//     view: //start, question, results, final,
// 	// questions: [question1, question2, question3 ...],
//     score: 0,
//     currentQuestion: 1,
//     lastCorrectAnswer:
// }

// state modifier functions
//user selectedAnswer is going to give us a number = index
var iState = {
    view: 'start',
    questions: [{
    	que: "What is the capital city of NY state?",
    	ans: ['NYC', 'Albany', 'Buffalo', 'Staten Island'],
    	ansKey: 1
			}, 
			{
    	que: "What is the capital city of Bulgaria?",
    	ans: ['Sofia', 'Serbia', 'Bucharest', 'Vienna'],
    	ansKey: 0
			},
			{
    	que: "What continent is Iran in?",
    	ans: ['United States', 'Europe', 'Asia', 'Antarctica'],
    	ansKey: 2
			}],
		currentQue:0,
		score:0
}

function evaluateChoice(state, userSelectedAnswer) {
		let correctAnswerTemplate = `
				<h3> You got it Right!<h3>
		<button class="next-question">Move on to next Quesiton! </button>`;
		let wrongAnswerTemplate = `
				<h3> Ooops! You got it wrong. The correct answer is ${ansKey}<h3>
		<button class="next-question">Move on to next Quesiton! </button>`;
    if (userSelectedAnswer === state.questions[0/*currentQue*/].ansKey) {
        state.score++;
        $('div.correct').append(questionTemplate);
    } else {
    	//tell user correct answer if wron
    };
     currentQue++; 
}

// hit 'start quiz', loads up question 1
// *then* user clicks an option
// console.log(scoreUpdater(stateObject, 3));

// what's the current question?

// function to update view

// what does the app need to answer all the questions?
// how does the app react to the user?

// $(fn)

function appStart() {
    $('button').on('click', function() {
        changeQuestionView();
        render();
    })

    render();
    renderQuestion();
}

function changeQuestionView() {
    iState.view = 'question';
    // display question form question1 ->html template


    // display choices 
    // display next button
    // keep track of questions answered
    // display current score

}

function render() {
    var selector = '.' + iState.view
    $('.page').removeClass('current');
    $(selector).addClass('current');
}

function renderQuestion() {
    $('button').on('click', function() {
			 // let clickCount = 0; 

       for (let i=0; i<iState.questions.length; i++) {
// input type= radio  name
        let questionTemplate = `
        <h2>${iState.questions[i].que}</h2>
            <input type="radio" name="choice">${iState.questions[i].ans[0]}</input>
            <input type="radio" name="choice">${iState.questions[i].ans[1]}</input>
            <input type="radio" name="choice">${iState.questions[i].ans[2]}</input>
            <input type="radio" name="choice">${iState.questions[i].ans[3]}</input>
            <br>
            <br>
            <button class="next-question">Was I right?</button>`;
            
        $('div.question').append(questionTemplate);
     }
//      clickCount++
    })
}

// function displayNextQuestion() {

// }













$(appStart);