// Render => User Action => State Changes => Render => ...
// what does the app need to answer all the questions?
// how does the app react to the user?

//let questions = [question1, question2, question3];

// stateObject={
//     view: //start, question, results, final,
// 	// questions: [question1, question2, question3 ...],
//     score: 0,
//     currentQuestion: 1,
//     lastCorrectAnswer:
// }

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
 
// state modifier functions

function changeQuestionView() {
    iState.view = 'question';
}

function evaluateChoice(state, userSelectedAnswer) {
    if (userSelectedAnswer === state.questions[0/*currentQue*/].ansKey) {
        state.score++;

    } else {
    	//tell user correct answer if wron
    };
     currentQue++; 
}

// Evemt Listeners







/// Render functions

function appStart() {
    $('button').on('click', function() {
        changeQuestionView();
        render();
    })

    render();
    renderQuestion();
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
            <input type="radio" id="1" name="choice">${iState.questions[i].ans[0]}</input>
            <input type="radio" id="2" name="choice">${iState.questions[i].ans[1]}</input>
            <input type="radio" id="3" name="choice">${iState.questions[i].ans[2]}</input>
            <input type="radio" id="4" name="choice">${iState.questions[i].ans[3]}</input>
            <br>
            <br>
            <button class="next-question">Was I right?</button>`;
            
        $('div.question').append(questionTemplate);
     }
//      clickCount++
    })
}

function renderEvaluation(state,userSelectedAnswer) {
	let correctAnswerTemplate = `
		<h3> You got it Right!<h3>
		<button class="next-question">Move on to next Quesiton! </button>`;
	let wrongAnswerTemplate = `
		<h3> Ooops! You got it wrong. The correct answer is ${ansKey}<h3>
		<button class="next-question">Move on to next Quesiton! </button>`;
		if (evaluateChoice(state, userSelectedAnswer)) {
			 $('div.correct').append(questionTemplate);
		}

}













$(appStart);





